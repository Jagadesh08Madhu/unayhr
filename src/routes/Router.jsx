import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import { Checkout } from "../pages/Checkout";
import Compliance from "../pages/Compliance";
import Cookie from "../pages/Cookie";
import Privacy from "../pages/Privacy";
import General from "../pages/General";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path :"/pricing",
                element:<Pricing/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
           {
            path:"/checkout",
            element:<Checkout/>
           },
           {
            path:"/compliance",
            element: <Compliance/>
           },
           {
            path:"/cookie-policy",
            element:<Cookie/>
           },

          
           {
            path:"/privacy-policy",
            element:<Privacy/>
           },
           {
            path:"/general-conditions",
            element:<General/>
           },
        ]

    }
])