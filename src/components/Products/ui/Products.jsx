import React from "react";
import styles from "./Products.module.scss";
import { Product } from "../../Product/ui/Product";

const Products = ({ data }) => {
  return (
    <div className={styles.products}>
      {data?.map((item) => (
        <div key={item.id}>
          <p className={styles.title}>{item.name}</p>
          <div className={styles.productsItems}>
            {item.tools.map((tool) => (
              <Product
                key={tool.id}
                name={tool.name}
                category_id={tool.category_id}
                id={tool.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Products };
