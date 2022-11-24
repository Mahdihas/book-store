import React, { useState } from 'react';

import Calender from './Calender';
import ProductForm from './ProductForm';

const AddProducts = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <Calender
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></Calender>

            <ProductForm selectedDate={selectedDate} setSelectedDate={setSelectedDate}>

            </ProductForm>

             
           
        
        </div>
    );
};
export default AddProducts