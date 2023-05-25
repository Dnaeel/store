import React from "react";
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/main.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main/>
        },
        {
            path: 'about',
            element: <Cart/>
        },
    ])
    return <RouterProvider router={router}/>
}
export default App;