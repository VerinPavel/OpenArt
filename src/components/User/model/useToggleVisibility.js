import { useState } from "react";

const useToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return {
    isVisible,
    setIsVisible,
    isAnimating,
    handleClick,
  };
};

export default useToggleVisibility;
