import React from 'react'
import { AddProducts } from '../Components/AddProducts'
import { ShowProducts } from '../Components/ShowProducts'
import { signOut } from 'firebase/auth'
import { auth } from '../database/Firebase'



export const Products = () => {
  return (
    <div>
        <ShowProducts />
        <AddProducts />
    </div>
  )
}
