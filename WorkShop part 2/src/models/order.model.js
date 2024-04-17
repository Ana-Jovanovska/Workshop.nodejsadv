import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  date: {
    type: String,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export const Order = model("Order", orderSchema);
