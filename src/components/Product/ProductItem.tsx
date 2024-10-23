import Image from "next/image";
import Link from "next/link";
import styles from "./ProductItem.module.css";

type ProductProps = {
  name: string;
  price: string;
  id: string;
};

const ProductItem = ({ name, price, id }: ProductProps) => {
  return (
    <div className={styles.product}>
      <Image src={"vercel.svg"} width={200} height={150} alt={"image"} />
      <p>Name: {name}</p>
      <p>Price: {price}$</p>
      <Link className={styles.editBtn} href={`/edit/${id}`}>
        Edit
      </Link>
    </div>
  );
};

export default ProductItem;
