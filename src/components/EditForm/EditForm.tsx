"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import styles from "./EditForm.module.css";

type EditFormProps = {
  id: string;
  product: {
    name: string;
    price: string;
  };
};

const EditForm = ({ product, id }: EditFormProps) => {
  const [name, setName] = useState(product?.name || "Random name");
  const [price, setPrice] = useState(product?.price || "0");
  const router = useRouter();

  const handleUpdate = async () => {
    await fetch(`/api/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    });
    router.push("/");
  };

  return (
    <div className={styles.edit}>
      <Link className={styles.goBack} href={"/"}>
        <IoArrowBackOutline />
        Go Back
      </Link>
      <p>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        Price:{" "}
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </p>
      <button type="button" className={styles.btnUpdate} onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default EditForm;
