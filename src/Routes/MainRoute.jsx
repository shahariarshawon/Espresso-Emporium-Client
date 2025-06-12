import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AddCoffee from "../Pages/AddCoffee";
import HomePage from "../Pages/HomePage";


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
                
            ]
        },
    ]
)

export default router;