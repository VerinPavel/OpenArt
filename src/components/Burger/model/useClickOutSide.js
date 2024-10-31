import { useEffect } from "react";

const useClickOutside = (isOpen, dropRef, setIsMenuOpen, setIsOpen) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        dropRef.current &&
        !dropRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setTimeout(() => {
          setIsOpen(false);
        }, 500);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, dropRef, setIsOpen, setIsMenuOpen]);
};

export default useClickOutside;
