import styles from "./User.module.scss";

import { useRef } from "react";
import { useCategories, useUser } from "../../../store/store";

import { useMediaQuery } from "@react-hook/media-query";
import useClickOutside from "../model/useClickOutSide";
import useToggleVisibility from "../model/useToggleVisibility";

const User = () => {
  const tablet = useMediaQuery("(min-width: 769px) and (max-width: 1279px)");
  const mobile = useMediaQuery("(min-width: 320px) and (max-width: 768px)");

  const categoriesState = useCategories();
  const { reloadPage } = categoriesState;

  const userState = useUser();
  const { user } = userState;

  const { isVisible, isAnimating, handleClick, setIsVisible } =
    useToggleVisibility();
  const dropRef = useRef(null);

  useClickOutside(dropRef, () => {
    if (isVisible) {
      setIsVisible(false);
    }
  });

  return (
    <div className={styles.profile} ref={dropRef}>
      <div className={styles.img} onClick={handleClick}>
        <img src={user.avatar} alt={user.name} />
      </div>
      {(isVisible || tablet || mobile) && (
        <div
          className={`${styles.drop} ${
            isAnimating && !(tablet || mobile) ? styles.dropAnimate : ""
          }`}
        >
          <div className={styles.info}>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
          </div>
          {!tablet && !mobile ? (
            <button className={styles.btn} onClick={() => reloadPage()}>
              Выход
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};
export { User };
