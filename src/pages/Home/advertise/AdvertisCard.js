import React from 'react'
import { FaHeartBroken,FaCartArrowDown,FaSearch,FaCompress } from "react-icons/fa";
import './Advertise.css';

const AdvertisCard = ({ item }) => {
    
    const {resaleprice,name,image,email}=item;

    return (
      


        <div>
             <div className="" >
                  
                  <div className="img-area1">
                      
                      <img  className='h-[300px] w-full' src={image} alt="" />
                      
                    <div className="img-text1">
                        <p>
                        <span className='mx-4 font-bold text-2xl text-[skyblue] '>{name}</span>

                           
                        </p>ee
                        <p> <span className='mx-2 text-[gold] my-3'> Price : {resaleprice}</span></p>
                          <p className=''>
                              <span className='mx-4'><FaHeartBroken></FaHeartBroken></span>
                            <span className='mx-4'>  <FaCartArrowDown></FaCartArrowDown></span>
                              
                              <span className='mx-4'><FaSearch></FaSearch></span>
                            <span className='mx-4'><FaCompress></FaCompress></span>
                          </p>
                         
                       </div>
                       
                  </div>
          
          </div>

            
          
    </div>
  )
}

export default AdvertisCard