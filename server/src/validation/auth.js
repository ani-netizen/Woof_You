import joi from "joi";

export const ValidateSignup = (userData) => {
  const Schema = joi.object({
    fullName: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().min(8).max(32),
    phoneNumber: joi.number(),
    profilePicture: joi.string(),
    address: joi.string(),
  });

  return Schema.validateAsync(userData);
};

export const ValidateSignin = (userData) => {
  const Schema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required(),
  });

  return Schema.validateAsync(userData);
};
