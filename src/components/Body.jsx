import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <Home />,
    },
    {
      path: "/services",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Home />,
    },
  ]);

  return (
    <div className="">
      <Header />
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
};

export default Body;
