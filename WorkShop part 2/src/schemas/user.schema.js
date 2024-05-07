import joi from "joi";

export const userSchema = joi.object({
  firstName: joi.string().min(2).required(),
  lastName: joi.string().min(2).required(),
  age: joi.number().min(19).required(),
  email: joi.string().email().required(),
  country: joi.string().required(),
  orders: joi.array().items(joi.string()),
});

export const updateUserSchema = joi.object({
  firstName: joi.string().min(2),
  lastName: joi.string().min(2),
  age: joi.number().min(19),
  email: joi.string().email(),
  country: joi.string(),
  orders: joi.array().items(joi.string()),
});
