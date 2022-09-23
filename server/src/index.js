import express from "express";
import cors from "cors";
import helmet from "helmet";

import connectDB from "./database/connection.js";

const woof_you = express();

woof_you.use(cors);
woof_you.use(express.json());
woof_you.use(helmet());

const PORT = process.env.PORT;

woof_you.get('/he', () => ('hello'))

woof_you.listen(PORT, () => {
  connectDB()
    .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"))
    .catch((error) => {
      console.log("DATABASE CONNECTION FAILED");
      console.log(error);
    });
});
