import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserCreate() {
   const [isLoading, setLoading] = useState(false);
   const navigate = useNavigate()
   const myFormik = useFormik({
      initialValues: {
         img_url: "",
         productname: "",
         price: "",
         detail: ""
      },
      validate: (values) => {
         let errors = {}

         if (!values.img_url) {
            errors.img_url = "please enter a Url";
         }

         if (!values.productname) {
            errors.productname = "please enter a product name"
         }

         if (!values.price) {
            errors.price = "please give a price"
         }

         if (!values.detail) {
            errors.detail = "please enter a detail"
         }else if(values.detail.length<20){
            errors.detail="please enter minimum 20letters"
         }else if(values.detail.length>200){
            errors.detail="please enter maximum 200letters"
         }

         return errors
      },
      onSubmit: async (values) => {

         try {
            setLoading(true)
            await axios.post("https://pizzabackend-2y30.onrender.com/user", values,{
               headers:{
                 Authorization:`${window.localStorage.getItem("token")}`
               }
             })
            setLoading(false)
            navigate("/portal/user-list")

         }
         catch (error) {
            navigate("/")
            alert("validation Error");
            setLoading(false)
         }



      },
   })



   return (
      <div className='container'>
         <form onSubmit={myFormik.handleSubmit}>
            <div className='row'>
               <div className='col-lg-6'>
                  <label>IMAGE URL</label>
                  <input name='img_url' value={myFormik.values.img_url} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.img_url ? "is-invalid" : "is-valid"}`}  autoComplete='off' />
                  <span style={{ color: "red" }}>{myFormik.errors.img_url}</span>
               </div>
               <div className='col-lg-6'>
                  <label>PRODUCT NAME</label>
                  <input name='productname' value={myFormik.values.productname} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.productname ? "is-invalid" : "is-valid"}`}  autoComplete='off'/>
                  <span style={{ color: "red" }}>{myFormik.errors.productname}</span>
               </div>
               <div className='col-lg-6'>
                  <label>price</label>
                  <input name='price' value={myFormik.values.price} onChange={myFormik.handleChange} type={"number"} className={`form-control ${myFormik.errors.price ? "is-invalid" : "is-valid"}`}  autoComplete='off' />
                  <span style={{ color: "red" }}>{myFormik.errors.price}</span>
               </div>
               <div className='col-lg-6'>
                  <label>DETAIL</label>
                  <input name='detail' value={myFormik.values.detail} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.detail ? "is-invalid" : "is-valid"}`}  autoComplete='off'/>
                  <span style={{ color: "red" }}>{myFormik.errors.detail}</span>
               </div>


               <div className='col-lg-3  mt-4'>
                  <input disabled={isLoading} type={"submit"} value={isLoading ? "Loding..." : "Create"} className='btn btn-primary' />
               </div>

            </div>
         </form>
      </div>
   )
}

export default UserCreate




// const myFormik = useFormik({
//    initialValues: {
//       username: "",
//       email: "",
//       country: "",
//       state: "",
//       city: ""
//    },
//    validate: (values) => {
//       let errors = {}

//       if (!values.username) {
//          errors.username = "please enter a Name";
//       } else if (values.username.length < 3) {
//          errors.username = "Length should be greater than 3";
//       } else if (values.username.length >= 20) {
//          errors.username = "Length should be less than 15";
//       }


//       if (!values.email) {
//          errors.email = "please enter a email"
//       }
//       else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//          errors.email = "please enter a valid email"
//       }

//       if (!values.country) {
//          errors.country = "please enter a country"
//       }

//       if (!values.state) {
//          errors.state = "please enter a state"
//       }

//       if (!values.city) {
//          errors.city = "please enter a city"
//       }

//       return errors
//    },
//    onSubmit: async (values) => {

//       try {
//          setLoading(true)
//          await axios.post("http://127.0.0.1:8000/user", values)
//          setLoading(false)
//          navigate("/portal/user-list")

//       }
//       catch (error) {
//          console.log(error);
//          alert("validation Error");
//          setLoading(false)
//       }



//    },
// })
