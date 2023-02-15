import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path: '/',
            element:<Home></Home>
        }
    ]
   },
   {
    path:'/signup',
    element:<SignUp></SignUp>
   },
   {
    path:'/signin',
    element:<SignIn></SignIn>
   },
])

export default router;