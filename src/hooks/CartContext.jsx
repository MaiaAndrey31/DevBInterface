import { useContext, createContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductsInCart = (product) => {}

  const clearCart = (product) => {}

  const deleteProduct = (product) => {}

  const increaseProduct = (productId) => {}

  const decreaseProduct = (productId) => {}

  return (
    <CartContext.Provider
      value={{
        putProductsInCart,
        clearCart,
        deleteProduct,
        increaseProduct,
        decreaseProduct,
        cartProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () =>{
    const context = useContext(CartContext)

    if(!context){
        throw new Error('useCart must be used within a CartProvider')
    } 
    return context
}
