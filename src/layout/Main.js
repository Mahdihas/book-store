import React from 'react'
import Header from '../component/shared/Header/Header'
import Headere from '../component/shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../component/shared/Footer/Footer'

const Main = () => {
  return (
      <div>
          
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>

    </div>
  )
}

export default Main