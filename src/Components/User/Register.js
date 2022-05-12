import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import './Style.css'
import auth from '../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import Google from './user/Google';
const Register = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const location = useLocation()
  const fromLoca = location.state?.from?.pathname
  const navigate = useNavigate()
  const signup = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccess('Register Success')
        setError('')
        DisplayName(name)
        verifyEmail()
       

      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode)
        setSuccess('')
      });

  }
  const DisplayName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      const notify = () => toast("Registerd Success");
      notify()
      
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }
  function verifyEmail() {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        const notify = () => toast("Mail Sent");
        notify()
      });
  }
  return (
    <div className='container '>
      <div className="login-page">
        <h1 className='text-center my-5 pt-5'>Register</h1>
        <form onSubmit={signup}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name='name' className="form-control" placeholder="Name" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" name='email' className="form-control" placeholder="Email" required />
          </div>

          <div className="my-3">
            <label className="form-label">Password</label>
            <input type="password" name='password' className="form-control" placeholder="Password" required />
          </div>
          <p className='text-danger'>{error}</p>
          <p className='text-success'>{success}</p>
          <button className='button-primary mt-3' type='submit'>Register</button>
        </form>
        <h5 className='d-flex align-items-center justify-content-around mt-4'>
          Alrady Member
          <Link className='reg-button' to='/login'>Login</Link></h5>
          <Google />
        <ToastContainer />
      </div>
    </div>
  )
}

export default Register