import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "project/:id",
        Component: CaseStudy,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);