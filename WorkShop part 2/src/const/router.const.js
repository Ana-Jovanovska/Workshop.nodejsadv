import { Router } from "express";
import { productRouter } from "../routes/product.routes.js";
import { orderRouter } from "../routes/order.routes.js";
import { userRouter } from "../routes/user.routes.js";

export const globalRouter = Router();

globalRouter.use("/product", productRouter);
globalRouter.use("/order", orderRouter);
globalRouter.use("/users", userRouter);
