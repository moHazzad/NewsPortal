import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Contact from "./Pagese/Home/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pagese/Home/Home";
import Category from "./Pagese/Home/categories/Category";
import NewsLayout from "./NewsLayout";
import News from "./Pagese/news/news/News";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:() => fetch(`http://localhost:5000/categories/0`)
      },
      {
        path: "category/:id",
        element: <Category />,
        loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      },
      // {
      //   path: "New/",
      //   element: <Category />,
      // },

    ],
  },
  {
    path:'login',
    element:<Login />,
  },
  {
    path:'register',
    element:<Register />,
  },
  {
    path:'news',
    element:<NewsLayout />,
    children:[
      {
        path:':id',
        element:<News />,
        loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
