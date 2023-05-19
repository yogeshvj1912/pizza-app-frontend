import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserView() {
  const params = useParams();

  useEffect(() => {
    getUserData()
  }, [])
  let getUserData = async () => {
    try {

      const user = await axios.get(`https://64493cfab88a78a8f001da8a.mockapi.io/users/${params.id}`)
      myFormik.setValues(user.data)
    }
    catch (error) {
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
  })

  return (
    <>
      <div>UserView-{params.id}</div>
      <div className='container'>
        <form onSubmit={myFormik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-12 mt-5'  style={{background:"",color:"black"}}>

              <div name='username' value={myFormik.values.username} onChange={myFormik.handleChange} type={"text"}>
                <pre><h1>{`Name    :${myFormik.values.username}`}</h1></pre>
                <pre><h1>{`Email   :${myFormik.values.email}`}</h1></pre>
                <pre><h1>{`Country :${myFormik.values.country}`}</h1></pre>
                <pre><h1>{`State   :${myFormik.values.state}`}</h1></pre>
                <pre><h1>{`City    :${myFormik.values.city}`}</h1></pre>
          
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default UserView