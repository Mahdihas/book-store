import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../component/shared/Header/Header'
import { AuthContext } from '../Context/UserContext'


const DashboardLayout = () => {

    const {user}=useContext(AuthContext)
    // const [isAdmin] = useAdmin(user?.email)
  return (
      <div>
          <div>
  <Header></Header>
      <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
          <Outlet></Outlet>
          
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">


              <li><Link to={'myproducts'}><a>My Producst</a></Link></li>

              {/* <li><Link to={'mybuyers'}><a>My buyers</a></Link></li> */}

              <li><Link to={'addproducts'}><a>Add Products</a></Link></li>

              

            {/* {
              isAdmin && <>
                <li><Link to={'allusers'}><a>All users</a></Link></li>
                <li><Link to={'addoctor'}><a>Ad doctor</a></Link></li>
                <li><Link to={'managedoctors'}><a>Ad doctor</a></Link></li>


</>
            } */}
    </ul>
  
  </div>
</div>    
      
    </div>


    </div>
  )
}

export default DashboardLayout