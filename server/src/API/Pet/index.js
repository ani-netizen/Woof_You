import express from "express";

import { PetModel, UserModel } from "../../database/allModels";
import { ValidatePet } from "../../validation/pet";

const Router = express.Router();

Router.post("/add", async (req, res) => {
  try {
    await ValidatePet(req.body.petDetails);
    const newPet = await PetModel.create(req.body.petDetails);

    const user = await UserModel.findByIdAndUpdate(req.body.user, {
      $push: { pets: newPet._id },
    });

    return res.status(200).json({ newPet, user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/mates", async (req, res) => {
  try {
    const pets = await PetModel.find({ isOpenToMate: true });

    if (pets.length === 0) {
      return res.json({ error: "No Read found in this city" });
    }
    return res.json({ pets });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/adopts", async (req, res) => {
  try {
    const pets = await PetModel.find({ isOpenToAdopt: true });

    if (pets.length === 0) {
      return res.json({ error: "No Read found in this city" });
    }
    return res.json({ pets });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const pets = await PetModel.findById(_id);

    if (!pets) {
      return res.status(400).json({ error: "No pets found for this id" });
    }
    return res.json({ pets });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
