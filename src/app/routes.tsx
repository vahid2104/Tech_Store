import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout.tsx'
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Account from "./pages/Account.tsx";
import Products from "./pages/Products.tsx";
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
                path: 'account',
                Component: Account,
            },
            {
                path: 'products',
                Component: Products,
            },
            {
                path: '*',
                Component: NotFound,
            }
        ]
    }
])