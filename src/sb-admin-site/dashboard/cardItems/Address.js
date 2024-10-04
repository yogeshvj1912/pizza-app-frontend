import React, { useState } from 'react'
import axios from 'axios';
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';

function Address() {
  
       
       const getEmail= window.sessionStorage.getItem("email")
       const [isLoading, setLoading] = useState(false);
       const navigate = useNavigate()
       const myFormik = useFormik({
          initialValues: {
             fname: "",
             phoneNumber: "",
             address: "",
             pincode: "",
             email:getEmail,

          },
          validate: (values) => {
             let errors = {}
    
             if (!values.fname) {
                errors.fname = "please enter a Url";
             }
    
             if (!values.phoneNumber) {
                errors.phoneNumber = "please enter a product name"
             }
    
             if (!values.address) {
                errors.address = "please give a address"
             }
    
             if (!values.pincode) {
                errors.pincode = "please enter a pincode"
             }else if(values.pincode.length<7){
                errors.pincode="please enter minimum 20letters"
             }else if(values.pincode.length>5){
                errors.pincode="please enter maximum 20letters"
             }
    
             return errors
          },
          onSubmit: async (values) => {
    
             try {
                setLoading(true)
                await axios.post("https://pizzabackend-2y30.onrender.com/address", values,{
                   headers:{
                     Authorization:`${window.localStorage.getItem("token")}`
                   }
                 })
                setLoading(false)
                navigate("/portal/payment")
    
             }
             catch (error) {
                alert("validation Error");
                setLoading(false)
             }
    
    
    
          },
       })
    
    
    
       return (
          <div className='container'>
             <form onSubmit={myFormik.handleSubmit}>
              
                   <div className='col-lg-6'>
                      <label>Name</label>
                      <input name='fname' value={myFormik.values.fname} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.fname ? "is-invalid" : "is-valid"}`}  autoComplete='off' />
                      <span style={{ color: "red" }}>{myFormik.errors.fname}</span>
                   </div>
                   
                   <div className='col-lg-6'>
                      <label>Phone number</label>
                      <input name='phoneNumber' value={myFormik.values.phoneNumber} onChange={myFormik.handleChange} type={"number"} className={`form-control ${myFormik.errors.phoneNumber ? "is-invalid" : "is-valid"}`}  autoComplete='off'/>
                      <span style={{ color: "red" }}>{myFormik.errors.phoneNumber}</span>
                   </div>
                   <div className='col-lg-6'>
                      <label>Address</label>
                      <input name='address' value={myFormik.values.address} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.address ? "is-invalid" : "is-valid"}`}  autoComplete='off' />
                      <span style={{ color: "red" }}>{myFormik.errors.address}</span>
                   </div>
                   <div className='col-lg-4'>
                      <label>Pincode</label>
                      <input name='pincode' value={myFormik.values.pincode} onChange={myFormik.handleChange} type={"number"} className={`form-control ${myFormik.errors.pincode ? "is-invalid" : "is-valid"}`}  autoComplete='off'/>
                      <span style={{ color: "red" }}>{myFormik.errors.pincode}</span>
                   </div>
    
    
                   <div className='col-lg-3  mt-4'>
                      <input disabled={isLoading} type={"submit"} value={isLoading ? "Loding..." : "place order"} className='btn btn-primary' />
                   </div>
    
             </form>
          </div>
       )
    }
    
    

export default Address