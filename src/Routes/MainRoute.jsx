import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AddCoffee from "../Pages/AddCoffee";
import HomePage from "../Pages/HomePage";
import CoffeeDetails from "../Pages/CoffeeDetails";
import UpdateCofeePage from "../Pages/UpdateCofeePage";
import Login from "../Pages/Login";
import SignIn from "../Pages/SignIn";


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
                    path:'/coffee-details/:id',
                    Component:CoffeeDetails,
                    loader:({params})=>fetch(`http://localhost:3000/add-coffee/${params.id}`)
                },
                {
                    path:'/update-coffee/:id',
                    Component:UpdateCofeePage,
                    loader:({params})=>fetch(`http://localhost:3000/add-coffee/${params.id}`)
                },
                {
                    path:'/login',
                    Component:Login
                },
                {
                    path:'/signin',
                    Component:SignIn
                }
            ]
        },
    ]
)

export default router;