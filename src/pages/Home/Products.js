import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowProducts from './ShowProducts';

const Products = () => {

    const  data  = useLoaderData([]);
    // console.log(data);
      
    const [orders, setOrders] = useState([]);
    // console.log(orders);

    
console.log(orders);        
      
        useEffect(() => {
            fetch(`http://localhost:5000/products?category=${data?.category}`)
              
            .then(res => res.json())
                .then(data => {
                    setOrders(data);
                 
                })
        }, [orders,data])







  return (
      <div>
          
          




          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  

                 
                 {
              orders.map(order=><ShowProducts key={order._id}  order={order}></ShowProducts>)
          } 

    </div>
          



    </div>
  )
}

export default Products