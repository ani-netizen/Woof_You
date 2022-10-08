import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from 'passport';
require('dotenv').config()

import connectDB from "./database/connection.js";
import googleConfig from "./config/google.config";
import privateRouteConfig from "./config/route.config";

import Auth from "./API/Auth";

googleConfig(passport);
privateRouteConfig(passport);

const woof_you = express();
const Router = express.Router();

woof_you.use(cors());
woof_you.use(express.json());
woof_you.use(helmet());
woof_you.use(passport.initialize());


woof_you.use("/auth", Auth);

const PORT = process.env.PORT;

woof_you.get("/", async (req, res) => {
  try {
    console.log("ggfgcfxgv");
    return res.json("Welcome");
  } catch (error) {
    console.log(error);
    
  }
	
});

woof_you.listen(PORT||4000, () => {
  connectDB()
    .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"))
    .catch((error) => {
      console.log("DATABASE CONNECTION FAILED");
      console.log(error);
    });
});
