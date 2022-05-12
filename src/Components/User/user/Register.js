
import React, { useState } from 'react'
import './User.css'
import { Link } from 'react-router-dom'
import OtherOption from './OtherOption'
import app from '../../firebase.init';
import { getAuth, sendEmailVerification, createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, Modal } from 'react-bootstrap';
import useFirebase from '../../Hook/useFirebase';


const RegisterPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  const [error, setError] = useState()
  const [Success, setSuccess] = useState()
  const [border, setBorder] = useState(false)
  const [show, setShow] = useState(false);
  const { CreateWithEmailPassword } = useFirebase()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = getAuth(app)
  // Collect all Data From Feild 

  // Collect all Data From Feild 
  const Register = (e) => {
    CreateWithEmailPassword(email, password, name)
    console.log(email, password, name)
  }
  const emailVarify = () => {
    const user = auth.currentUser;
    const newPassword = getASecureRandomPassword();

    updatePassword(user, newPassword).then(() => {
      // Update successful.
    }).catch((error) => {
      // An error ocurred
      // ...
    });
  }
  return (
    <div>
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
              <div className="login100-form validate-form">
                <span className="login100-form-title p-b-49">
                  Register
                </span>


                <div className={border ? "border-danger bg-danger text-white wrap-input100 validate-input m-b-23" : "wrap-input100 validate-input m-b-23"} data-validate="Username is reauired">
                  <span className="label-input100">Name</span>
                  <input onBlur={(e) => setName(e.target.value)} required autoComplete='off' className="input100" type="text" name="name" placeholder="Type your Name" />
                  <span className="focus-input100" data-symbol="" />
                </div>

                <div className={border ? "border-danger bg-danger text-white wrap-input100 validate-input m-b-23" : "wrap-input100 validate-input m-b-23"} data-validate="Username is reauired">
                  <span className="label-input100">Email</span>
                  <input onBlur={(e) => setEmail(e.target.value)} required autoComplete='off' className="input100" type="email" name="email" placeholder="Type your Email" />
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
                    <button onClick={Register} className="login100-form-btn">
                      Register
                    </button>
                  </div>
                </div>

              </div>
              <div className='row'>
                <div className=" col text-left p-t-4 ">
                  {error ? <p className='text-danger m-t-10'> {error}</p>

                    :
                    <p className='text-success m-t-10'> {Success}</p>
                  }


                </div>
              </div>
              <OtherOption />
              <div className="flex-col-c p-t-55">
                <span className="txt1 p-b-17 fs-16">
                  Or Sign In Direct
                </span>
                <Link to="/login" className="txt2 fs-18 text-primary">
                  Login
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
        <Modal.Body>Register successful</Modal.Body>
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

export default RegisterPage