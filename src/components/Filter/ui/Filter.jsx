import React, { useState } from "react";
import styles from "./Filter.module.scss";

const Filter = ({ onSelectCategory, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (title, id) => {
    onSelectCategory(title);
    setActiveIndex(id);
  };

  if (!data) return null;

  const category = data.slice();

  const all = {
    id: 0,
    name: "Все",
  };
  category.unshift(all);

  return (
    <>
      {category ? (
        <div className={styles.filter}>
          {category.map((item) => (
            <button
              key={item.id}
              className={styles.btn}
              style={{
                color: activeIndex === item.id ? "#FFF" : "#98989A",
                borderColor:
                  activeIndex === item.id ? "#A1A2A3" : "transparent",
              }}
              onClick={() => handleButtonClick(item.name, item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
};
export { Filter };
