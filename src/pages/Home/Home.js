import React from 'react'
import Advertise from './advertise/Advertise'
import Allproducts from './allproducts/Allproducts'
import Bannar from './Bannar'
import ProductCategory from './ProductCategory'
import Special from './Special'

import SubBannar from './SubBannar'

const Home = () => {
  return (
    <div>

      <Bannar></Bannar>
      <SubBannar></SubBannar>
      <ProductCategory></ProductCategory>



      <Special></Special>

      <Advertise></Advertise>


    </div>
  )
}

export default Home