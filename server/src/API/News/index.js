import express from "express";

import { NewsModel } from "../../database/allModels";

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
    const news = await NewsModel.find();

    if (news.length === 0) {
      return res.json({ error: "No news found in this city" });
    }
    return res.json({ news });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/add", async (req, res) => {
    try {
      const newPet = await NewsModel.create(req.body);
  
      return res.status(200).json({ newPet });
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
    const restaurant = await NewsModel.findById(_id);

    if (!restaurant) {
      return res.status(400).json({ error: "No restaurant found for this id" });
    }
    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



export default Router;
