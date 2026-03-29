import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout.tsx'
import Home from "./pages/Home/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register.tsx";
import Account from "./pages/Account/Account.tsx";
import { Products } from "./pages/Products/Products.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Checkout from "./pages/Checkout/Checkout.tsx";
import OrderSuccess from "./pages/OrderSuccess.tsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import HelpCenter from "./pages/HelpCenter/HelpCenter.tsx";
import Shipping from "./pages/Shipping/Shipping.tsx";
import Returns from "./pages/Returns/Returns.tsx";
import About from "./pages/About/About.tsx";
import Careers from "./pages/Careers/Careers.tsx";
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
                path: 'help',
                Component: HelpCenter,
            },
            {
                path: 'shipping',
                Component: Shipping,
            },
            {
                path: 'returns',
                Component: Returns,
            },
            {
                path: 'about',
                Component: About,
            },
            {
                path: 'careers',
                Component: Careers,
            },
            {
                path: '*',
                Component: NotFound,
            }
        ]
    }
])