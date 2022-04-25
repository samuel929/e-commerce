import React from 'react'
import {signInWithGooglePopUp,createUserDocumentFromAuth} from '../../utils/firebase'
function Signin() {

  const logGoogleUser=async()=>{
    const response=await signInWithGooglePopUp();
   const userDocRef=await  createUserDocumentFromAuth(response.user);
   
  }
  return (
    <div>
      <h1>Signin</h1>
      <button onClick={logGoogleUser}>
       Sign in with Google
      </button>
    </div>
  )
}

export default Signin