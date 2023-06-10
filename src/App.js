import React from "react";
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/main.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Product from "./Product/Product";
import Post from "./pages/post/Post";

const App = () => {
    const router = createBrowserRouter(
        [
        {
            path: '/',
            element: <Main/>
        },
        {
            path: 'cart',
            element: <Cart/>
        },
            {
                path: "product/:id",
                element: <Product/>
            },
            {
                path: 'post',
                element: <Post/>
            }
    ])
    return <RouterProvider router={router}/>
}
export default App;