import { createBrowserRouter } from "react-router-dom";
import Home from "../Views/Home";
import Layout from "../Views/Layout";
import NotFound from "../Views/NotFound";

const router = createBrowserRouter([
    {
        path: "/" , element:<Layout /> , children:[
            {
                index: true , element: <Home/>
            } , 
            {
                path: "*" ,
                element: <NotFound /> 
            }
        ]
    }
]);

export default router ;