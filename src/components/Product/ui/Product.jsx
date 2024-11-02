import styles from "./Product.module.scss";

import { NavLink } from "react-router-dom";

const Product = ({ id, category_id, name }) => {
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src="girl.webp" alt="" />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{name}</p>
        <p>By RRGroup</p>
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
