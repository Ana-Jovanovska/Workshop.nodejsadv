import joi from "joi";

export const productSchema = joi.object({
  title: joi.string().required(),
  stock: joi.number().required(),
  description: joi.string().required(),
  category: joi.string().required(),
  price: joi.number().required(),
  rating: joi.number().min(1).max(5).required(),
});

export const updatedProductSchema = joi.object({
  title: joi.string(),
  stock: joi.number(),
  description: joi.string(),
  category: joi.string(),
  price: joi.number(),
  rating: joi.number().min(1).max(5),
});
