import styles from "./Product.module.scss";

import { NavLink } from "react-router-dom";

const Product = ({ id, category_id, name, description, background }) => {
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={background} alt={name} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{name}</p>
        <p className={styles.description}>{description}</p>
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
