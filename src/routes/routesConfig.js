// src/routes/routesConfig.js
import { lazy } from "react";

// Lazy load pages

const MyBuildPage = lazy(() => import("../pages/MyBuildPage.jsx"));


export const dashboardRoutes = [

  { path: "mybuild", element: <MyBuildPage/>, label: "Tasks (List View)", ready: true },

];
