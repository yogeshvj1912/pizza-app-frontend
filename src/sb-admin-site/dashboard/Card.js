import React from 'react'

function Card({cartList, removeCart,incQuantity,decQuantity,total}) {
  return (
    <ol class="list-group list-group-numbered"><h2>Cart</h2>
    {
      cartList.map((item) => {
        return <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">{item.username}</div>
            {item.price} - {item.quantity}
            <button onClick={()=>incQuantity(item)}>+</button>
            <button disabled={item.quantity === 0?true:false} onClick={()=>decQuantity(item)}>-</button>
          </div>
          <button class="badge bg-primary rounded-pill" onClick={() => removeCart(item)}>Remove</button>
        </li>
      })
    }
<h3>Total : {total}</h3>
  </ol>
  )
}

export default Card