import mongoose from "mongoose";
require('dotenv').config()

const connectDB = async () => {
  return mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB
