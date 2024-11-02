import styles from "./Technology.module.scss";

import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { useCategories, useIframe } from "../../../store/store";
import { useHeaderActive } from "../../../store/HeaderActive";
import { ExitSvg } from "../../../components/Burger/ui/svg/ExitSvg";

const Technology = () => {
  const desctop = useMediaQuery("(min-width: 1280px)");
  const tablet = useMediaQuery("(min-width: 769px) and (max-width: 1279px)");
  const mobile = useMediaQuery("(min-width: 320px) and (max-width: 768px)");

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
      setHeaderState(true);
    } else {
      setFullScreen(true);
      setHeaderState(false);
    }
  };

  const back = () => {
    if (fullScreen) {
      setHeaderState(true);
    } else null;
  };

  // const paddingTop = fullScreen ? "15px" : "35px";
  // const height = fullScreen ? "calc(100vh - 80px)" : "calc(100vh - 220px)";
  // const padding = fullScreen ? "0 0 0 0" : "0 64px 40px 64px";
  const paddingTop = desctop
    ? fullScreen
      ? "15px"
      : "35px"
    : tablet
    ? fullScreen
      ? "15px"
      : "25px"
    : fullScreen
    ? "10px"
    : "20px"; // для mobile

  const height = desctop
    ? fullScreen
      ? "calc(100vh - 80px)"
      : "calc(100vh - 220px)"
    : tablet
    ? fullScreen
      ? "calc(100vh - 70px)"
      : "calc(100vh - 210px)"
    : fullScreen
    ? "calc(100vh - 60px)"
    : "calc(100vh - 200px)"; // для mobile

  const padding = desctop
    ? fullScreen
      ? "0 0 0 0"
      : "0 64px 40px 64px"
    : tablet
    ? fullScreen
      ? "0 0 0 0"
      : "0 32px 20px 32px"
    : fullScreen
    ? "0 0 0 0"
    : "0 16px 10px 16px";

  const array = data[0].categories.filter((arr) => arr.id == technology)[0];
  const items = array?.tools.filter((item) => item.id == category)[0];

  const iframetate = useIframe();
  const { getIframeUrl, iframeUrl } = iframetate;

  useEffect(() => {
    getIframeUrl(items.id);
  }, [items]);

  const url = iframeUrl?.data?.link;

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
            {fullScreen ? "Уже" : "Шире"}
          </button>
          <NavLink to={"/ai-tools"} style={{ height: "35px" }}>
            <ExitSvg onClick={back} />
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
          <iframe src={url} width="100%" height="100%" frameBorder="0" />
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
