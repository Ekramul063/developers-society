import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import About from '../pages/About/About';
import Media from '../pages/Media/Media';
import PostDetails from '../pages/PostDetails/PostDetails';

const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/media',
            element:<Media></Media>
        },
        {
            path:'/post-details',
            element:<PostDetails></PostDetails>
        },
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