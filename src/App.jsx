import { Router } from "./app/router";
import "./App.css";
import { useCategories } from "./store/store";
import { useEffect } from "react";

function App() {
  const categoriesState = useCategories();
  const { getCategories } = categoriesState;
  useEffect(() => {
    getCategories();
  }, []);

  return <Router />;
}

export default App;
