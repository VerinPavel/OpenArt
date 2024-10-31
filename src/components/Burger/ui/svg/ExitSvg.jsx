import styles from "./ExitSvg.module.scss";

const ExitSvg = ({ onClick }) => {
  return (
    <svg
      className={styles.svg}
      onClick={() => onClick()}
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
  );
};
export { ExitSvg };
