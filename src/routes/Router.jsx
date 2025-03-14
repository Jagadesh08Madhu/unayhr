import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";

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
            }
        ]
    }
])