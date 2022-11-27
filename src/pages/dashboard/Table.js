import React from 'react'
import toast from 'react-hot-toast';

const Table = ({ product, index }) => {

    const { resaleprice, name, image, email, _id } = product;
    console.log(_id);
    

    const handleAdvertise = event => {
   
        
        const booking = {
            name,
            resaleprice,
            image,
            email,
      





           
        }
    
       
        console.log(booking);
    
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('advertise  successfully shown');
                    
                }
                else{
                    toast.error(data.message);
                }
            })
    
    }
    
    












    return (
       <tr >
                <th>{index +1}</th>
                <td><div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={image} alt="" />
                    </div>
                </div></td>
                <td className='font-semibold'>{name}</td>
                <td className='font-semibold'>{email}</td>
              <td className='font-semibold'>{resaleprice}</td>
              <td>
              <label htmlFor="confirmation-modal" onClick={()=>handleAdvertise(product)}  className="btn btn-sm btn-success text-white  mx-2">Advertise</label>

              </td>
                <td>


                    <label htmlFor="confirmation-modal"  className="btn btn-sm text-white btn-error">Delete</label>
              </td>
              <td>
              <label htmlFor="confirmation-modal"  className="btn btn-sm btn-primary text-white  mx-2">Status</label>

              </td>
            </tr>
  )
}

export default Table