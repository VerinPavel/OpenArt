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
  const { categories, loading, error } = categoriesState;

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
        </div>
      )}
    </div>
  );
}
