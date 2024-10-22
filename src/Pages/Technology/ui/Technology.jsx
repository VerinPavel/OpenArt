import React from "react";
import styles from "./Technology.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { data } from "../../Ai/lib/data";

const Technology = () => {
  const { id, idd } = useParams();
  const array = data.filter((arr) => arr.id == id)[0];
  const items = array.category.filter((item) => item.id == idd)[0];

  return items ? (
    <section className={styles.technology}>
      <div className={styles.top}>
        <h1 className={styles.title}>{items.name}</h1>
        <NavLink to={"/"}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_124_785)">
              <rect
                x="0.364583"
                y="0.364583"
                width="34.2708"
                height="34.2708"
                rx="17.1354"
                stroke="white"
                strokeOpacity="0.6"
                strokeWidth="0.729167"
              />
              <path
                d="M13.2463 13.2463L21.7537 21.7537"
                stroke="white"
                strokeWidth="1.45833"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.7539 13.2463L13.2465 21.7537"
                stroke="white"
                strokeWidth="1.45833"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_124_785">
                <rect width="35" height="35" rx="17.5" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </NavLink>
      </div>
      <div style={{ width: "100%", minHeight: "100vh", height: "1000px" }}>
        <iframe
          title="Google Map"
          src="https://fluxstudio-gentoolz.ngrok.io/"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </section>
  ) : (
    <div className={styles.itemContainer}>
      <NavLink to={"/"}>НАЗАД</NavLink>
    </div>
  );
};
export { Technology };
