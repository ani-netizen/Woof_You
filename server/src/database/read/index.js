import mongoose from "mongoose";

const ReadSchema = new mongoose.Schema(
  {
    headline: { type: String, required: true },
    content: { type: String, required: true },
    coverPicture: { type: String, required: true },
    postedBy: { type: mongoose.Types.ObjectId, ref: "Users", required: true },
  },
  {
    timestamps: true,
  }
);

export const ReadModel = mongoose.model("Read", ReadSchema);
