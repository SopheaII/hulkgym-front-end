import { JSX } from "react";
import { webRoutes } from "./web";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage/homPage";
import DiscoverPage from "../pages/discoverPage/discoverPage";
import Layout from "../components/layout";

export interface AppRoute {
  path?: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: AppRoute[];
}

const errorElement = (
  <div className="flex items-center justify-center h-screen">
    Sorry, something went wrong
  </div>
);

const appRoutes: AppRoute[] = [

  {
    path: "/",
    element: <Layout />, // Use the layout here
    children: [
      { path: webRoutes.home, element: <HomePage /> },
      { path: webRoutes.discover, element: <DiscoverPage /> },
    ],
  },

  // Catch-All Route (Not Found Page)
  {
    path: "*",
    element: <div>NotFoundPage</div>,
    errorElement: errorElement,
  },
];

// Pass appRoutes to createBrowserRouter to create the router
const router = createBrowserRouter(appRoutes);

export default router;
