import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: { type: String },
    phoneNumber: { type: Number },
    profilePicture: { type: String },
    pets: [{ type: mongoose.Types.ObjectId, ref: "Pets" }],
    read: [{ type: mongoose.Types.ObjectId, ref: "read" }],
    isPremium: { type: Boolean, default: false },
    isPremiumPlus: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, "WoofYou");
};

UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
  const checkUserByEmail = await UserModel.findOne({ email });
  const checkUserByPhone = await UserModel.findOne({ phoneNumber });

  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User already exists");
  }

  return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error("User does not exist");
  }

  const doesPasswordMatch = bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) {
    throw new Error("Invalid Password");
  }

  return user;
};

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(8, (error, salt) => {
    if (error) {
      return next(error);
    }

    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }

      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("Users", UserSchema);
