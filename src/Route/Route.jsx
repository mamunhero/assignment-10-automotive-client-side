import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Brand from "../Components/Brand/Brand";
import Addproduct from "../Pages/Addproduct/Addproduct";
import MyCart from "../Pages/Mycart/MyCart";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("http://localhost:5000/brand")
      },
      {
        path: "/brand",
        element: <Brand></Brand>
      },
      {
        path: "/addproduct",
        element: <Addproduct></Addproduct>
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>
      }
    ]
  }
])

export default Route;