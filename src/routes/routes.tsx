import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import GoodsDetails from "../pages/GoodsDetails/GoodsDetails";
import AdminLayout from "../components/layouts/AdminLayout";
import Supplies from "../pages/Dashboard/Supplies";
import CreateSupply from "../pages/Dashboard/CreateSupply";
import Login from "../pages/Login/Login";
import ReliefGoods from "../pages/ReliefGoods/ReliefGoods";
import Registration from "../pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "relief-goods",
        element: <ReliefGoods />,
      },
      {
        path: "relief-goods/:id",
        element: <GoodsDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Supplies />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
    ],
  },
]);
