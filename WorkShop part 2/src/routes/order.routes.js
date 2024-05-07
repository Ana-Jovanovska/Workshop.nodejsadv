import { Router } from "express";
import { OrderController } from "../controllers/order.controller.js";

export const orderRouter = Router();

orderRouter.get("/", OrderController.getAllOrder);
orderRouter.get("/:id", OrderController.getOrderById);
orderRouter.post("/", OrderController.createOrder);
orderRouter.patch("/:id", OrderController.updateOrder);
orderRouter.delete("/:id", OrderController.deleteOrder);
