import React, { useEffect, useState } from 'react'
import { database } from '../database/Firebase'
import ShopCars from "../assets/shopcars.png"
import { ref as dbRef , onValue } from 'firebase/database'
import Prev from "../assets/prev2.png"
import Search from "../assets/search.png"
import Vegetables from "../assets/vegetables.png"
import Fruits from "../assets/fruits.png"
import Meat from "../assets/meat.png"
import Eggs  from "../assets/eggs.png"
import Drinks  from "../assets/drinks.png"
import Bakery from "../assets/bakery.png"


export const ShowProducts = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const productsRef = dbRef(database, 'Products');
      
    
        // obtenerProductos()
    
        const unsubscribe = onValue(productsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const productsArray = Object.keys(data).map((key) => ({
              id: key, ...data[key],
            }))
            setProducts(productsArray);
          } else {
            setProducts([]);
          }
        });
        return () => unsubscribe();
      }, []);
      const filteredProducts = products.filter((product) =>
        product.username.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <div className='p-3 w-screen h-screen'>
        <div className='flex justify-between items-center relative pb-8'>
        <img src={Prev} alt="" className='w-6 h-6' />
        <input className='rounded-lg w-[17rem] h-8 text-sm leading-3 bg-[#F2F2F2] text-[#737373] px-2' type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder='     Search for fruits, vegetables, groce...' />
        {search.length === 0 && (
            <img className='absolute z-1 left-10' src={Search} alt="" />
        )}
        <img src={ShopCars} alt="" className='w-5 h-5' />
        </div>
        <div className='flex w-full pb-3'>
          <button className='w-[76px] h-[85px] flex flex-col items-center'>
            <div className='w-[54px] h-[54px] flex flex-col items-center justify-center rounded-2xl bg-[#51BC7D33]'>
              <img src={Vegetables} alt="" />
            </div>
            <p className='name text-xs text-[#333333]'>Vegetables</p>
          </button>
          <button className='w-[76px] h-[85px] flex flex-col items-center'>
            <div className='w-[54px] h-[54px] flex flex-col items-center justify-center rounded-2xl bg-[#51BC7D33]'>
              <img src={Fruits} alt="" />
            </div>
            <p className='name text-xs text-[#333333]'>Fruits</p>
          </button>
          <button className='w-[76px] h-[85px] flex flex-col items-center'>
            <div className='w-[54px] h-[54px] flex flex-col items-center justify-center rounded-2xl bg-[#51BC7D33]'>
              <img src={Meat} alt="" />
              <img src={Eggs} alt="" />
            </div>
            <p className='name text-xs text-[#333333]'>Meat & Eggs</p>
          </button>
          <button className='w-[76px] h-[85px] flex flex-col items-center'>
            <div className='w-[54px] h-[54px] flex flex-col items-center justify-center rounded-2xl bg-[#51BC7D33]'>
              <img src={Drinks} alt="" />
            </div>
            <p className='name text-xs text-[#333333]'>Drinks</p>
          </button>
          <button className='w-[76px] h-[85px] flex flex-col items-center'>
            <div className='w-[54px] h-[54px] flex flex-col items-center justify-center rounded-2xl bg-[#51BC7D33]'>
              <img src={Bakery} alt="" />
            </div>
            <p className='name text-xs text-[#333333]'>Bakery</p>
          </button>
        </div>
        <div className=' w-full h- flex-wrap flex gap-3 justify-center top-[300px] pt-5 border-t border-[#BDBDBD]'>
        {
          filteredProducts.length > 0 ? 
          (filteredProducts.map((product) => (
            <div className='bg-[#FFFFFF] w-40 h-52 rounded-xl' key={product.id}>
              <img className='w-full h-[120px] rounded-t-xl' src={product.image} alt="" />
              <div className='p-2 info rounded-b-xl'>
                <p className='leading-7 font-semibold text-[#333333] '>{product.username}</p>
                <p className='font-bold text-[#4CAD73]'>{product.price} <span className='text-[#828282] text-xs font-extralight'>{product.quantity}</span></p>
                <p className='font-light text-[#BDBDBD] line-through text-sm'>{product.description}</p>
              </div>
            </div>
          ))) : (
            <p>No se ha encontrado nada con ese nombre</p>
          )
        }
      </div>
    </div>
  )
}