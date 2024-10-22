import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./Products.module.scss";

const Product = ({ category, id }) => {
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={category.img} alt="" />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{category.name}</p>
        <p>By OpenArt</p>
      </div>
      <div className={styles.btnWrap}>
        <NavLink to={`/Technology/${id}/${category.id}`}>
          <button className={styles.btn}>Run</button>
        </NavLink>
      </div>
    </div>
  );
};

export { Product };
