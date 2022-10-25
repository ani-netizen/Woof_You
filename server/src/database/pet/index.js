import mongoose from "mongoose";

const PetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    detail: { type: String, required: true },
    isOpenToMate: { type: Boolean, required: true },
    isOpenToAdopt: { type: Boolean, required: true },
    breed: { type: String, required: true },
    petPictures: [{ type: String, required: true }],
    age: { type: String, required: true },
    owner: { type: mongoose.Types.ObjectId, ref: "Users", required: true },
  },
  {
    timestamps: true,
  }
);

export const PetModel = mongoose.model("Pets", PetSchema);
