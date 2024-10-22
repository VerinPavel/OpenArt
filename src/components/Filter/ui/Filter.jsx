import React, { useState } from "react";
import styles from "./Filter.module.scss";

const Filter = ({ onSelectCategory, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const handleButtonClick = (id) => {
  //   setActiveIndex(id);
  // };

  const handleButtonClick = (title, id) => {
    onSelectCategory(title);
    setActiveIndex(id);
  };

  const d = data.slice();

  const a = {
    id: 0,
    title: "Все",
  };

  d.unshift(a);

  return (
    <div className={styles.filter}>
      {d.map((item) => (
        <button
          key={item.id}
          className={styles.btn}
          style={{
            color: activeIndex === item.id ? "#FFF" : "#98989A",
            borderColor: activeIndex === item.id ? "#A1A2A3" : "transparent",
          }}
          onClick={() => handleButtonClick(item.title, item.id)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
export { Filter };
