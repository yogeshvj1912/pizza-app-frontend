
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";

import AddContext from '../../AddContext';
import { useFormik } from 'formik';

function Userlist() {

  


  const [userList, setUserlist] = useState([])
  const [isLoading, setLoading] = useState(true);
 
  
  const navigate=useNavigate()
 const cardDatas=useContext(AddContext)

  useEffect(() => {
    getEmail()
    getUsers();
 
  }, []);

  
  let getEmail=async()=>{
    try {
        const login =await axios.get(`https://pizzabackend-2y30.onrender.com/login-data/${cardDatas.user}`);
          
              window.sessionStorage.setItem("role",login.data.role)
              setLoading(false)
            
    } catch (error) {
     console.log(error)
    }
}


  let getUsers = async () => {
    try {
      const users = await axios.get("https://pizzabackend-2y30.onrender.com/users",{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })

      setUserlist(users.data);
      setLoading(false)
    
    }
    catch (error) {
      navigate("/")
    }
  };
  

 
  let val=window.sessionStorage.getItem("role")
 


  return (
    <>

<div className='bgcolor'>


      
    

      {
        isLoading ? <h1>Loading...</h1> :
      
        <>
       
       {val=="admin"?<div >
       <Link to="/portal/user-create" className="ml-3 btn btn-sm btn-primary shadow-sm"><i
         className="fas fa-download fa-sm text-white-50"></i> Admin panel</Link>
     </div>:""}

        <div className='container'>
          <div className='row'>
      
          {
            userList.map((user, index) => {
              return <div className='col-lg-4 col-md-6 col-sm-12 mb-3 ' key={index}>
                <div className="card box-shadow" >
                  <img src={user.img_url} className="card-img-top card-img" />
                  <div className="card-body">
                    <h5 className="card-title">{user.productname}</h5>
                    <h6 className="card-price">₹{user.price}</h6>
                    <div className='card-detail-box'>
                    <p className="card-detail">{user.detail}</p>
                    </div>
                    {cardDatas.cartlist.some(item => item._id === user._id)? <Link to="/portal/add-to-cart"  className="go-button-color" >Go To Cart</Link>:<button className=" add-button-color" onClick={()=>{
                      cardDatas.addToCart(user)}}>Add To Cart</button>}
                  </div>
                </div>
              </div>




            
            })

          }
              </div>
        </div>
        </>
      }
      </div>
    </>

  )
}

export default Userlist



