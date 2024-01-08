import { createBrowserRouter } from "react-router-dom";

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
import App from "../app/App";

const Route = createBrowserRouter([
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

export default Route;
