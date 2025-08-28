import React from 'react'
import { getProductList } from '../data/CartProducts'
import CartProductCard from './CartProductCard'
import { useCart } from '../context/CartContext'
import CartPaymentCard from './CartPaymentCard'

export default function Cart() {
    const {cartItems, totalCostOfCart,isDark, setIsDark} = useCart()
    console.log(isDark)

  return (
    <div className={`${isDark ? 'dark' : 'light'}`}>
        <nav className='bg-gray-500 h-[50px] text-white fixed w-full flex items-center dark:bg-black'>
            <h1 className='text-2xl py-2 ml-[50px]'>Store</h1>
            <div className='text-white text-xl max-h-[40px] ml-[300px] p-2 rounded-md hover:bg-gray-400 cursor-pointer dark:bg-black dark:text-white dark:hover:bg-gray-500'
                onClick={() => setIsDark(!isDark)}
            >
                {isDark ? ("Apply Light Mode") : ("Apply Dark Mode")}
            </div>
        </nav>
        <main className='flex pt-[50px] dark:bg-gray-500'>
            {/* this part is the store front with the items */}
            <div className='flex flex-wrap gap-1 w-[50%] h-[500px] mt-[25px]'>
                {getProductList().map((product) => {
                    return <CartProductCard key={product.id} product={product}/>
                })}
            </div>
            <div className='bg-gray-100 dark:bg-gray-800 dark:text-white w-[50%] h-screen flex flex-col items-start justify-start'>
                {cartItems.length  > 0 ? 
                    (
                        <>
                            {cartItems.map(item => {
                                return <CartPaymentCard key={item.id} product={item}/>
                            })}
                            <h1 className='p-[50px] m-[15px] bg-gray-300 dark:bg-gray-700 text-2xl rounded-md'>Total Cost of Cart: R${totalCostOfCart().toFixed(2)}</h1>
                        </>

                    )
                :
                    (
                        <h1 className='p-[25px] m-[10px] transition-transform ease-in-out'>Cart is empty</h1>
                    )
                }
            </div>
        </main>

    </div>
  )
}
