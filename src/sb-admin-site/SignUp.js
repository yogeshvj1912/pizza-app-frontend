import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate()
    const myFormik = useFormik({
       initialValues: {
          username: "",
          email: "",
         password:"",
        
       },
       validate: (values) => {
          let errors = {}
 
          if (!values.username) {
             errors.username = "please enter a Name";
          } else if (values.username.length < 3) {
             errors.username = "Length should be greater than 3";
          } else if (values.username.length >= 20) {
             errors.username = "Length should be less than 20";
          }
 
           


          if (!values.email) {
             errors.email = "please enter a email"
          }
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
             errors.email = "please enter a valid email"
          }

          if (!values.password) {
            errors.password = "please enter a Password";
         } else if (values.password.length < 6) {
            errors.password = "Length should be greater than 6";
         } else if (values.password.length >= 20) {
            errors.password = "Length should be less than 20";
         }
 
          return errors
       },
       onSubmit: async (values) => {
 
          try {
             setLoading(true)
             await axios.post("https://pizzabackend-2y30.onrender.com/register", values)
             
             navigate("/")
 
          }
          catch (error) {
             console.log(error);
             alert("validation Error");
             setLoading(false)
          }
 
 
 
       },
    })
 
 
 
    return (
<div className='signup-bg'>
    
<div className="container">

<div className="card o-hidden border-0 shadow-lg ">
    <div className="card-body p-0">
       
        <div className="row">
            <img src="https://www.pngkit.com/png/detail/90-907683_delivery-clipart-delivery-scooter-pizza-delivery-vector.png" alt=""  className="col-lg-5 d-lg-block d-none"/>
            <div className="col-lg-7">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form className="user" onSubmit={myFormik.handleSubmit}>
                        <div className="form-group row">
                            <div className="col-sm-12 mb-3 mb-sm-0">
                                <input name='username' value={myFormik.values.username} onChange={myFormik.handleChange} type={"text"} className={`form-control form-control-user ${myFormik.errors.username ? "is-invalid" : "is-valid"}`}  id="exampleFirstName"
                                    placeholder="Enter Your Name"/>
                                    <span style={{ color: "red" }}>{myFormik.errors.username}</span>
                            </div>
                            
                        </div>
                        <div className="form-group">
                            <input name='email' value={myFormik.values.email} onChange={myFormik.handleChange} type={"text"} className={`form-control form-control-user ${myFormik.errors.email ? "is-invalid" : "is-valid"}`}  id="exampleInputEmail"
                                placeholder="Email Address"/>
                                <span style={{ color: "red" }}>{myFormik.errors.email}</span>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-12 mb-3 mb-sm-0">
                                <input  name='password' value={myFormik.values.password} onChange={myFormik.handleChange} type={"text"} className={`form-control form-control-user ${myFormik.errors.password ? "is-invalid" : "is-valid"}`} 
                                    id="exampleInputPassword" placeholder="Password"/>
                                    <span style={{ color: "red" }}>{myFormik.errors.password}</span>
                            </div>
                        </div>
                        <input disabled={isLoading} type={"submit"} value={isLoading ? "Loding..." : "Register Account"} className='btn btn-primary btn-user btn-block' />
                        {/* <Link to="login.html" className="btn btn-primary btn-user btn-block">
                            Register Account
                        </Link> */}
                    </form>
                    <hr/>
                    <div className="text-center">
                        
                        <Link className="small" to="/">Already have an account? Login!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>

</div>














        
    //    <div className='container'>
    //       <form onSubmit={myFormik.handleSubmit}>
    //          <div className='row'>
    //             <div className='col-lg-6'>
    //                <label>Name</label>
    //                <input name='username' value={myFormik.values.username} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.username ? "is-invalid" : "is-valid"}`} />
    //                <span style={{ color: "red" }}>{myFormik.errors.username}</span>
    //             </div>
    //             <div className='col-lg-6'>
    //                <label>E-Mail</label>
    //                <input name='email' value={myFormik.values.email} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.email ? "is-invalid" : "is-valid"}`} />
    //                <span style={{ color: "red" }}>{myFormik.errors.email}</span>
    //             </div>
    //             <div className='col-lg-4'>
    //                <label>Country</label>
    //                <select name='country' value={myFormik.values.country} onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.country ? "is-invalid" : "is-valid"}`} >
    //                   <option value={""}>---Select---</option>
    //                   <option value={"IN"}>India</option>
    //                   <option value={"USA"}>America</option>
    //                </select>
    //                <span style={{ color: "red" }}>{myFormik.errors.country}</span>
    //             </div>
    //             <div className='col-lg-4'>
    //                <label>State</label>
    //                <select name='state' value={myFormik.values.state} onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.state ? "is-invalid" : "is-valid"}`} >
    //                   <option value={""}>---Select---</option>
    //                   <option value={"TN"}>Tamil Nadu</option>
    //                   <option value={"KL"}>Kerla</option>
    //                   <option value={"NY"}>New York</option>
    //                   <option value={"WT"}>Washington</option>
    //                </select>
    //                <span style={{ color: "red" }}>{myFormik.errors.state}</span>
    //             </div>
    //             <div className='col-lg-4'>
    //                <label>City</label>
    //                <select name='city' value={myFormik.values.city} onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.city ? "is-invalid" : "is-valid"}`} >
    //                   <option value={""}>---Select---</option>
    //                   <option value={"CH"}>Chennai</option>
    //                   <option value={"MA"}>Madurai</option>
    //                   <option value={"CO"}>Coimbutur</option>
    //                   <option value={"TH"}>Thiruvannamalai</option>
    //                   <option value={"KA"}>Kangipuram</option>
    //                   <option value={"VE"}>Velur</option>
    //                </select>
    //                <span style={{ color: "red" }}>{myFormik.errors.city}</span>
    //             </div>
    //             <div className='col-lg-3  mt-4'>
    //                <input disabled={isLoading} type={"submit"} value={isLoading ? "Loding..." : "Create"} className='btn btn-primary' />
    //             </div>
 
    //          </div>
    //       </form>
    //    </div>
    )
}

export default SignUp