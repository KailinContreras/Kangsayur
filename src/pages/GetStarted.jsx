import React from 'react'
import Zanahoria from "../assets/zanahoria.png"
import Clienta from  "../assets/clienta.png"
import Cliente  from "../assets/cliente.png"
import { Link } from 'react-router-dom'


export const GetStarted = () => {
  return (
    <div className='bg-[#4CAD73] w-screen h-screen relative p-4'>
        <div className="bg-[#62af81] rounded-full w-[37rem] h-[35rem] absolute bottom-[26rem] -left-40 z-0">
        </div>
        <div className="absolute z-1 top-16 left-24 flex justify-center">
            <p className="titulo text-[#FFFFFF] text-[26px]">Kangsayur</p>
            <img className="absolute -right-8 -top-[1px]" src={Zanahoria} alt=""/>
        </div>
        <img className='absolute z-1 top-[140px] left-16 w-[112px]' src={Clienta} alt="" />
        <img className='absolute z-1 top-[134px] left-[178px] w-[130px]' src={Cliente} alt="" />
        <p className='parrafogs absolute z-1 text-lg text-center bottom-56 text-[#FFFFFF] right-1'>Kangsayur is a solution for <span className='font-semibold'>Grocery 
        Shopping</span> every you need</p>
        <Link to="/Categories">
            <button className='bottomgs bg-[#FFFFFF] absolute z-1 text-center w-[328px] bottom-32 h-14 font-semibold text-lg rounded-xl text-[#4CAD73]'>Get Started</button>
        </Link>
    </div>
  )
}
