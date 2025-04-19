import { RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/main";
import About from "../pages/About/main";
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      // 다른 라우트들은 각각의 컴포넌트가 준비되면 추가할 예정입니다.
    ],
  },
];
