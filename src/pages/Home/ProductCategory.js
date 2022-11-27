import React from 'react'
import Loading from '../../component/shared/loading/Loading';
import {useQuery}  from '@tanstack/react-query'
import CategoryCard from './CategoryCard';


const ProductCategory = () => {

  
    const {data: services = [],refetch ,isLoading} = useQuery({
        queryKey: ['services'],
        queryFn: async() =>{
            const res = await fetch(' https://server-side-weld.vercel.app/services');
            const data = await res.json();
            return data;
        }
    });
        console.log(services);
    if(isLoading){
        return <Loading></Loading>
    }


  return (
    
      <div className="">
          <h1 className='d text-4xl font-semibold my-6 text-center '>Choose  Your Books Category</h1>
          <div className="text-center flex justify-center">
              <div className=' h-[2px] w-[200px] py-0 bg-[#ff4157]'></div>
          </div>
          <div className="text-center my-2 flex justify-center">
          <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#ff4157]'></div>
              <div className=' h-[1px] w-[100px] py-0 bg-[#ff4157]'></div>
              <div className=' h-[1px] w-[20px] mx-2 py-0 bg-[#ff4157]'></div>
          </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>{
           services.map(service=><CategoryCard key={service._id} service={service}></CategoryCard>)          
      }
      
      </div>
      </div>
  )
}

export default ProductCategory