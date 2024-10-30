import React, { useState } from 'react'
import Prev from "../assets/prev.png"
import Cliente  from "../assets/cliente.png"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../database/Firebase'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'// libreria para mensajes de alerta


export const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navegador = useNavigate ()// para redireccionar a otra pagina

  const HandleRegister = (e) => {//recibe el evento de onsumit
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      toast.success('Successfully created!');
      // Signed up 
      const user = userCredential.user;
      // setTimeout(() => {
      //   navegador("/")
      // }, 2000);// esto es para mostrar el mensaje antes de redirigirnos a la pagina principal, esta retrasando la accion de redericcionar
      navegador("/")// redirecciona a la pagina principal
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("no registro" + errorMessage)
      toast.error('ha sucedido un error!' + errorMessage);
      // ..
    });
  }
  return (
    <div className="bg-white w-screen h-screen relative p-5">
      <Toaster/>
        <div className="bg-[#4CAD73] rounded-full w-[37rem] h-[35rem] absolute bottom-[396px] -left-40 z-0">
        </div>
        <Link to="/">
          <button className='absolute z-1 top-5 left-2'>
              <img src={Prev} alt="" />
          </button>
        </Link>
        <p className='Register z-1 absolute text-2xl font-semibold text-[#FFFFFF] top-64 left-4'>Register</p>
        <img className='absolute z-1 top-[70px] left-[182px]' src={Cliente} alt="" />
        <form onSubmit={HandleRegister}>//onsumit es para enviar datos
        <div className='absolute z-1 top-[380px] flex flex-col'>
            <label className='email font-medium text-sm text-[#444444]'>email</label>
            <input className='rounded-lg bg-[#F2F2F2] w-80 h-[50px] p-4' type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='yourmail@mail.com' /><br />
            <label className='password font-medium text-sm text-[#444444]'>password</label>
            <input className='rounded-lg bg-[#F2F2F2] w-80 h-[50px] p-4' type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='your password' /><br /><br />
            <button type='sumit' className="Register text-[#FFFFFF] text-lg  bg-[#4CAD73] w-80 h-12 rounded-lg">Register</button>
        </div>
        </form>
    </div>
  )
}
