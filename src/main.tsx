import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
// import { AboutUs } from "./pages/AboutUs.tsx";
import "./index.css";
// import { FavoritePage } from "./pages/Favorite.tsx";
// import { HeaderApp } from "./components/header/HeaderApp.tsx";
// import { Home } from "./pages/Home.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/favorites",
//     element: <FavoritePage />,
//   },
//   {
//     path: "/about-us",
//     element: <AboutUs />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
