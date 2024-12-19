import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import Courses from "./pages/Courses";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="browse" element={<Courses />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-DM-Sans font-[300]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
