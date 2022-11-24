
import { createBrowserRouter } from 'react-router-dom'
import Login from '../component/login/Login';
import Register from '../component/login/Register';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main'
import Blog from '../pages/Blog/Blog';
import AddProducts from '../pages/dashboard/AddProducts';
import MyBuyer from '../pages/dashboard/MyBuyer';
import MyProducts from '../pages/dashboard/MyProducts';
import Home from '../pages/Home/Home';
import Products from '../pages/Home/Products';
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

            
      {

        path: '/service/:id',
          element: <Products></Products>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }
,

            { path: '/blog',
            element:<Blog></Blog>
            },


        ]

    }
    ,
    {
        path: '/dashboard',
         element: <DashboardLayout></DashboardLayout>,
         children: [
             
             {
                 path: '/dashboard/myproducts',
                 element:<MyProducts></MyProducts>
             }
             ,
             {
                path: '/dashboard/mybuyers',
                element:<MyBuyer></MyBuyer>
                 
             },
             {
                path: '/dashboard/addproducts',
                element:<AddProducts></AddProducts>
                 
             },
             {
                 
             }
         ]
     
         }


])
export default router;