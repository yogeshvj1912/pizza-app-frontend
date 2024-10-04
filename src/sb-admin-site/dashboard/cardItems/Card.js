import React, { useContext, useState } from 'react'
import AddContext from '../../../AddContext'
import { Link } from 'react-router-dom'


function Card() {
  
  const cardsData = useContext(AddContext)

  let data = cardsData.cartlist
  let ele =0 
let totalItem=(i)=>{
  ele=i+1

}



  return (
<>
<div >
  
</div>
<div className="container conatiner-bg">
     
     <div className='row'>
     {
       data.map((ele,i)=>{
        totalItem(i)
          return  <div className='col-md-12 mb-2 addtocart-border' key={i}>
          <div className="addtocart-box" >
           <div className='addtocart-img-top'>
           <img src={ele.img_url} className=" addtocart-img" />
           </div>
            <div className="addtocart-body">
              <h5 className="addtocart-title">{ele.productname}</h5>
              <h6 className="addtocart-price">₹{ele.price}</h6>
              <div className='delivery'>Free Delivery</div>
              <div className='buttons'>
            <div className="addtocart-quantity">
              <button className="increament" onClick={(()=>cardsData.incQuantity(ele))}>+</button>
             {ele.quantity}
            <button disabled={ele.quantity === 1?true:false} className="decreament" onClick={(()=>cardsData.decQuantity(ele))}>-</button>
              </div>
            <button  onClick={(()=>cardsData.removeCart(ele))} className=" addtocart-remove" >Remove</button>
          </div>
            </div>
          </div>
        
        </div>
       })
     }
     
     </div>
     <div className='addtocart-total'>
     <h2 style = {{textAlign:"start"}}>PRICE DETAIL</h2>
     <h5 >Item : {ele}</h5>
     <h5>Price: {cardsData.total}</h5>
     <h5 >Delivery Charge : {cardsData.total>=200?<span style={{fontSize:"15px"}} className='delivery'><span style={{textDecoration:"line-through",color:"gray"}}>40</span> Free Delivery</span>:cardsData.total<=0?0:40}</h5>
     <h4 >Total : {cardsData.amount}</h4>
     </div>
     {ele>0?<Link className="place-order" to="/portal/address">Place Order</Link>:""}
   </div>

</>
  )
}

export default Card