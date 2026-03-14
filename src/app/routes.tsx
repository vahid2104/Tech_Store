import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout.tsx'
import Home from "./pages/Home/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Account from "./pages/Account/Account.tsx";
import { Products } from "./pages/Products/Products.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Checkout from "./pages/Checkout/Checkout.tsx";
import OrderSuccess from "./pages/OrderSuccess.tsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.tsx";
import Contact from "./pages/Contact/Contact.tsx";
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
                path: 'products/:id',
                Component: ProductDetails,
            },
            {
                path: 'cart',
                Component: Cart,
            },
            {
                path: 'checkout',
                Component: Checkout,
            },
            {
                path: 'order-success',
                Component: OrderSuccess,
            },
            {
                path: 'contact',
                Component: Contact,
            },
            {
                path: '*',
                Component: NotFound,
            }
        ]
    }
])