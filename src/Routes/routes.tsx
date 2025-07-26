import { RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/main";
import About from "../pages/About/main";
import Greeting from "../pages/About/Greeting/main";
import Worshiptime from "../pages/About/Worshiptime/main";
import Jamal from "../pages/Education/Jamal/main";
import Encourage from "../pages/Education/Encourage/main";
import Basic from "../pages/Education/Basic/main";
import Kinder from "../pages/Department/Kindergarten/main";
import Elementary from "../pages/Department/Elementary/main";
import Middle from "../pages/Department/Middle/main";
import Youngadult from "../pages/Department/Youngadult/main";
import Location from "../pages/About/Location/main";

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
      {
        path: "about/greeting",
        element: <Greeting />,
      },
      {
        path: "about/Worshiptime",
        element: <Worshiptime />,
      },
      {
        path: "education/jamal",
        element: <Jamal />,
      },
      {
        path: "education/encourage",
        element: <Encourage />,
      },
      {
        path: "education/basic",
        element: <Basic />,
      },
      {
        path: "department/kindergarten",
        element: <Kinder />,
      },
      {
        path: "department/elementary",
        element: <Elementary />,
      },
      {
        path: "department/middle-high",
        element: <Middle />,
      },
      {
        path: "department/young-adult",
        element: <Youngadult />,
      },
      {
        path: "about/location",
        element: <Location />,
      },
      // 다른 라우트들은 각각의 컴포넌트가 준비되면 추가할 예정입니다.
    ],
  },
];
