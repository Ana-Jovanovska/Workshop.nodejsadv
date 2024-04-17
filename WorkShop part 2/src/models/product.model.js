import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
    min: 1,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
    min: 1,
    max: 5,
  },
});

export const Product = model("Product", productSchema);
