import React, { useState } from "react";
import styles from "./Burger.module.scss";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenWindow = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setIsMenuOpen(true);
      }, 0);
    } else {
      setIsMenuOpen(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 0);
    }
  };

  return (
    <div className={styles.burger}>
      <svg
        onClick={() => handleOpenWindow()}
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="46" height="46" rx="6" fill="#262626" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.25 15.5625C10.25 14.9757 10.7257 14.5 11.3125 14.5H34.6875C35.2743 14.5 35.75 14.9757 35.75 15.5625C35.75 16.1493 35.2743 16.625 34.6875 16.625H11.3125C10.7257 16.625 10.25 16.1493 10.25 15.5625ZM10.25 23C10.25 22.4132 10.7257 21.9375 11.3125 21.9375H34.6875C35.2743 21.9375 35.75 22.4132 35.75 23C35.75 23.5868 35.2743 24.0625 34.6875 24.0625H11.3125C10.7257 24.0625 10.25 23.5868 10.25 23ZM21.9375 30.4375C21.9375 29.8507 22.4132 29.375 23 29.375H34.6875C35.2743 29.375 35.75 29.8507 35.75 30.4375C35.75 31.0243 35.2743 31.5 34.6875 31.5H23C22.4132 31.5 21.9375 31.0243 21.9375 30.4375Z"
          fill="white"
        />
      </svg>
      {isOpen && (
        <div className={`${isMenuOpen ? styles.open : ""} ${styles.menu} `}>
          <div className={styles.logoWrap}>
            <p className={styles.logo}>OpenArt</p>
            <svg
              onClick={() => handleOpenWindow()}
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
          </div>
          <nav className={styles.nav}>
            <p className={styles.title} onClick={handleOpenWindow}>
              <svg
                className="iconify-icon iconify-icon-ph-sparkle css-1ir7qx2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M12.349 8.066 9.125 6.875 7.938 3.649a.995.995 0 00-1.868 0L4.875 6.875 1.649 8.063a.995.995 0 000 1.867l3.226 1.195 1.188 3.226a.995.995 0 001.867 0l1.195-3.226 3.226-1.187a.995.995 0 000-1.868Zm-3.786 2.198a.5.5 0 00-.297.296L7 13.99l-1.264-3.427a.5.5 0 00-.298-.3L2.009 9l3.429-1.264a.5.5 0 00.298-.298L7 4.008l1.264 3.428a.5.5 0 00.296.297L11.99 9ZM9 2.5a.5.5 0 01.5-.5h1V1a.5.5 0 011 0v1h1a.5.5 0 010 1h-1v1a.5.5 0 01-1 0V3h-1a.5.5 0 01-.5-.5m6.5 3a.5.5 0 01-.5.5h-.5v.5a.5.5 0 01-1 0V6H13a.5.5 0 010-1h.5v-.5a.5.5 0 011 0V5h.5a.5.5 0 01.5.5"
                ></path>
              </svg>
              AI Инструменты
            </p>
          </nav>
        </div>
      )}
    </div>
  );
}
