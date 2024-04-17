import { Product } from "../models/product.model.js";

export class ProductService {
  //1.Get all product:
  static async getAllProduct() {
    const product = await Product.find({});

    return product;
  }
  //2.Get product by id:
  static async getProductById(productId) {
    const foundProduct = await Product.findById(productId);

    if (!foundProduct) throw new Error("Product Not Found");

    return foundProduct;
  }
  //3.Create product:
  static async createProduct(productData) {
    const createProduct = Product.create(productData);

    return createProduct;
  }
  //4.Update product:
  static async updateProduct(productId, updateData) {
    const foundProduct = await this.getProductById(productId);

    Object.assign(foundProduct, updateData);

    const updatedProduct = await foundProduct.save();

    return updatedProduct;
  }
  //5.Delete product:
  static async deleteProduct(productId) {
    const response = await Product.findByIdAndDelete(productId);

    if (!response) throw new Error("Product not found");

    console.log(response);
  }
}
