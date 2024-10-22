import React from "react";
import styles from "./Header.module.scss";
import Burger from "../../Burger/ui/Burger";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.logoSection}>
          <Burger />
          <p className={styles.logo}>RRGroup</p>
        </div>
        {/* <div className={styles.buttons}>
          <button className={styles.btn}>Upgrade</button>
          <button className={styles.btn}>Create</button>
        </div> */}
      </div>
    </header>
  );
};

export { Header };
