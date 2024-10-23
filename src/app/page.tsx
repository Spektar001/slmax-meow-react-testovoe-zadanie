import Products from "@/components/Products/Products";
import { getProducts } from "@/lib/fetchingProducts";
import { ProductType } from "@/models/Product";
import styles from "./page.module.css";

const Home = async () => {
  const products: ProductType[] = await getProducts();

  return (
    <div>
      <h1 className={styles.title}>Product List</h1>
      <Products products={products} />
    </div>
  );
};

export const revalidate = 30;

export default Home;
