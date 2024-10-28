import { Route, Routes } from "react-router";

import RouterConfig from "../model/routerConfig";
// import { publicRoutes } from "../model/routerConfig";
import { Layout } from "../../Layout";

const Router = () => {
  const routes = RouterConfig();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes?.map((route, index) => (
          <Route
            path={route.path}
            element={route.component}
            index={route.index}
            exact={route.exact}
            key={`route-${index}`}
          />
        ))}
      </Route>
    </Routes>
  );
};
export { Router };
