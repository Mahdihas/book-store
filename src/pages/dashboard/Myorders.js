import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'

import { AuthContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';

const Myorders = () => {


  const { user } = useContext(AuthContext);


  const url =  `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
      queryKey: ['bookings', user?.email],
      queryFn: async () => {
          const res = await fetch(url);
          const data = await res.json();
          return data;
      }
  })

console.log(bookings);
  return (
    <div>
    <h3 className="text-3xl mb-5">My Prodcuts Booking</h3>
    <div className="overflow-x-auto">
        <table className="table w-full">
            <thead>
                <tr>
                    <th></th>
              <th>photo</th>
              <th>Product</th>
              <th> Name</th>
              <th>Resale price Price</th>

                    <th>Location</th>
                          <th>Time</th>
                          <th>Payment</th>
                </tr>
            </thead>
            <tbody>
                { bookings &&
                    bookings?.map((booking, i) => <tr key={booking._id}>
                        <th>{i+1}</th>
                      <td><img className='w-[50px] h-[50px]' src={booking.image} alt="" /></td>
                      <td>{booking.name}</td>
                      <td>{user?.displayName}</td>

                        <td>{booking.resaleprice}</td>
                      <td>{booking.meeting}</td>
                      <td>{booking.time}</td>

                        <td> { booking.resaleprice && !booking.paid && <Link
                                      to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        bookings.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }</td>

                    </tr>)
                }
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Myorders