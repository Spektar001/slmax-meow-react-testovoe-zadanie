import { Product } from "@/models/Product";
import mongoose from "mongoose";

export const getProductBuId = async (id: string) => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Product by Id!");
  }
};

export const getProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const products = await Product.find();
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Products!");
  }
};
