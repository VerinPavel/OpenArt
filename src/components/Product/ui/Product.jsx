import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./Products.module.scss";

const Product = ({ id, category_id, name }) => {
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src="girl.webp" alt="" />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{name}</p>
        <p>By OpenArt</p>
      </div>
      <div className={styles.btnWrap}>
        <NavLink to={`/ai-tools/${id}/${category_id}`}>
          <button className={styles.btn}>Run</button>
        </NavLink>
      </div>
    </div>
  );
};

export { Product };
