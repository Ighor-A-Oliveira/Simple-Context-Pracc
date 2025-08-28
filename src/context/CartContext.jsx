/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

//still need to add the logic to remove items from the cart
// need to improve the logic to decrement items from the cart
//need to figure out how the cart quantity can respect the quantity of items in stock so it does no go over it

const CartContext = createContext();

export default function CartProvider({children}) {
    //controls the itens that are in the cart
    const [cartItems, setCartItems] = useState([])
    //controls if the dark mode is on or off
    const [isDark, setIsDark] = useState(false)

    function addToCart(product){
        /* just checking to see if the item is already in the cart */
        const isInTheCart = cartItems.find(item => item.id === product.id )
        /* we check if */
        if(isInTheCart){
            /* if the item is already in the cart we just increment by one */
            incrementItemByOne(product)
        } else {
            /* else we put in the cart and define the quantity as 1 */
            setCartItems(prev => [...prev, {...product, quantity: 1}])
        }
    }

    function incrementItemByOne(product){
        setCartItems(prev => 
                /* we are iterating over the existing data */
                prev.map(
                    /* we check if there is an item with this specific id */
                    item => item.id === product.id 
                    ? 
                        /* if there an item we spread the existing properties and just modify the quantity */
                        {...item, quantity:item.quantity+1}
                    :
                        /* otherwise we just return the item itself */
                        item

                )
            )
    }

    function decrementItemByOne(product) {
    setCartItems(prev =>
        prev.flatMap(item => {
        if (item.id === product.id) {
            if (item.quantity === 1) {
            // remove by not returning it
            return [];
            } else {
            // decrement
            return { ...item, quantity: item.quantity - 1 };
            }
        }
        return item;
        })
    );
    }

    function removeFromCart(product){
        setCartItems((prev) => prev.filter(item => item.id != product.id))
    }

    function totalCostOfCart(){
        
        let totalCost = 0
        cartItems.forEach(cartItem => {
            totalCost+= cartItem.price * cartItem.quantity
        })

        return totalCost
    }


    const value={cartItems, addToCart, isDark, setIsDark, incrementItemByOne, decrementItemByOne, totalCostOfCart}


    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart(){
    return useContext(CartContext)
}
