import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/OurMenu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";

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
          element:<Menu/>
        },
        {
          path:'/order/:category',
          element:<OrderFood/>
        }
      ]
    },
  ]);

  export default router;