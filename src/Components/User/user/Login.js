
import React, { useState } from 'react'
import './User.css'
import { Link } from 'react-router-dom'

import OtherOption from './OtherOption'
import { Button, Modal } from 'react-bootstrap';
import useFirebase from '../../Hook/useFirebase'
const Login = () => {
  const {LoginWithEmailPassword} = useFirebase()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const loginWithEmail = () => {
    
    LoginWithEmailPassword(email , password )
    console.log(email , password)
  }



  return (
    <div>
      <div>
        <div className="limiter">
          <div className="container-login100" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
              <div className="login100-form validate-form">
                <span className="login100-form-title p-b-49">
                  Login
                </span>
                <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                  <span className="label-input100">Email</span>
                  <input onBlur={(e) => setEmail(e.target.value)} required className="input100" type="email" name="username" placeholder="Type your Email" />
                  <span className="focus-input100" data-symbol="" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <span className="label-input100">Password</span>
                  <input onBlur={(e) => setPassword(e.target.value)} required className="input100" type="password" name="pass" placeholder="Type your password" />
                  <span className="focus-input100" data-symbol="" />
                </div>
                <div className="text-right p-t-8 p-b-31">

                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button onClick={loginWithEmail} className="login100-form-btn">
                      Login
                    </button>
                  </div>
                </div>

              </div>
              <div className='row'>
                <div className=" col text-left p-t-4 ">
                  <p className='text-danger m-t-10'>{error}</p>
                </div>
                <div className="col-12 text-right ">
                  <button className='text-danger m-t-10'>
                    Forgot password?
                  </button>
                </div>

              </div>
              <OtherOption />
              <div className="flex-col-c p-t-55">
                <span className="txt1 p-b-17">
                  Or Sign Up Direct
                </span>
                <Link to="/register" className="txt2 fs-18 text-primary">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error ? error : success}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Login