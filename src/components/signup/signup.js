import React,{useState} from 'react'
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase'
import FormInput from '../formInput/FormInput'
import './sign-up.scss';
import Button from '../button/Button';
const formField={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

function Signup() {
  const [formFields,setFormFields]=useState(formField)
  const {displayName,email,password,confirmPassword}=formFields;

    const submit=async(e)=>{
        e.preventDefault()

        if(password != confirmPassword){
            alert("password dont match");
            return
        }
        try{
           const {user}= await createAuthUserWithEmailAndPassword(email,password)
           await createUserDocumentFromAuth(user,{displayName})
           setFormFields(formField)
        }catch(err){
          console.log(err.message);
          throw err;
        }
        
    }

  const handleChange=(event)=>{
      const {name,value}=event.target;

       setFormFields({...formFields,[name]:value})
  }
  return (
      <div className='sign-up-container'>
          <h2>Don't have an account?</h2>
          <span>Sign up with your email and password</span>
          <form onSubmit={submit}>
              <FormInput
               
              label="Display name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

              <FormInput label="email" type="email" required onChange={handleChange} name="email" value={email}/>

              <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

              <FormInput label="Confirm Passowrd" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
              <Button  type="submit">Sign Up</Button>
          </form>
      </div>
    
  )
}

export default Signup