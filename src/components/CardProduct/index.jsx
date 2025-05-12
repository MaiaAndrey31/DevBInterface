import PropTypes from 'prop-types'
import { CardImage, Container } from './styles'
import { CartButton } from '../index'
import { useCart } from '../../hooks/CartContext'

export function CardProduct({ product }) {
  const { addCart } = useCart()
  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <CartButton onClick={() => addCart(product)}></CartButton>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
