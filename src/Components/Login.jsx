import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();  
    const [input,setInput]=useState({
        email:"",
        password:"",
      });
const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
if(
    input.email=== loggeduser.email &&
    input.password=== loggeduser.password 
){ 
  localStorage.setItem("loggedin",true);
navigate('/Home')
}else{
    alert("wrong Email or Password")
}
};
  return (
   <form onSubmit={handleLogin}>
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
   type='submit'
   className="btn btn-success btn-block btn-lg
   gradient-custom-4 text-body text-white"
   >Login</button>
   </div>
   </form>
  )
}

export default Login
