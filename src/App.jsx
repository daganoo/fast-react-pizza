import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, {loader as loaderMenu} from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";


const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/menu", element: <Menu />, loader: loaderMenu },
            { path: "/cart", element: <Cart /> },
            { path: "/order/new", element: <CreateOrder /> },
            { path: "/order/:orderId", element: <Order /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
