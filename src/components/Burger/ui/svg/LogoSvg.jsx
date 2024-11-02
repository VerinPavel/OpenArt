const LogoSvg = ({ onClick }) => {
  return (
    <svg
      onClick={() => onClick()}
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
  );
};
export { LogoSvg };