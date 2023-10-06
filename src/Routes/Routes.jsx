import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";

import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import StartBooking from "../Pages/StartBooking/StartBooking";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/booking',
                element:<StartBooking></StartBooking>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
        ]
    }
])


export default router;