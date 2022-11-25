import About from "../pages/About/About"
import Admin from "../pages/Admin/Admin"
import Auth from "../pages/Auth/Auth"
import Cart from "../pages/Cart/Cart"
import Contact from "../pages/Contact/Contact"
import ErrorPage from "../pages/Error/ErrorPage"
import ItemProduct from "../pages/ItemProduct/ItemProduct"
import MainPage from "../pages/MainPage/MainPage"
import Order from "../pages/Order/Order"
import Shop from "../pages/Shop/Shop"
import SuccessOrder from "../pages/SuccessOrder/SuccessOrder"
import { ABOUT_ROUTE, ADMIN_ROUTE, CART_ROUTE, CONTACT_ROUTE, ERROR_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, ORDER_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, SUCCESS_ORDER_ROUTE } from "../utils/pages"



export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />
    },
    {
        path: CART_ROUTE,
        element: <Cart />
    },
    {
        path: ORDER_ROUTE,
        element: <Order />
    },
    {
        path: SUCCESS_ORDER_ROUTE,
        element: <SuccessOrder />
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },
    {
        path: MAIN_ROUTE,
        element: <MainPage />
    },
    {
        path: SHOP_ROUTE,
        element: <Shop />
    },
    {
        path: ITEM_ROUTE + '/:id',
        element: <ItemProduct />
    },
    {
        path: ABOUT_ROUTE,
        element: <About />
    },
    {
        path: CONTACT_ROUTE,
        element: <Contact />
    },
    {
        path: ERROR_ROUTE,
        element: <ErrorPage />
    }
]
