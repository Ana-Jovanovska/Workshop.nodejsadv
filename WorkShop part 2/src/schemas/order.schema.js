import joi from "joi";

export const orderSchema = joi.object({
  date: joi.string().required(),
  user: joi.string().required(),
  products: joi.array().items(joi.string()),
});

export const orderUpdateSchema = joi.object({
  date: joi.string(),
  user: joi.string(),
  products: joi.array().items(joi.string()),
});
