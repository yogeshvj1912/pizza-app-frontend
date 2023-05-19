import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate();
const formik = useFormik({
    initialValues:{
        email :"",
        password:""
    },
    onSubmit:async(values)=>{
        try {
            const login =await axios.post("https://pizzabackend-2y30.onrender.com/login",values);
            window.localStorage.setItem("token",login.data.token)
            navigate("/portal/user-list")
        } catch (error) {
            alert("Enter Email And Password wrong")
        }
    }
})

  return (
    <div className="container">

    {/* <!-- Outer Row --> */}
    <div className="row justify-content-center">

        <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        <img src="https://ewscripps.brightspotcdn.com/dims4/default/f0ec632/2147483647/strip/true/crop/3024x1701+0+1631/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F6d%2Fb4%2F4bde265149aaadc1e93d9e23f481%2Fi-wish-for-more-bacon-pm-07.jpg" className='col-lg-6 login-bg-img d-lg-block '/>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form onSubmit={formik.handleSubmit} className="user">
                                    <div className="form-group">
                                        <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} className="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..."/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange} className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password"/>
                                    </div>

            

                                    <input type={"submit"} value="submit" className="btn btn-primary btn-user btn-block"/>
                                       
                                    <hr/>
                                    
                                </form>
                                <hr/>
                                <div className="text-center">
                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <div className="text-center">
                                    <Link className="small" to="/signup">Create an Account!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>

  )
}

export default Login;
