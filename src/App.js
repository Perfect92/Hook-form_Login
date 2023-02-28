import React from 'react'
import { useForm } from 'react-hook-form';


export default  function App() {
  const {register, handleSubmit} = useForm()
  const onSubmit = data => console.log(data)

  const btnAlert = () =>{
    alert(" Успешно :)")
  }
  return (
    <div className='container'>
    <div className='wrap-login'>
   <form  onSubmit={handleSubmit(onSubmit)}>
    <h1>Login</h1>
    <div className='wrap-input'>
    <span className='span-input'>Username</span>
    <input className='input'
    placeholder="Type your username" 
    type="text"
    id="username"
    {...register("FirstName")}>
    </input>
    </div>
    <div className='wrap-input '>
    <span className='span-input'>Password</span>
    <input className='input' 
    type="password"
    placeholder="Type your password"
    {...register("Password")}>
    </input>
    </div>
    <select {...register("Gender")}> 
    <option value="female">Female</option>
    <option value="male">Male</option>
    <option value="other">Other</option>
     </select>
     <div class="form-btn">
     <button onClick={btnAlert} class="login-form-btn" type="submit">Login
     </button>
     </div>
   </form>
   </div>
   </div>
  );
}

