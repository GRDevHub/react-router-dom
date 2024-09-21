import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Error404 from "../pages/Error404";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />,
    },
    {
        path: '/about',
        element: <About />,
        errorElement: <Error404 />,
    },
    {
        path: '/blog',
        element: <Blog />,
        errorElement: <Error404 />,
    },
]);