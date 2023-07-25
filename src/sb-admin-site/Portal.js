import React from 'react'
import Topbar from './dashboard/Topbar'
import { Outlet } from 'react-router-dom'
import Userlist from './dashboard/Userlist'
import UserCreate from './dashboard/UserCreate'


function Portal() {
  return (
        <div  id="wrapper">
     <div  id="content-wrapper" className="d-flex flex-column">
       <div  id="content">
         <Topbar />
         <div  className="container-fluid container-small">
           <Outlet>
         
          <Userlist/>
          <UserCreate/>
          
           </Outlet>
           
         </div>
       </div>
     </div>
   </div>
  )
}

export default Portal