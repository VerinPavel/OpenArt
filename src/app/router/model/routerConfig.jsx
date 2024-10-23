import { Ai } from "../../../Pages/Ai";
import { Technology } from "../../../Pages/Technology";

const publicRoutes = [
  {
    name: "Ai",
    path: "/",
    component: <Ai />,
  },
  {
    name: "Technology",
    path: "/Technology/:category/:technology",
    component: <Technology />,
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
