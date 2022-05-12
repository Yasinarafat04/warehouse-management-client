import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


import auth from './firebase.init';
import Loading from './loading/Loading';

const RequireAuth = ({ children }) => {

    function verifyEmail() {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            const notify = () => toast("Mail Sent");
            notify()
          });
      }
    const [user, loading] = useAuthState(auth);
   
    const location = useLocation()
   
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h4 className='text-primary'>{user.email}</h4>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'> Please Verify your email address</h5>
            <div>
            <a className='btn btn-primary mx-auto mt-2' target='_blank' href="https://mail.google.com/mail/u/0/#inbox">Go To In-Box</a>
            </div>
            <button
            className='btn-special2 mt-3'
                onClick={verifyEmail}
            >
                Send Verification Email Again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;