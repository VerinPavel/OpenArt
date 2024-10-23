import Ai from "../../../Pages/Ai/ui/Ai.jsx";
import Technology from "../../../Pages/Technology/ui/Technology.jsx";

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
