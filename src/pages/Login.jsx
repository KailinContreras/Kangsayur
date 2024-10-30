import React, { useState } from 'react'
import Prev from "../assets/prev.png"
import Cliente  from "../assets/cliente.png"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../database/Firebase'


export const Login = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navegador = useNavigate ()


  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    if (user.uid === "pfdOJ3OSG5PVGghcLkeZdLEknSI2") {
      // si es administrador, redirigir a la pagina de administrador

      navegador("/Products");
    } else{
      //si no es administrador, redirigir a la pagina de "getstarted"

      navegador("/GetStarted");
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage )
  });

  }
  return (
    <div className="bg-white w-screen h-screen relative p-5">
        <div className="bg-[#4CAD73] rounded-full w-[37rem] h-[35rem] absolute bottom-[396px] -left-40 z-0">
        </div>
        <Link to="/">
          <button className='absolute z-1 top-5 left-2'>
              <img src={Prev} alt="" />
          </button>
        </Link>
        <p className='Login z-1 absolute font-semibold text-2xl text-[#FFFFFF] top-64 left-4'>Login</p>
        <img className='absolute z-1 top-[70px] left-[182px]' src={Cliente} alt="" />
        <form onSubmit={handleLogin}>
        <div className='absolute z-1 top-[380px] flex flex-col'>
            <label className='email font-medium text-sm text-[#444444]'>email</label>
            <input className='rounded-lg bg-[#F2F2F2] w-80 h-[50px] p-4' type="text" placeholder='yourmail@mail.com' value={email} onChange={(e)=> setEmail(e.target.value)} /><br />
            <label className='password font-medium text-sm text-[#444444]'>password</label>
            <input className='rounded-lg bg-[#F2F2F2] w-80 h-[50px] p-4' type='password' placeholder='your password' value={password} onChange={(e)=> setPassword(e.target.value)} /><br /><br />
            <button type='sumit' className="login text-[#FFFFFF] text-lg  bg-[#4CAD73] w-80 h-12 rounded-lg">Login</button>
        </div>
        </form>
    </div>
  )
}
