import React, { useContext, useState,useEffect } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../component/shared/loading/Loading';
import { AuthContext } from '../../Context/UserContext';
import { useQuery } from '@tanstack/react-query'
import { useLoaderData } from 'react-router-dom'
import Table from './Table';




const MyProducts = () => {
//  { resaleprice,originalprice,image,location,time,name,years,seller} ;


  const { user } = useContext(AuthContext);


  const url =   `http://localhost:5000/myProducts?email=${user?.email}`;

  const { data: myProducts = [] } = useQuery({
      queryKey: ['myProducts', user?.email],
      queryFn: async () => {
          const res = await fetch(url);
          const data = await res.json();
          return data;
      }
  })

  // console.log(myProducts);
















  
  


    return (
        <div>
            <h2 className="text-3xl overflow- py-6 shadow-2xl uppercase  bg-[#ff4157] text-white border-[4px] text-center">Manage Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photos</th>
                            <th>Products Name</th>
                            <th>Email</th>
                <th>Price</th>
                
                <th>Advertise</th>

                <th>delete</th>
                <th>Status</th>


                
                        </tr>
                    </thead>
            <tbody>


              {
                myProducts.map((product,index)=><Table index={index} key={product._id} product={product}></Table>)
          

          }
                        
                 </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default MyProducts;