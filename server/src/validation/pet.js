import joi from "joi";


export const ValidatePet = (userData) => {
  const Schema = joi.object({
    name: joi.string().required(),
    detail: joi.string().required(),
    age: joi.string().required(),
    isOpenToMate: joi.boolean().required(),
    breed: joi.string().required(),
    petPicture: joi.string().required(),
    owner: joi.string()
  });

  return Schema.validateAsync(userData);
};