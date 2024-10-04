import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useFormik } from 'formik';
import AddContext from '../../../AddContext';
import DeliveryStatus from './DeliveryStatus';


function Payment() {
  const cardDatas = useContext(AddContext)

  const [userList, setUserlist] = useState([])
  const [isLoading, setLoading] = useState(true);
  const amount = cardDatas.amount
  const getEmail = window.sessionStorage.getItem("email")
  const navigate = useNavigate()


  useEffect(() => {

    getUsers();

  }, []);

  let getUsers = async () => {
    try {
      const users = await axios.get("https://pizzabackend-2y30.onrender.com/address", {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`
        }
      })

      setUserlist(users.data);
      setLoading(false)

    }
    catch (error) {
      navigate("/")
    }
  };

  const handlePayment = async () => {
    try {
      const order = await axios.post('https://pizzabackend-2y30.onrender.com/api/payment/orders', {
        amount: amount,
        currency: 'INR',
        receipt: 'receipt_order_1',
      });

      const { data } = order;


      const options = {
        key: "rzp_test_6MdqrCywquzUyj", // Replace with your Razorpay Key ID
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        handler: function (response) {
          cardDatas.setPaymentData(response)
          navigate("/portal/delivery-status")
          // alert(`Order ID: ${response.razorpay_order_id}`);
        },
        prefill: {
          name: "John Doe",
          email: getEmail,
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };



  return (
    <>

      <div className='bgcolor'>




        {
          isLoading ? <h1>Loading...</h1> :

            <>


              <div className='payment-container'>
                <div className='payment-row'>

                  {
                    userList.map((user, index) => {
                      return <>
                      <h1>ADDRESS</h1>
                      <table key={index}>
                        <tbody> 
                          <tr>
                            <td>Name</td>
                            <td>{user.fname}</td>
                          </tr>
                          <tr>
                            <td>Mobile Number</td>
                            <td>{user.phoneNumber}</td>
                          </tr>
                          <tr>
                            <td>Adderess</td>
                            <td>{user.address}</td>
                          </tr>
                          <tr>
                            <td>Pincode</td>
                            <td>{user.pincode}</td>
                          </tr>          
                        </tbody>
                      </table>
                      </>
                    })
                  }
                </div>
                <div style={{ margin: "20px 0" }}>
                  <h3>Click And Pay</h3>


                  <div>
                    <h4>Make a Payment</h4>
                  </div>


                  <button className='pay' onClick={handlePayment}>Pay ₹{amount}</button>
                </div>
              </div>

            </>
        }
      </div>
    </>

  )
}

export default Payment






// // import React, { useState } from 'react';
// // import axios from 'axios';

// const Payment = () => {
//     const [amount, setAmount] = useState('');

//     const handlePayment = async () => {
//         try {
//             const order = await axios.post('http://localhost:8000/api/payment/orders', {
//                 amount: amount,
//                 currency: 'INR',
//                 receipt: 'receipt_order_1',
//             });

//             const { data } = order;

//             const options = {
//                 key: "rzp_test_HpPZtRyhcn38Ze", // Replace with your Razorpay Key ID
//                 amount: data.amount,
//                 currency: data.currency,
//                 order_id: data.id,
//                 handler: function (response) {
//                     alert(`Payment ID: ${response.razorpay_payment_id}`);
//                     alert(`Order ID: ${response.razorpay_order_id}`);
//                 },
//                 prefill: {
//                     name: "John Doe",
//                     email: "john.doe@example.com",
//                     contact: "9999999999",
//                 },
//                 theme: {
//                     color: "#3399cc"
//                 }
//             };

//             const rzp1 = new window.Razorpay(options);
//             rzp1.open();
//         } catch (error) {
//             console.error('Error creating order:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Make a Payment</h2>
//             <input
//                 type="text"
//                 placeholder="Enter Amount"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//             />
//             <button onClick={handlePayment}>Pay Now</button>
//         </div>
//     );
// };

// export default Payment;
