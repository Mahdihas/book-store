import React from 'react'
import Loading from '../../component/shared/loading/Loading';
import {useQuery}  from '@tanstack/react-query'
import CategoryCard from './CategoryCard';


const ProductCategory = () => {

  
    const {data: services = [],refetch ,isLoading} = useQuery({
        queryKey: ['services'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/services');
            const data = await res.json();
            return data;
        }
    });
        console.log(services);
    if(isLoading){
        return <Loading></Loading>
    }


  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>{
           services.map(service=><CategoryCard service={service}></CategoryCard>)          
      }</div>
  )
}

export default ProductCategory