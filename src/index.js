import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./UserContext";
import Recipes from "./Recipes";
import RecipePage from "./Components/RecipePage";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <h1>404 Not Found</h1> },

  {
    path: "/Recipes",
    element: <Recipes />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/RecipePage/:id",
    element: <RecipePage />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
    errorElement: <h1>404 Not Found</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
