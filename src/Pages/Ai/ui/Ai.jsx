import React, { useState } from "react";
import styles from "./AI.module.scss";
import { Filter } from "../../../components/Filter";
import { Products } from "../../../components/Products";
import { data } from "../lib/data";

const Ai = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filteredData =
    selectedCategory === "Все"
      ? data
      : data.filter((item) => item.title === selectedCategory);

  return (
    <section className={styles.ai}>
      <div className={styles.top}>
        <h1 className={styles.title}>AI Инструменты</h1>
        <p>Самые лучшие AI инструменты для самой лучшей компании.</p>
      </div>
      <Filter data={data} onSelectCategory={setSelectedCategory} />
      <Products data={filteredData} />
    </section>
  );
};
export { Ai };
