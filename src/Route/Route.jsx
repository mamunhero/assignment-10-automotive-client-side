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
import Sony from "../Components/Brand/Sony";

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
      },
      {
        path: "/brand/:brandname",
        element: <Apple></Apple>,
        loader: ({params})=> fetch(`http://localhost:5000/brand/${params.brandname}`)
      },
      {
        path: "/brand/:brandname",
        element: <Sony></Sony>,
        loader: ({params})=> fetch(`http://localhost:5000/brand/${params.brandname}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  }
])

export default Route;