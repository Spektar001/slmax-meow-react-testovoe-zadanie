import { ProductType } from "@/models/Product";
import ProductItem from "../Product/ProductItem";
import styles from "./Products.module.css";

type ProductsProps = {
  products: ProductType[];
};

const Products = ({ products }: ProductsProps) => {
  return (
    <div className={styles.main}>
      {products.map((product) => (
        <ProductItem
          name={product.name}
          price={product.price}
          id={product.id}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
