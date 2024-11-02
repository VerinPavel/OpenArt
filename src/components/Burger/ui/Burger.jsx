import styles from "./Burger.module.scss";

import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { useCategories } from "../../../store/store";

import useClickOutside from "../model/useClickOutSide";

import { User } from "../../User";
import { ExitSvg } from "./svg/ExitSvg";
import { LogoSvg } from "./svg/LogoSvg";
import { StarSvg } from "./svg/StarSvg";
import { HomeSvg } from "./svg/HomeSvg";

export default function Burger() {
  const tablet = useMediaQuery("(min-width: 769px) and (max-width: 1279px)");
  const mobile = useMediaQuery("(min-width: 320px) and (max-width: 768px)");

  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropRef = useRef(null);

  const categoriesState = useCategories();
  const { categories, loading, error, reloadPage } = categoriesState;

  useClickOutside(isOpen, dropRef, setIsMenuOpen, setIsOpen);

  // const handleOpenWindow = () => {
  //   if (!isOpen) {
  //     setIsOpen(true);
  //     console.log(isOpen);
  //     setTimeout(() => {
  //       setIsMenuOpen(true);
  //       console.log(isMenuOpen);
  //     }, 0);
  //   } else {
  //     setIsMenuOpen(false);
  //     console.log(isMenuOpen);
  //     setTimeout(() => {
  //       setIsOpen(false);
  //       console.log(isOpen);
  //     }, 0);
  //   }
  // };
  const handleOpenWindow = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsMenuOpen(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsMenuOpen(true);
      }, 0);
    } else {
      setIsMenuOpen(false);
    }
  }, [isOpen]);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  if (error) {
    return <h1>error...</h1>;
  }

  return (
    <div className={styles.burger} ref={dropRef}>
      <LogoSvg onClick={handleOpenWindow} />
      {isOpen && (
        <div className={`${isMenuOpen ? styles.open : ""} ${styles.menu} `}>
          <div className={styles.logoWrap}>
            {tablet || mobile ? (
              <User />
            ) : (
              <p className={styles.logo}>RRGroup</p>
            )}
            <ExitSvg onClick={handleOpenWindow} />
          </div>
          <nav className={styles.nav}>
            <NavLink
              key={0}
              to={`/`}
              className={`${
                location.pathname === `/` ? styles.activeLink : ""
              } ${styles.link}`}
            >
              <p className={styles.title} onClick={handleOpenWindow}>
                <HomeSvg />
                Home
              </p>
            </NavLink>
            <hr />
            {categories[0]?.map((section, index) => (
              <NavLink
                key={index}
                to={`/${section.slug}`}
                className={`${
                  location.pathname === `/${section.slug}`
                    ? styles.activeLink
                    : ""
                } ${styles.link}`}
              >
                <p className={styles.title} onClick={handleOpenWindow}>
                  <StarSvg />
                  {section.name}
                </p>
              </NavLink>
            ))}
          </nav>
          {tablet || mobile ? (
            <div className={styles.exitWrap} onClick={() => reloadPage()}>
              <p className={styles.exitText}>Выйти</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                  fill="white"
                ></path>
              </svg>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
