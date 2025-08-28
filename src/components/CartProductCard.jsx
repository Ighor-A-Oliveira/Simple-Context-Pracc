import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartProductCard({product}) {
    const title = product.title
    const image = product.image
    const price = product.price
    const {addToCart} = useCart()
  return (
    <div className='h-[250px] w-[200px] bg-black flex flex-col mx-[20px] justify-center items-center text-white rounded-md' key={product.id}>
        <h1>{title}</h1>
        <img className='h-[100px] w-[100px] my-[25px]' src={image} alt="" />
        <p>R${price}</p>
        <button className='mt-[15px] bg-gray-600 p-2 rounded-md hover:bg-gray-300 cursor-pointer hover:text-gray-900'
            /* on click add to cart, here it is very important to spread the data inside an object {...product} or to just send the product itself */
            onClick={() => addToCart(product)}
        >
            Add to Cart
        </button>
    </div>
  )
}
