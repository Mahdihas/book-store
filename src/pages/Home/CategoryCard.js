import React from 'react'

const CategoryCard = ({ service }) => {
    
    const { name, img, total } = service;

     

  return (
      <div>
          <div className="card  bg-base-100 shadow-xl">
  <figure><img className='h-[200px] w-[100%]' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"> <p>{name}</p></h2>
                 
                  <p>{ total}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default CategoryCard