
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import img from "../../images/img.jpg"
import Card from './Card';

function Userlist() {

  // addtoCart

  // const [cartList, setCart] = useState([])
  // const [total, setTotal] = useState(0)

  // let addToCart = (product) => {
  //   setCart([...cartList, {...product,quantity:1}])
  //   setTotal(total + product.price)
  // }

  // let removeCart = (productItem) => {
  //   let itemIndex = cartList.findIndex(item => productItem.id === item.id)
  //     cartList.splice(itemIndex, 1)
  //   setCart([...cartList])
  //   setTotal(total - productItem.price * productItem.quantity)

  // };

  // const incQuantity = (cartItem)=>{
  // let itemIndex = cartList.findIndex((item)=> cartItem.id===item.id);
  // cartList[itemIndex].quantity = cartList[itemIndex].quantity + 1
  // setCart([...cartList])
  // setTotal(total + cartItem.price )
  // }
  // const decQuantity = (cartItem)=>{
  // let itemIndex = cartList.findIndex((item)=>cartItem.id===item.id);

  //   cartList[itemIndex].quantity=cartList[itemIndex].quantity -1


  // setCart([...cartList])
  // setTotal(total - cartItem.price)
  //}


  //end


  const [userList, setUserlist] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [total, setTotal] = useState(0)
  const navigate=useNavigate()


  let addToCart = (product) => {
    setUserlist([...userList, { ...getUsers, quantity: 1 }])
    setTotal(total + getUsers.price)
  }

  let removeCart = (productItem) => {
    let itemIndex = userList.findIndex(item => productItem.id === item.id)
    userList.splice(itemIndex, 1)
    setUserlist([...userList])
    setTotal(total - productItem.price * productItem.quantity)

  };


  const incQuantity = (cartItem) => {
    let itemIndex = userList.findIndex((item) => cartItem.id === item.id);
    userList[itemIndex].quantity = userList[itemIndex].quantity + 1
    setUserlist([...userList])
    setTotal(total + cartItem.price)
  }

  const decQuantity = (cartItem) => {
    let itemIndex = userList.findIndex((item) => cartItem.id === item.id);

    userList[itemIndex].quantity = userList[itemIndex].quantity - 1


    setUserlist([...userList])
    setTotal(total - cartItem.price)
  }



  useEffect(() => {
    getUsers();
  }, []);

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




  return (
    <>

<div className='bgcolor'>


      <div className=" mb-4">
       
        <Link to="/portal/user-create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Create Pizza</Link>
      </div>
      

      {
        isLoading ? <h1>Loading...</h1> : <div className='container'>
          <div className='row'>
      
          {
            userList.map((user, index) => {
              return <div className='col-lg-4 col-md-6 col-sm-12 mb-3 '>
                <div className="card box-shadow" >
                  <img src={user.img_url} className="card-img-top card-img" />
                  <div className="card-body">
                    <h5 className="card-title">{user.productname}</h5>
                    <h6 className="card-price">₹{user.price}</h6>
                    <div className='card-detail-box'>
                    <p className="card-detail">{user.detail}</p>
                    </div>
                    {<button  className=" add-button-color">Add to Cart</button>}
                  </div>
                </div>
              </div>




            
            })

          }
              </div>
        </div>
      }
      </div>
    </>

  )
}

export default Userlist



