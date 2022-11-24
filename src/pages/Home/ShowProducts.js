import React from 'react'
import Button3 from '../../component/shared/Button/Button3';

const ShowProducts = ({ order }) => {
    const { resaleprice,originalprice,image,location,time,name,years,} = order;
    
 


  return (
      <div className='px-4 my-6'>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
                  <p className='flex my-2 font-semibold justify-between'>
                      <span className=''>Current Price : {resaleprice}$</span>
                      <span>Original Price : {originalprice}$</span>
                  </p>
                  
                  <p className='flex my-2  font-semibold  justify-between'>
                      <span className=''>Adress :  {location}</span>
                      <span>Posted Time {time}</span>
                  </p>
                  <p className='font-semibold my-2 '> Only {years} old</p>
    <div className="card-actions justify-end">
    <Button3>Book Now</Button3>
                  </div>
  </div>
</div>
    </div>
  )
}

export default ShowProducts