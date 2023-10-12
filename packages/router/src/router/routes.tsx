import { useRoutes } from "react-router-dom";

import LazyWrapper from "./lazy-wrapper";
import MainLayout from "../components/main-layout";

export default function Routes() {
  return useRoutes([
    {
      Component: MainLayout,
      children: [
        {
          index: true,
          element: LazyWrapper("home"),
        },
        {
          path: "about",
          element: LazyWrapper("about"),
        },
        {
          path: "task",
          element: LazyWrapper("task"),
          children: [{ path: ":id", element: LazyWrapper("task/detail") }],
        },
      ],
    },
    { path: "*", element: <h1>404</h1> },
  ]);
}
