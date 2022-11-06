import joi from "joi";

export const ValidatePet = (userData) => {
  const Schema = joi.object({
    name: joi.string().required(),
    detail: joi.string().required(),
    age: joi.string().required(),
    isOpenToMate: joi.boolean(),
    isOpenToAdopt: joi.boolean(),
    isMale: joi.boolean(),
    animalType: joi.string().required(),
    breed: joi.string().required(),
    petPictures: joi.array().items(joi.string()).required(),
    owner: joi.string().required(),
  });

  return Schema.validateAsync(userData);
};
