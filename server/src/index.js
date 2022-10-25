import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

import connectDB from "./database/connection.js";
import googleConfig from "./config/google.config";
import privateRouteConfig from "./config/route.config";

import Auth from "./API/Auth";
import User from "./API/User";
import Pet from "./API/Pet";
import Read from "./API/Read";

googleConfig(passport);
privateRouteConfig(passport);

const woof_you = express();

woof_you.use(cors());
woof_you.use(express.json());
woof_you.use(helmet());
woof_you.use(passport.initialize());

woof_you.use("/auth", Auth);
woof_you.use("/user", User);
woof_you.use("/pet", Pet);
woof_you.use("/read", Read);

const PORT = process.env.PORT;

woof_you.get("/", (req, res) => {
  return res.json("Welcome");
});

woof_you.listen(PORT, () => {
  connectDB()
    .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"))
    .catch((error) => {
      console.log("DATABASE CONNECTION FAILED");
      console.log(error);
    });
});
