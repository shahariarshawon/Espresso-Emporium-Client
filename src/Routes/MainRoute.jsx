import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AddCoffee from "../Pages/AddCoffee";

const router=createBrowserRouter(
    [
        {
            path:'/',
            Component:MainLayout,
        },
        {
            path:'/add-coffee',
            Component:AddCoffee,
        }
    ]
)

export default router;