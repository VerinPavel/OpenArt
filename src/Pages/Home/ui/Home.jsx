import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <div>
        <h1>
          Это домашняя страница. Пожалуйста, передите в меню для навигации
        </h1>
      </div>
    </section>
  );
};

export { Home };
