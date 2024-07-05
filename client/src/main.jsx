import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import App from "./App";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TasksPage />,
      },
      {
        path: "/new",
        element: <TasksForm />,
      },
      {
        path: "/edit/:id",
        element: <TasksForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
