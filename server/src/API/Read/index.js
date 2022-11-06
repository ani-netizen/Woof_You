import express from "express";

import { ReadModel, UserModel } from "../../database/allModels";

const Router = express.Router();

Router.get("/", async (req, res) => {
  try {
    const reads = await ReadModel.find();

    if (reads.length === 0) {
      return res.json({ error: "No Read found in this city" });
    }
    return res.json({ reads });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/add", async (req, res) => {
  try {
    const read = await ReadModel.create(req.body.readDetails);

    const user = await UserModel.findByIdAndUpdate(req.body.user, {
      $push: { read: read._id },
    });

    return res.status(200).json({ read, user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const restaurant = await ReadModel.findById(_id);

    if (!restaurant) {
      return res.status(400).json({ error: "No restaurant found for this id" });
    }
    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
