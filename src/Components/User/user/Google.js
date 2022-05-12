import React from 'react'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const Google = () => {
    const location = useLocation()
    const fromLoca = location.state?.from?.pathname
    const navigate = useNavigate()
    const logingoogle =()=>{
        
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
           if (fromLoca) {
            navigate(fromLoca)
           }
          }).catch((error) => {
           
            const errorCode = error.code;

           console.log(errorCode)
            // ...
          });
    }
    return (
        <div className='mt-3'>
            <p>or Continue With Google</p>
            <button onClick={logingoogle} className='btn btn-primary'>Google</button>
        </div>
    )
}

export default Google