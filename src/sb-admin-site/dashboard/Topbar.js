import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,  } from '@fortawesome/free-solid-svg-icons'


function Topbar() {
  const navigate=useNavigate()
  return (
    // <!-- Topbar -->
    <nav className="topbar mb-4 static-top shadow nav-topbar">
       <h3 className="heading">Hot & Spicy pizzas</h3> 


      <div  className="nav-bar">
      <ul className="nav-buttons">
                    <li><button onClick={()=>{
                      window.localStorage.removeItem("token");
                      navigate("/")
                    }} className='btns green-color'>Logout</button></li>
                    <li><Link to="/portal/add-to-cart" className='btns green-color'>Cart <FontAwesomeIcon icon={faCartPlus} /></Link></li>
                </ul>
      </div>

    </nav>
   
  )
}

export default Topbar