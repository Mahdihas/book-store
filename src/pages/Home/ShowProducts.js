import React from 'react'
import Button3 from '../../component/shared/Button/Button3';


const ShowProducts = ({ order,setModalData }) => {
    const { resaleprice,originalprice,image,des,location,time,name,years,seller,_id} = order;
    
 


  return (
      <div className='px-4 my-6'>
         <div className="card h-[900px] bg-base-100 shadow-xl">
  <figure><img className='h-[400px] rounded-none w-[100%]' src={image} alt="Shoes" /></figure>
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
          <p className='font-semibold my-2 '> Description {des? des : 'Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras...'}</p>

          <input type="checkbox" className="checkbox mx-6" disabled checked /></p>

          
          <div className="card-actions justify-end">
            
          <label
              htmlFor="booking-modal"
              onClick={() => setModalData(order)}

                        className="btn bg-[#f4516c] rounded-full   text-white"
                    >Booking Now</label>
    
                  </div>
  </div>
      </div>
     
    </div>  
  )
}

export default ShowProducts