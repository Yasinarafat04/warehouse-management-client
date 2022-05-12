import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../Components/firebase.init";

const useUser = () =>{
const [user ,setuser] = useState({})
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setuser(user)
        } else {
          // User is signed out
          // ...
        }
      });
}, []);

return user
}


export default useUser