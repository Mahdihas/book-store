
import { createBrowserRouter } from 'react-router-dom'
import Login from '../component/login/Login';
import Register from '../component/login/Register';
import Main from '../layout/Main'
import Blog from '../pages/Blog/Blog';
import Home from '../pages/Home/Home';
import Service from '../pages/service/Service';



const router = createBrowserRouter([

    {
        path:'/',
        element: <Main></Main>,
        children: [
            
           
            {
                path: '/home',
                element:<Home></Home>
                
            },

            {
                path: '/',
                element:<Home></Home>
                
            },

            
            {
                path: '/login',
                element:<Login></Login>
                
            },
            
            {
                path: '/register',
                element:<Register></Register>
                
            },



            { path: '/Service',
            element:<Service></Service>
            },


            { path: '/blog',
            element:<Blog></Blog>
            },


        ]

    }


])
export default router;