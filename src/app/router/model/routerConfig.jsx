import { Ai } from "../../../Pages/Ai";
import { Technology } from "../../../Pages/Technology";

const publicRoutes = [
  {
    name: "Ai",
    path: "/",
    component: <Ai />,
    // exact: true,
  },
  {
    name: "Technology",
    // path: "/Technology/:id",
    path: "/Technology/:id/:idd",
    component: <Technology />,
    // exact: true,
  },
];

// const privateRoutes = [
//     {
//         name: 'Профиль',
//         path: '/profile',
//         component: <ProfilePage />,
//         exact: true,
//     },
// ];

export { publicRoutes };
