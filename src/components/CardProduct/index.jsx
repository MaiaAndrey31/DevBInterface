import PropTypes from "prop-types"
import { CardImage, Container } from "./styles"
import { CartButton } from "../index"
import useCart from '../../hooks'

export function CardProduct({product}){
    const {addToCart} = useCart()
    return (
        <Container>
            <CardImage src={product.url} alt={product.name}/>
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
            <CartButton onClick={() => addToCart(product)}></CartButton>
        </Container>
    )
}



CardProduct.propTypes = {
    product: PropTypes.object,
}