import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rounded from "../assets/divrounded.png"
import Basket from "../assets/fruitbasket.png"
import Apple from "../assets/redapple.png"
import Blueberries from "../assets/blueberries.png"


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel(){
    return (
        <>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-[359px] h-[12rem]"// aca se puede editar el carousell
        >
        <SwiperSlide>
        <div className='w-auto h-auto p-4 -mt-[10px]'>
            <div className='flex bg-[#50d5a6] rounded-2xl'>
            <div className='p-4'>
                <p className='descuento  text-[#FFFFFF] font-semibold pb-1'>Discount</p>
                <p className='valor text-4xl font-semibold pb-1 text-[#FFFFFF]'>25%</p>
                <p className='text-xs text-[#FFFFFF] pb-1'>All Vegetables & Fruits</p>
                <button className='boton bg-[#ffe082] text-[10px] font-medium rounded-full w-20 h-5 text-[#333333]'>See Detail</button>
            </div>
            <div className="relative" >
              <img className='ml-[48px] rounded-r-2xl rounded-t-2xl' src={Rounded} alt="" />
              <img className='absolute top-0 right-0' src={Basket} alt="" />
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-auto h-auto p-4 -mt-[10px]'>
            <div className='flex bg-[#50d5a6] rounded-2xl'>
            <div className='p-4 w-[171px]'>
                <p className='descuento  text-[#FFFFFF] font-semibold pb-1'>Discount for today</p>
                <p className='valor text-4xl font-semibold pb-1 text-[#FFFFFF]'>10%</p>
                <p className='text-xs text-[#FFFFFF] pb-1'>Apples</p>
                <button className='boton bg-[#ffe082] text-[10px] font-medium rounded-full w-20 h-5 text-[#333333]'>See Detail</button>
            </div>
            <div className="relative" >
              <img className='ml-[30px] rounded-r-2xl rounded-t-2xl' src={Rounded} alt="" />
              <img className='absolute top-1 right-1' src={Apple} alt="" />
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-auto h-auto p-4 -mt-[10px]'>
            <div className='flex bg-[#50d5a6] rounded-2xl'>
            <div className='p-4 '>
                <p className='descuento  text-[#FFFFFF] font-semibold pb-1'>Discount</p>
                <p className='valor text-4xl font-semibold pb-1 text-[#FFFFFF]'>20%</p>
                <p className='text-xs text-[#FFFFFF] pb-1'>Blueberries</p>
                <button className='boton bg-[#ffe082] text-[10px] font-medium rounded-full w-20 h-5 text-[#333333]'>See Detail</button>
            </div>
            <div className="relative" >
              <img className='ml-[88px] rounded-r-2xl rounded-t-2xl' src={Rounded} alt="" />
              <img className='absolute top-1 -right-1 w-[170px]' src={Blueberries} alt="" />
            </div>
            </div>
        </div>
        </SwiperSlide>
       </Swiper>
        </>
    )
}