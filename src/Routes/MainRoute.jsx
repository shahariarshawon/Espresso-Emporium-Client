import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AddCoffee from "../Pages/AddCoffee";
import HomePage from "../Pages/HomePage";
import CoffeeDetails from "../Pages/CoffeeDetails";


const router=createBrowserRouter(
    [
        {
            path:'/',
            Component:MainLayout,
            hydrateFallbackElement:<p>404 Page can not find</p>,
            
            children: [
                {
                    index:true,
                    Component:HomePage,
                    loader:()=>fetch('http://localhost:3000/add-coffee'),
                },
                {
                    path:'/add-coffee',
                    Component:AddCoffee
                },
                {
                    path:'coffee-details/:_id',
                    Component:CoffeeDetails,
                    loader:()=>fetch('http://localhost:3000/add-coffee'),
                }
            ]
        },
    ]
)

export default router;