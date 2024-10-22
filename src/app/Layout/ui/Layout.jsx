import { Header } from "../../../components/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { Layout };
