import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";
import ProductDetails from "../Pages/ProductDetails";


// named export
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=>fetch('../furnitureData.json')
      },
      {  path: "/products",
        element: <Products />,
      },
      {
        path: '/wishlist',
        Component: WishList
      },
      {
        path:'/product/:id',
        
        element:<ProductDetails /> 
      }
    ],
  },
//   {
//     path:'*',
//     element:<ErrorPage />
//   }
]);

export default router;
