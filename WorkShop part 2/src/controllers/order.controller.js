import { OrderService } from "../services/order.service.js";
import { orderSchema, orderUpdateSchema } from "../schemas/order.schema.js";
export class OrderController {
  //1.Get all order:
  static async getAllOrder(req, res) {
    try {
      const orders = await this.OrderService.getAllOrder(req.query);

      return res.json(orders);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
  //2.Get order by id:
  static async getOrderById(req, res) {
    try {
      const foundOrder = await OrderService.getOrderById(req.params.id);

      return res.status(201).json(foundOrder);
    } catch (error) {
      return res.status(404).json({ msg: error.message });
    }
  }
  //3.Create order:
  static async createOrder(req, res) {
    try {
      await orderSchema.validateAsync(req.body, { abortEarly: false });

      const newOrder = await OrderService.createOrder(req.body);

      return res.json(newOrder);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  }
  //4.Update order:
  static async updateOrder(req, res) {
    try {
      await orderUpdateSchema.validateAsync(req.body);

      const updatedOrder = await OrderService.updateOrder(
        req.params.id,
        req.body
      );

      return res.json(updatedOrder);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  }
  //5.Delete order:
  static async deleteOrder(req, res) {
    try {
      await OrderService.deleteOrder(req.params.id);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(404).json({ msg: error.message });
    }
  }
}
