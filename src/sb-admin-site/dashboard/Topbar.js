import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,  } from '@fortawesome/free-solid-svg-icons'


function Topbar() {
  const navigate=useNavigate()
  return (
    // <!-- Topbar -->
    <nav className="topbar mb-4 static-top shadow nav-topbar">
       <h3><Link className="heading" to="/portal/user-list">Hot & Spicy pizzas</Link> </h3> 


      <div  className="nav-bar">
      <ul className="nav-buttons">
                    <li><button onClick={()=>{
                      window.localStorage.removeItem("token");
                      window.sessionStorage.removeItem("role","email")
                      navigate("/")
                    }} className='green-color'>Logout</button></li>
                    <li><Link to="/portal/add-to-cart" className='green-color'>Cart <FontAwesomeIcon icon={faCartPlus} /></Link></li>
                    <li><Link to="/portal/delivery-status" className='green-color'>Your Orders</Link></li>
                </ul>
      </div>

    </nav>
   
  )
}

export default Topbar