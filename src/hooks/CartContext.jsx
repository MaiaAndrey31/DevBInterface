import { useContext, createContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const addCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

    let newProducInCart = []
    if (cartIndex >= 0) {
      newProducInCart = cartProducts

      newProducInCart[cartIndex].quantity =
        newProducInCart[cartIndex].quantity + 1
      setCartProducts(newProducInCart)
    } else {
      product.quantity = 1
      newProducInCart = [...cartProducts, product]
      setCartProducts(newProducInCart)
    }
    updateLocalStorage(newProducInCart)
  }

  const clearCart = () => {
    setCartProducts([])
    updateLocalStorage([])
  }

  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId)

    setCartProducts(newCart)
    updateLocalStorage(newCart)
  }

  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
    })
    setCartProducts(newCart)
    updateLocalStorage(newCart)
  }

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId)
    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd
      })
      setCartProducts(newCart)
      updateLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }

  const updateLocalStorage = (products) => {
    localStorage.setItem('monsterburguer: cartInfo', JSON.stringify(products))
  }
  useEffect(() => {
    const clientCartData = localStorage.getItem('monsterburguer: cartInfo')
    if (clientCartData) {
      setCartProducts(JSON.parse(clientCartData))
    }
  }, [])
  return (
    <CartContext.Provider
      value={{
        addCart,
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

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
