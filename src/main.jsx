import "./index.css";
import appRoute from "./app/App.jsx";

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoute} />
);
