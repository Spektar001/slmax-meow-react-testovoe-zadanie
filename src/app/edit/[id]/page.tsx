import EditForm from "@/components/EditForm/EditForm";
import { getProductBuId } from "@/lib/fetchingProducts";
import { ProductType } from "@/models/Product";
import styles from "./page.module.css";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const product: ProductType = await getProductBuId(params.id);
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Edit Page</h1>
      <EditForm product={product} id={params.id} />
    </div>
  );
};

export const revalidate = 30;

export default EditPage;
