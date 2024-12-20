// import { useEffect, useState } from "react";
// import styles from "./Ai.module.scss";
// import { Filter } from "../../../components/Filter";
// import { Products } from "../../../components/Products";
// import { useCategories } from "../../../store/store";
// import { useHeaderActive } from "../../../store/HeaderActive";

// const Ai = ({ id }) => {
//   const categoriesState = useCategories();
//   const { categories, loading, error } = categoriesState;
//   const [selectedCategory, setSelectedCategory] = useState("Все");

//   const headerState = useHeaderActive();
//   const { setHeaderState, headerActive } = headerState;

//   useEffect(() => {
//     if (!headerActive) {
//       setHeaderState(true);
//     } else null;
//   }, []);

//   const data = categories[0];
//   const array = data[id].categories;

//   const filteredData =
//     selectedCategory === "Все"
//       ? array
//       : array?.filter((item) => item.name === selectedCategory);

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }
//   if (error) {
//     return <h1>error...</h1>;
//   }

//   return (
//     <section className={styles.ai}>
//       <div className={styles.top}>
//         <h1 className={styles.title}>{data[id].name}</h1>
//         <p>{data[id].description}</p>
//       </div>
//       <Filter data={array} onSelectCategory={setSelectedCategory} />
//       <Products data={filteredData} />
//     </section>
//   );
// };

// export { Ai };

// Ai.js
import { useEffect, useState } from "react";
import styles from "./Ai.module.scss";
import { Filter } from "../../../components/Filter";
import { Products } from "../../../components/Products";
import { useCategories } from "../../../store/store";
import { useHeaderActive } from "../../../store/HeaderActive";

const Ai = ({ id }) => {
  const categoriesState = useCategories();
  const { categories, loading, error } = categoriesState;

  const headerState = useHeaderActive();
  const { setHeaderState, headerActive } = headerState;

  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || "Все"
  );

  useEffect(() => {
    if (!headerActive) {
      setHeaderState(true);
    }
  }, [headerActive, setHeaderState]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category);
  };

  if (!categories || loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }

  const data = categories[0];
  const array = data[id].categories;

  const filteredData =
    selectedCategory === "Все"
      ? array
      : array?.filter((item) => item.name === selectedCategory);

  return (
    <section className={styles.ai}>
      <div className={styles.top}>
        <h1 className={styles.title}>{data[id].name}</h1>
        <p>{data[id].description}</p>
      </div>
      <Filter
        data={array}
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory} // передаем выбранную категорию в Filter
      />
      <Products data={filteredData} />
    </section>
  );
};

export { Ai };
