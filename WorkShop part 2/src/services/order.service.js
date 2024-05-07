import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";

export class OrderService {
  //1.Get all order:
  static async getAllOrders() {
    const orders = await Order.find({});

    return orders;
  }
  //2.Get order by id:
  static async getOrderById(orderId) {
    const foundOrder = await Order.findById(orderId)
      .populate({
        path: "user",
        model: User,
      })
      .populate({
        path: "products",
        model: Product,
      });

    if (!foundOrder) throw new Error("Order Not Found");

    return foundOrder;
  }
  //3.Create order:
  static async createOrder(orderData) {
    const newOrder = new Order(orderData);

    const foundUser = await User.findById(newOrder.user);

    if (!foundUser) throw new Error("User Not Found");

    foundUser.orders.push(newOrder._id);

    console.log(newOrder._id);

    foundUser.save();

    const order = await newOrder.save();

    return order;
  }
  //4.Update order:
  static async updateOrder(orderId, orderUpdateData) {
    const foundOrder = await Order.findById(orderId);

    Object.assign(foundOrder, orderUpdateData);

    const updatedOrder = await foundOrder.save();

    return updatedOrder;
  }
  //5.Delete order:
  static async deleteOrder(orderId) {
    const response = await Order.findByIdAndDelete(orderId);

    if (!response) throw new Error("Order Not Found");
  }
}
