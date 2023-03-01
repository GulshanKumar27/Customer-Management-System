import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Registration = () => {
const navigate = useNavigate();  
  const [input,setInput]=useState({
    name:"",
    email:"",
    password:"",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user',JSON.stringify(input));
    navigate('/login');
  };
  return (
   <>
   <h2>Creat an account</h2>
   <form onSubmit={handleSubmit}>
   <div className='form-outline mb-4'>
   <input
    name='name'
   value={input.name}
   onChange={(e)=>
  setInput({ 
    ...input,
    [e.target.name]:e.target.value
  })}
   
   type="text" id='text' className='form-control form-control-lg'/>
   <label className='form-lable' htmlFor='text'>Your Name</label>   
   </div>
   <div className='form-outline mb-4'>
   <input 
   name='email'
   value={input.email}
   onChange={(e)=>
  setInput({ 
    ...input,
    [e.target.name]:e.target.value
  })}
   type="email" id='email' className='form-control form-control-lg'/>
   <label className='form-lable' htmlFor='email'>Your Email</label>   
   </div>
   <div className='form-outline mb-4'>
   <input
   name='password'
   value={input.password}
   onChange={(e)=>
  setInput({ 
    ...input,
    [e.target.name]:e.target.value
  })}
   type="password" id='password' className='form-control form-control-lg'/>
   <label className='form-lable' htmlFor='password'>Your Password</label>   
   </div>
   <div className='d-flex justify-content-center'>
   <button
   type="submit"
   className="btn btn-success btn-block btn-lg
   gradient-custom-4 text-body text-white">Register</button>
   </div>
   <p className='text - center text muted mt-5 mb-0'>
   Have already an account ?
   <a href='/login' className='fw-bold text-body'>
   <u>Login here</u>
   </a>
   </p>
   </form>
   
   </>
  )
}

export default Registration
