import { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { useCart } from '../../hooks/CartContext'
import { api } from '../../services/api'
import { formatPrice } from '../../utils/formatPrice'
import { useNavigate } from 'react-router-dom'

import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(1000)
  const navigate = useNavigate()

  const { cartProducts, clearCart } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setFinalPrice(sumAllItems)
  }, [cartProducts])

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price
      }
    })

    try {
      const { data } = await api.post('/create-payment-intent', { products })

      navigate('/checkout', { state: data })
    } catch (err) {
      toast.error('Erro com seu pedido', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
    }

    
  }

  return (
    <div>
      <Container>
        <div className="containerTop">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Itens</p>
          <p className="itemsPrice">{formatPrice(finalPrice)}</p>
          <p className="deliveryTax">Taxa de Entrega</p>
          <p className="taxPrice">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="containerBottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Confirmar</Button>
    </div>
  )
}
