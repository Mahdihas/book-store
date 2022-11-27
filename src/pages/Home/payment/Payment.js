import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M66vYFykkGEJaxgprDaZ5MiX2FbTng1R0FL15Lobo6YXuOUmgOGMvrxF60qAPDmqtIyDbnItMJuAoO1yst0fRK800pYtt8iqa');
const Payment = () => {

    const bookings = useLoaderData()



    const { treatment, price, appointmentDate, slot } = bookings;
    
  return (
    <div>
    <h3 className="text-3xl">Payment for {treatment}</h3>
    <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
    <div className='w-96 my-12'>
   
              <Elements stripe={stripePromise}>
                  <CheckoutForm booking={bookings}>
                      
                  </CheckoutForm>
        </Elements>
    </div>
</div>
)}

export default Payment