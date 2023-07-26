import React, { useContext, useState } from 'react'
import AddContext from '../../AddContext'


function Card() {
  const cardsData = useContext(AddContext)

  let data = cardsData.cartlist

 

  return (
<>
<div >
  
</div>
<div className="container conatiner-bg">
     
     <div className='row'>
     {
       data.map((ele,i)=>{
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
            <button disabled={ele.quantity === 0?true:false} className="decreament" onClick={(()=>cardsData.decQuantity(ele))}>-</button>
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
     
     <h1 >Total : {cardsData.total}</h1>
     </div>
   </div>

</>
  )
}

export default Card