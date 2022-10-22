import express from "express";

import { PetModel, UserModel } from "../../database/allModels";
import { ValidatePet } from "../../validation/pet";

const Router = express.Router();

/*
Route	      	|	  /
Description	  |	  Get all the pets details based on the city 
Access	    	|	  Public
Parameter	    |	  --
Methods	    	|	  GET
*/
Router.get("/", async (req, res) => {
  try {
    const pets = await PetModel.find();

    if (pets.length === 0) {
      return res.json({ error: "No pets found in this city" });
    }
    return res.json({ pets });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/add", async (req, res) => {
  try {
    await ValidatePet(req.body.petDetails);
    const newPet = await PetModel.create(req.body.petDetails);

    const user = await UserModel.findByIdAndUpdate(req.body.user, {
      pets: [newPet._id],
    });

    return res.status(200).json({ newPet, user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
/*
Route	      	| 	/
Description	  | 	Get all the pets details based on the id 
Access	    	| 	Public
Parameter	    |	  id
Methods	    	| 	GET
*/
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const restaurant = await PetModel.findById(_id);

    if (!restaurant) {
      return res.status(400).json({ error: "No restaurant found for this id" });
    }
    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
