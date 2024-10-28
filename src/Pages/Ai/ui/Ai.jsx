import React, { useState } from "react";
import styles from "./Ai.module.scss";
import { Filter } from "../../../components/Filter";
import { Products } from "../../../components/Products";
import { useCategories } from "../../../store/store";

const Ai = ({ id }) => {
  const categoriesState = useCategories();
  const { categories, loading, error } = categoriesState;
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const data = categories[0];
  const array = data[id].categories;
  console.log(data[id]);
  console.log(array);

  const filteredData =
    selectedCategory === "Все"
      ? array
      : array?.filter((item) => item.name === selectedCategory);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>error...</h1>;
  }

  return (
    <section className={styles.ai}>
      <div className={styles.top}>
        <h1 className={styles.title}>{data[id].name}</h1>
        <p>{data[id].description}</p>
      </div>
      <Filter data={array} onSelectCategory={setSelectedCategory} />
      <Products data={filteredData} />
    </section>
  );
};

export { Ai };
