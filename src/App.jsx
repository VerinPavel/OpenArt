import { Router } from "./app/router";
import "./App.css";
import { useCategories, useUser } from "./store/store";
import { useEffect } from "react";

function App() {
  const categoriesState = useCategories();
  const { getCategories } = categoriesState;

  const userState = useUser();
  const { getUsers } = userState;
  useEffect(() => {
    getUsers();
    getCategories();
  }, []);

  return <Router />;
}

export default App;
