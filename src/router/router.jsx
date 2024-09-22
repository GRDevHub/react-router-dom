import { createBrowserRouter } from "react-router-dom";
import Error404 from "../pages/Error404";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import About from "../pages/About";
import { obtenerPersonajes } from "../api/obtenerPersonajes";
import Personaje from "../pages/Personaje";
import { personIndividual } from "../api/personIndividual";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error404 />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />,
                loader: obtenerPersonajes,
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blog/:id',
                element: <Personaje />,
                loader: personIndividual,
            },
        ]
    },
]);