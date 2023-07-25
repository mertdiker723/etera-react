import { lazy } from "react";
import * as routes from "./Constant";

// Routes
const Home = lazy(() => import("../../screen/HomeContainer/index"));
const ProductDetail = lazy(() => import("../../screen/ProductDetailContainer/index"));

const mainRoutes = [
    {
        id: 1,
        path: routes.HOME,
        Component: Home,
    },
    {
        id: 2,
        path: `${routes.PRODUCT_DETAIL}/:slug`,
        Component: ProductDetail,
    }
]

export default mainRoutes;