import React from 'react'
import Button3 from '../../component/shared/Button/Button3';

const ShowProducts = ({ order }) => {
    const { resaleprice,originalprice,image,location,time,name,years,seller} = order;
    
 


  return (
      <div className='px-4 my-6'>
         <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
                  <p className='flex my-2 font-semibold justify-between'>
                      <span className=''>Current Price : <span className='text-[#95831d]'> {resaleprice}$</span></span>
                      <span>Original Price : <span className='text-[#95831d]'>{originalprice}$</span></span>
                  </p>
                  
                  <p className='flex my-2  font-semibold  justify-between'>
                      <span className=''>Adress :  {location}</span>
                      <span>Posted Time {time}</span>
                  </p>
          <p className='font-semibold my-2 '> Only {years} old</p>
          <p className='font-semibold my-2 '> <span className=''>Seller : {seller}</span>
          <input type="checkbox" className="checkbox mx-6" disabled checked /></p>

          
    <div className="card-actions justify-end">
    <Button3>Book Now</Button3>
                  </div>
  </div>
</div>
    </div>
  )
}

export default ShowProducts