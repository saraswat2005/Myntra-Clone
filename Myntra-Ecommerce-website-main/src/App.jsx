import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./components/applayout";
import { Men } from "./components/men";
import { Women } from "./components/women";
import { Kids } from "./components/kids";
import { Beauty } from "./components/beauty";
import { Homeliving } from "./components/homeliving";
import { Home } from "./components/home";
import "./App.css";
import Applayout2 from "./components/applayout2";
import { Error } from "./components/error";
import Profile from "./components/profile";
import { Bag } from "./components/bag";
import { Item } from "./components/item";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout></Applayout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/men",
          element: <Men></Men>,
        },
        {
          path: "/women",
          element: <Women></Women>,
        },
        {
          path: "/kids",
          element: <Kids></Kids>,
        },
        {
          path: "/beauty",
          element: <Beauty></Beauty>,
        },
        {
          path: "/homeliving",
          element: <Homeliving></Homeliving>,
        },
        {
          path: "/profile",
          element: <Profile></Profile>,
        },
        {
          path: "/bag",
          element: <Bag></Bag>,
        },
        {
          path: "/item/:itemid",
          element: <Item></Item>,
        },
      ],
    },
    {
      path: "/login",
      element: <Applayout2></Applayout2>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
