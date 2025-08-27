import React from 'react'
import { getProductList } from '../data/CartProducts'
import CartProductCard from './CartProductCard'
import { useCart } from '../context/CartContext'
import CartPaymentCard from './CartPaymentCard'

export default function Cart() {
    const {cartItems, totalCostOfCart} = useCart()
    console.log(cartItems)

  return (
    <div>
        <nav className='bg-gray-500 h-[50px] text-white fixed w-full'>
            <h1 className='text-2xl py-2 ml-[50px]'>Store</h1>
        </nav>
        <main className='flex pt-[50px]'>
            {/* this part is the store front with the items */}
            <div className='flex flex-wrap gap-1 w-[50%] h-[500px] mt-[25px]'>
                {getProductList().map((product) => {
                    return <CartProductCard key={product.id} product={product}/>
                })}
            </div>
            <div className='bg-gray-100 w-[50%] h-screen flex flex-col items-start justify-start'>
                {cartItems.length  > 0 ? 
                    (
                        <>
                            {cartItems.map(item => {
                                return <CartPaymentCard key={item.id} product={item}/>
                            })}
                            <h1 className='p-[50px] m-[15px] bg-gray-300 text-2xl rounded-md'>Total Cost of Cart: R${totalCostOfCart().toFixed(2)}</h1>
                        </>

                    )
                :
                    (
                        <h1>Cart is empty</h1>
                    )
                }
            </div>
        </main>

    </div>
  )
}
