import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { onValue, ref as dbRef } from 'firebase/database'
import Zanahoria from "../assets/zanahoria.png"
import Search from "../assets/search.png"
import Message from "../assets/message.png"
import Notification from "../assets/notification.png"
import Vegetables from "../assets/vegetables.png"
import Fruits from "../assets/fruits.png"
import Meat from "../assets/meat.png"
import Eggs  from "../assets/eggs.png"
import Drinks from "../assets/drinks.png"
import Bakery from "../assets/bakery.png"
import Carousel from '../Components/Carousel';
import Next from "../assets/Vector.png"
import { database } from '../database/Firebase'
import House from "../assets/house.png"
import Cora from "../assets/cora.png"
import Shop from "../assets/shop.png"
import Profile from "../assets/profile.png"
import { Link } from 'react-router-dom';

export const Categories = () => {
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const offersRef = dbRef(database, 'Offers');
  

    // obtenerProductos()

    const unsubscribe = onValue(offersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const offersArray = Object.keys(data).map((key) => ({
          id: key, ...data[key],
        }))
        setOffers(offersArray);
      } else {
        setOffers([]);
      }
    });
    return () => unsubscribe();
  }, []);
  // const obtenerProductos = async () => {
  //   const querySnapshot = await getDocs(collection(database, "cities"));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // }

  // const filtrarDatos  = (palabra) => {
  //   const resultados =  products.filter((producto) => producto.username.toLowerCase().includes(palabra.toLowerCase()));
  //   console.log(resultados) ;
  // }

  const filteredProducts = products.filter((product) =>
    product.username.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className='w-full h-auto relative flex flex-col items-center p-4'>
      <div className='absolute z-1 bg-[#4CAD73] w-full h-80 rounded-[3rem] -top-20'></div>
      <div className='absolute z-1 flex top-6 flex-col items-center'>
        <div className='flex'>
          <p className='titulo text-[#FFFFFF]'>Kangsayur</p>
          <img className="w-5 h-5" src={Zanahoria} alt="" />
        </div>
        <div className='flex p-4 items-center justify-between w-screen'>
          <input className='bg-[#FFFFFF] rounded-lg w-60 h-8 text-xs' type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder='    Search for fruits, vegetables, groce...' />
          {/* {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id}>
                <p>{product.username}</p>
              </div>
            ))
          ) : (
            <p>No se ha encontrado nada con ese nombre</p>
          )} */}
          {/* <img onClick={()=>filtrarDatos(search)} className='w-5 h-5 absolute left-56' src={Search} alt="" /> */}
          <img src={Message} alt="" />
          <img src={Notification} alt="" />
        </div>
        <Carousel/>
      </div>
      <div className='absolute p-4 flex flex-col top-[19rem] w-full h-48'>
        <p className='categories text-[#333333] pb-5 font-semibold text-lg'>Categories</p>
        <div className='flex w-full'>
        <button className='w-[76px] h-[76px] flex flex-col items-center'>
            <div className='w-[54px] h-[54px] flex flex-col items-center justify-center rounded-2xl bg-[#51BC7D33]'>
              <img src={Vegetables} alt="" />
            </div>
            <p className='name text-xs text-[#333333]'>Vegetables</p>
          </button>
          <button className='w-[76px] h-[76px] flex flex-col items-center'>
            <div className='w-[54px] h-[54px] flex flex-col items-center justify-center rounded-2xl bg-[#51BC7D33]'>
              <img src={Fruits} alt="" />
            </div>
            <p className='name text-xs text-[#333333]'>Fruits</p>
          </button>
          <button className='w-[76px] h-[76px] flex flex-col items-center'>
            <div className='w-[54px] h-[54px] flex flex-col items-center justify-center rounded-2xl bg-[#51BC7D33]'>
              <img src={Meat} alt="" />
              <img src={Eggs} alt="" />
            </div>
            <p className='name text-xs text-[#333333]'>Meat & Eggs</p>
          </button>
          <button className='w-[76px] h-[76px] flex flex-col items-center'>
            <div className='w-[54px] h-[54px] flex flex-col items-center justify-center rounded-2xl bg-[#51BC7D33]'>
              <img src={Drinks} alt="" />
            </div>
            <p className='name text-xs text-[#333333]'>Drinks</p>
          </button>
          <button className='w-[76px] h-[76px] flex flex-col items-center'>
            <div className='w-[54px] h-[54px] flex flex-col items-center justify-center rounded-2xl bg-[#51BC7D33]'>
              <img src={Bakery} alt="" />
            </div>
            <p className='name text-xs text-[#333333]'>Bakery</p>
          </button>
        </div>
      </div>
      <div className='border-[#BDBDBD] absolute w-full h-auto top-[500px] border-t p-4'>
        <div className='flex w-full justify-between items-center'>
          <p className='categories text-[#333333] font-semibold text-lg'>Special Deal</p>
          <button className='flex items-center w-[74px] justify-between'>
            <p className='text-sm text-[#0EB177] font-semibold'>See more</p>
            <img className='mt-[3px]' src={Next} alt="" />
          </button>
        </div>
        <div className='flex-wrap flex gap-3 justify-center '>
            {offers.map((Offer) => (
          <div className='bg-[#FFFFFF] w-40 h-52 rounded-xl' key={Offer.id}>
            <img className='w-full h-28 rounded-t-xl' src={Offer.image} alt="" />
            <div className='p-2 info rounded-xl'>
              <p>{Offer.username}</p>
              <p>{Offer.price} <span>{Offer.quantity}</span></p>
              <p>{Offer.description}</p>
            </div>
          </div>
        ))
        }
        </div>
      </div>
      <div className='menus fixed bottom-0 w-full h-16 p-8 rounded-2xl bg-[white] flex items-center justify-between'>
      <Link to="/Products">
        <button className='w-9 h-9 border-dashed border-2 border-[#a7a7a7]'>
          <img className='w-[36px]' src={House} alt="" />
        </button>
      </Link>
      <Link to="/Products">
        <button className='w-9 h-9 border-dashed border-2 border-[#a7a7a7]'>
          <img className='w-[36px]' src={Cora} alt="" />
        </button>
      </Link>
      <Link to="/Products">
        <button className='w-9 h-9 border-dashed border-2 border-[#a7a7a7]'>
          <img className='w-[28px] ml-[2px]' src={Shop} alt="" />
        </button>
      </Link>
      <Link to="/Products">
        <button className='w-9 h-9 border-dashed border-2 border-[#a7a7a7]'>
          <img className='w-[24px] ml-1' src={Profile} alt="" />
        </button>
      </Link>
      </div>
    </div>
  )
}
