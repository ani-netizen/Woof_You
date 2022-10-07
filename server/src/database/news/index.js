import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
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

export const NewsModel = mongoose.model("News", NewsSchema);
