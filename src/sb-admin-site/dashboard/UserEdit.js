import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserEdit() {
    const [isLoading,setLoading]=useState(false);
    const params=useParams()
    const navigate = useNavigate()

    useEffect(()=>{
getUserData()
    },[])
    let getUserData=async()=>{
        try{
          
         const user=await axios.get(`https://64493cfab88a78a8f001da8a.mockapi.io/users/${params.id}`)
           myFormik.setValues(user.data)
         }
         catch (error){
           console.log(error);
         
          
         }
    }

    const myFormik = useFormik({
        initialValues: {
           username: "",
           email: "",
           country: "",
           state: "",
           city: ""
        },
        validate:(values)=>{
          let errors={}
          
          if(!values.username){
           errors.username="please enter a Name";
          }else if (values.username.length< 3){
           errors.username="Length should be greater than 3";
        }else if (values.username.length >=20){
           errors.username="Length should be less than 15";
        }
           
          
          if(!values.email){
           errors.email="please enter a email"
          }
         else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
           errors.email="please enter a valid email"
          }
  
          if(!values.country){
           errors.country="please enter a country"
          }
  
          if(!values.state){
           errors.state="please enter a state"
          }
  
          if(!values.city){
           errors.city="please enter a city"
          }
  
          return errors
        },
        onSubmit:async(values)=>{
            try{
          await axios.put(`https://64493cfab88a78a8f001da8a.mockapi.io/users/${params.id}`,values)
          alert("Update done")
          navigate("/portal/user-list")
            }catch(error){
              alert("Somthing went wrong")
            }
        }
     })
  
  return (
   <>
    <div>UserEdit-{params.id}</div>
    <div className='container'>
    <form onSubmit={myFormik.handleSubmit}>
    <div className='row'>
          <div className='col-lg-6'>
             <label>Name</label>
             <input name='username' value={myFormik.values.username} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.username?"is-invalid":"is-valid"}`} />
             <span style={{color:"red"}}>{myFormik.errors.username}</span>
          </div>
          <div className='col-lg-6'>
             <label>E-Mail</label>
             <input name='email' value={myFormik.values.email} onChange={myFormik.handleChange} type={"text"} className={`form-control ${myFormik.errors.email?"is-invalid":"is-valid"}`}  />
             <span style={{color:"red"}}>{myFormik.errors.email}</span>
          </div>
          <div className='col-lg-4'>
             <label>Country</label>
             <select name='country' value={myFormik.values.country} onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.country?"is-invalid":"is-valid"}`} >
                <option value={""}>---Select---</option>
                <option value={"IN"}>India</option>
                <option value={"USA"}>America</option>
             </select>
             <span style={{color:"red"}}>{myFormik.errors.country}</span>
          </div>
          <div className='col-lg-4'>
             <label>State</label>
             <select name='state' value={myFormik.values.state} onChange={myFormik.handleChange}className={`form-control ${myFormik.errors.state?"is-invalid":"is-valid"}`} >
                <option value={""}>---Select---</option>
                <option value={"TN"}>Tamil Nadu</option>
                <option value={"KL"}>Kerla</option>
                <option value={"NY"}>New York</option>
                <option value={"WT"}>Washington</option>
             </select>
             <span style={{color:"red"}}>{myFormik.errors.state}</span>
          </div>
          <div className='col-lg-4'>
             <label>City</label>
             <select name='city' value={myFormik.values.city} onChange={myFormik.handleChange} className={`form-control ${myFormik.errors.city?"is-invalid":"is-valid"}`} >
                <option value={""}>---Select---</option>
                <option value={"CH"}>Chennai</option>
                <option value={"MA"}>Madurai</option>
                <option value={"CO"}>Coimbutur</option>
                <option value={"TH"}>Thiruvannamalai</option>
                <option value={"KA"}>Kangipuram</option>
                <option value={"VE"}>Velur</option>
             </select>
             <span style={{color:"red"}}>{myFormik.errors.city}</span>
          </div>
          <div className='col-lg-3  mt-4'>
             <input disabled={isLoading} type={"submit"} value={isLoading?"Loding...":"Update"}  className='btn btn-primary' />
          </div>
       
       </div>  
    </form>
    </div>
    </>
  )
}

export default UserEdit