import React from "react";
import styles from "./Products.module.scss";
import { Product } from "../../Product/ui/Product";

const Products = ({ data }) => {
  return (
    <div className={styles.products}>
      {data.map((item) => (
        <div key={item.id}>
          <p className={styles.title}>{item.title}</p>
          <div className={styles.productsItems}>
            {item.category.map((category) => (
              <Product key={category.id} category={category} id={item.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Products };
