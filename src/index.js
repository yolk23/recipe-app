import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import App from "./App";
import AboutMe from "./AboutMe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <h1>404 Not Found</h1> },
  {
    path: "/AboutMe",
    element: <AboutMe />,
    errorElement: <h1>404 Not Found</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
