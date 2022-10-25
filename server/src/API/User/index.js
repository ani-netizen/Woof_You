import express from "express";
import passport from "passport";
import { UserModel } from "../../database/allModels";

const Router = express.Router();

Router.get("/", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { email, fullName, phoneNumber, address } =
      req.session.passport.user._doc;

    return res.json({ user: { email, fullName, phoneNumber, address } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const getUser = await UserModel.findById(id);

    if (!getUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const { fullName } = getUser;
    return res.json({ user: { fullName } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { userData } = req.body;

    const updateUserData = await UserModel.findByIdAndUpdate(
      id,
      { $set: { userData } },
      { new: true }
    );

    return res.json({ user: updateUserData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
