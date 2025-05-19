import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./assets/components/Layout";
import Home from "./assets/pages/Home";
import Galery from "./assets/pages/Galery";
import Features from "./assets/pages/Features";
import Reviews from "./assets/pages/Reviews";
import Shop from "./assets/pages/Shop";
import Admin from "./assets/pages/Admin/Admin";
import ErrorPage from "./assets/pages/ErrorPage";
import Basket from "./assets/pages/Basket";
import Details from "./assets/pages/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/galery",
          element: <Galery />,
        },
        {
          path: "/features",
          element: <Features />,
        },
        {
          path: "/reviews",
          element: <Reviews />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
        {
          path: "/*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
