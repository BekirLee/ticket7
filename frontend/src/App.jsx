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
