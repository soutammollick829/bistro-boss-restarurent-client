import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/OurMenu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/dashbord/MyCart";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/menu',
          element:<PrivateRoute><Menu/></PrivateRoute>
        },
        {
          path:'/order/:category',
          element:<OrderFood/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signUp',
          element:<SignUp/>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard/>,
      children:[
        {
          path:'mycart',
          element:<MyCart/>
        }
      ]
    }
  ]);

  export default router;