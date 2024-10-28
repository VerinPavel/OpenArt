import React, { useState } from "react";
import styles from "./Technology.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { useCategories, useHeaderActive } from "../../../store/store";

const Technology = () => {
  const { category, technology } = useParams();

  const headerState = useHeaderActive();
  const { setHeaderState } = headerState;

  const categoriesState = useCategories();
  const { categories, loading, error } = categoriesState;

  const data = categories[0];

  const [fullScreen, setFullScreen] = useState(false);
  const screen = () => {
    if (fullScreen) {
      setFullScreen(false);
      setHeaderState();
    } else {
      setFullScreen(true);
      setHeaderState();
    }
  };

  const paddingTop = fullScreen ? "15px" : "35px";
  const height = fullScreen ? "calc(100vh - 80px)" : "calc(100vh - 220px)";
  const padding = fullScreen ? "0 0 0 0" : "0 64px 40px 64px";

  const array = data[0].categories.filter((arr) => arr.id == technology)[0];
  const items = array?.tools.filter((item) => item.id == category)[0];

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>error...</h1>;
  }

  return (
    <section className={styles.technology} style={{ paddingTop: paddingTop }}>
      <div className={styles.top}>
        <h1 className={styles.title}>{items ? items.name : "Не найдено"}</h1>
        <div className={styles.btnsWrap}>
          <button className={styles.btn} onClick={screen}>
            {fullScreen ? "уже" : "шире"}
          </button>
          <NavLink
            to={"/ai-tools"}
            style={{ height: "35px" }}
            onClick={() => setHeaderState()}
          >
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
      </div>
      {items ? (
        <div
          style={{
            padding: padding,
            height: height,
          }}
        >
          <iframe src={items.src} width="100%" height="100%" frameBorder="0" />
        </div>
      ) : null}
    </section>
  );
};
export { Technology };

// const [initialLoad, setInitialLoad] = useState(true);

// useEffect(() => {
//   if (initialLoad) {
//     setInitialLoad(false);
//     getCategories();
//   }
// }, [initialLoad, getCategories]);
