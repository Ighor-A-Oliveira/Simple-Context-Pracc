/* eslint-disable no-unused-vars */
import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartPaymentCard({product}) {
  const title = product.title
  const price = product.price
  const quantity = product.quantity
  const {incrementItemByOne, decrementItemByOne} = useCart()
  return (
    <div className='h-[100px] w-[700px] bg-black m-[15px] px-[10px] text-white flex justify-between items-center rounded-md' key={product.id}>
      <h1 className='w-[200px]'>{title}</h1>
      <h1 className='w-[150px]'>R${price}</h1>
      <div className='flex items-center w-[150px]'>
        <button className='text-xl w-[28px] h-[28px] hover:bg-gray-600 rounded-full p-0'
          onClick={() => decrementItemByOne(product)}
        >
          -
        </button>
        <h1 className='mx-[15px]'>{quantity}</h1>
        <button className='text-xl w-[28px] h-[28px] hover:bg-gray-600 rounded-full p-0'
          onClick={() => incrementItemByOne(product)}
        >
          +
        </button>
      </div>
      <h1 className='justify-self-start'>Cost of items: R${(quantity*price).toFixed(2)}</h1>
    </div>
  )
}
