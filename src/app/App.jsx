import { createBrowserRouter, Outlet } from "react-router-dom";

import {
  Home,
  Error,
  FAQs,
  Video,
  Reviews,
  Overview,
  Newslater,
  Collection,
} from "../pages/index";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/faqs",
        element: <FAQs />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/newslater",
        element: <Newslater />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRoute;
