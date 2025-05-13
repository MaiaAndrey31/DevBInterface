import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
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
      return { id: product.id, quantity: product.quantity }
    })

    try {
      const { status } = await api.post(
        '/orders',
        { products },

        {
          validateStatus: () => true
        }
      )

      if (status === 200 || status === 201) {
        
        setTimeout(() => {
          navigate('/')
        }, 2000)
        clearCart()
        toast.success('Pedido realizado! ✅')
      } else if (status === 409) {
        toast.error('Falha ao realizar pedido. Tente novamente!')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('🤔 Falaha no Sistema! Tente novamente!')
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
