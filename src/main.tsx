import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import SignUpPage from "./pages/signup.jsx";
import App from "./App.jsx";
import ToDoApp from "./components/toDoComponent/ToDoApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <ToDoApp></ToDoApp>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },

      {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
