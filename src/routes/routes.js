import { nanoid } from "nanoid";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Shop } from "../pages/shop";
import { ShopSingle } from "../pages/shop-single";

export const routes = [
    {
        component:Home,
        id:nanoid()
    },
    {
        component:About,
        path:"about",
        id:nanoid()
    },
    {
        component:Shop,
        path:"shop",
        id:nanoid()
    },
    {
        component:ShopSingle,
        path:"shop-single/:id",
        id:nanoid()
    },
]