import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'
import './Style.css'
import Google from './user/Google'
const Login = () => {
  const [error , setError] = useState()
  const location = useLocation()
  const fromLoca = location.state?.from?.pathname
  const navigate = useNavigate()
  const sigin = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // sentJwy(user)
        navigate(fromLoca) 
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode)
      });
    
  }
  // function sentJwy(user) {
  //   fetch("http://localhost:5100/login",
  //     {
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       method: "POST",
  //       body: JSON.stringify(user)
  //     })
  //     .then(res => res.json)
  //     .then(data =>{
  //       if(data){
  //           localStorage.setItem('accessToken', data);
  //       }
  //       console.log(data);
  //   })
  // }
  return (
    <div className='container'>
      <div className="login-page">
        <h1 className='text-center my-5 pt-5'>Login</h1>

        <form onSubmit={sigin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input name='email' type="email" className="form-control" placeholder="Email" required />
          </div>

          <div className="my-3">
            <label className="form-label">Password</label>
            <input name='password' type="password" className="form-control" placeholder="Password" required />
          </div>
          <p className='text-danger'>{error}</p>
          <button className='button-primary mt-3' type='submit'>Login</button>

        </form>

        <h5 className='d-flex align-items-center justify-content-around mt-4'>
          Not a mamber
          <Link className='reg-button' to='/register'>Register</Link></h5>
         <Google />
      </div>
      
    </div>
  )
}

export default Login