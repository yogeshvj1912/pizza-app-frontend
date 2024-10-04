import React, { useContext } from 'react'
import AddContext from '../../../AddContext'

function DeliveryStatus() {
    let cardsData = useContext(AddContext)
    let response = cardsData.paymentData
  return (
    <div className='delivery-status'>
      
    {response.razorpay_payment_id&&response.razorpay_order_id?<div className='success-order'>
      <h3 className='order'>Your order successfully created</h3>
      <h1>Payment Id : {response.razorpay_payment_id}</h1>
      <h1>Order Id : {response.razorpay_order_id}</h1>
      
    </div>:<h1>No Order</h1>}
    </div>
  )
}

export default DeliveryStatus

// {`${response.razorpay_payment_id} ${response.razorpay_order_id}`}