import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout.tsx'
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            },
            {
                path: '*',
                Component: NotFound,
            }
        ]
    }
])