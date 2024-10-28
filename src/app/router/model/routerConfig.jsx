// import { Ai } from "../../../Pages/Ai";
// import { Technology } from "../../../Pages/Technology";
// import { useCategories } from "../../../store/store";

// const publicRoutes = [
//   {
//     name: "Ai",
//     path: "/ai-tools",
//     component: <Ai />,
//   },
//   {
//     name: "Technology",
//     path: "/Technology/:category/:technology",
//     component: <Technology />,
//   },
// ];

// // const privateRoutes = [
// //     {
// //         name: 'Профиль',
// //         path: '/profile',
// //         component: <ProfilePage />,
// //         exact: true,
// //     },
// // ];

// export { publicRoutes };

import { useEffect, useState } from "react";
import { Ai } from "../../../Pages/Ai";
import { Technology } from "../../../Pages/Technology";
import { useCategories } from "../../../store/store";

export default function RouterConfig() {
  const categoriesState = useCategories();
  const { categories } = categoriesState;
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    if (categories.length > 0 && routes.length === 0) {
      setRoutes([...categories[0], ...a]);
    }
  }, [categories, routes]);

  const a = [
    {
      name: "Technology",
      slug: "/ai-tools/:category/:technology",
    },
  ];
  const publicRoutes = [
    {
      name: "Ai",
      path: "ai-tools",
      component: <Ai />,
    },
    {
      name: "Technology",
      path: "ai-tools/:category/:technology",
      component: <Technology />,
    },
  ];
  let dynamicRoutes = [];
  if (routes?.length) {
    dynamicRoutes = routes?.map((route, index) => {
      return {
        name: route.name,
        path: route.slug,
        component:
          route.slug === "/ai-tools/:category/:technology" ? (
            <Technology />
          ) : (
            <Ai id={index} />
          ),
      };
    });
  }
  return dynamicRoutes;
}
