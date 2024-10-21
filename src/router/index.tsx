import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../interface/components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

export { router };
