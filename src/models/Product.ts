import { model, models, Schema } from "mongoose";

export type ProductType = {
  id: string;
  name: string;
  price: string;
};

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
  },
);

export const Product = models?.Product || model("Product", productSchema);
