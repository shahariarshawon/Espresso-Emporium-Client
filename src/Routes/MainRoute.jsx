import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AddCoffee from "../Pages/AddCoffee";
import HomePage from "../Pages/HomePage";

const router=createBrowserRouter(
    [
        {
            path:'/',
            Component:MainLayout,
            children: [
                {
                    index:true,
                    Component:HomePage
                },
                {
                    path:'/add-coffee',
                    Component:AddCoffee
                }
            ]
        },
    ]
)

export default router;