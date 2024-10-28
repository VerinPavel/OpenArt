import { NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import Burger from "../../Burger/ui/Burger";
import { useCategories, useHeaderActive } from "../../../store/store";

const Header = () => {
  const headerState = useHeaderActive();
  const { headerActive } = headerState;

  const categoriesState = useCategories();
  const { reloadPage } = categoriesState;

  const [isVisible, setIsVisible] = useState(false);
  const dropRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isVisible &&
        dropRef.current &&
        !dropRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible]);

  return headerActive ? (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.logoSection}>
          <Burger />
          <NavLink to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <p className={styles.logo}>RRGroup</p>
          </NavLink>
        </div>
        <div className={styles.profile} ref={dropRef}>
          <div className={styles.img} onClick={handleClick}>
            <img src="/iaam.jpg" alt="err" />
          </div>
          {isVisible && (
            <div
              className={`${styles.drop} ${
                isAnimating ? styles.dropAnimate : ""
              }`}
            >
              <div className={styles.info}>
                <p>Pavel</p>
              </div>
              <button className={styles.btn} onClick={() => reloadPage()}>
                Выход
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  ) : null;
};

export { Header };
