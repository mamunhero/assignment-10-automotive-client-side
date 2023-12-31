import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Brand from "../Components/Brand/Brand";
import Addproduct from "../Pages/Addproduct/Addproduct";
import MyCart from "../Pages/Mycart/MyCart";
import Apple from "../Components/Brand/Apple";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Update from "../Pages/Update/Update";
import Details from "./Details/Details";
import PrivateRoute from "./PrivateRoute";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://assignment-10-automotive-server-side.vercel.app/brand"),
      },
      {
        path: "/brand",
        element: <Brand></Brand>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <Addproduct></Addproduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/brand/:brandname",
        element: <Apple></Apple>,
        loader: ({ params }) =>
          fetch(`https://assignment-10-automotive-server-side.vercel.app/brand/${params.brandname}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        // loader: ({params})=> fetch(`https://assignment-10-automotive-server-side.vercel.app/addProduct/${params.id}`)
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
    ],
  },
]);

export default Route;
