import { useCart } from '../../hooks/CartContext'
import { theme } from '../../styles/theme'
import { formatPrice } from '../../utils/formatPrice'
import { Table } from '../index'
import { ButtonGroup, EmptyCart, ProductImage, TotalPrice } from './styles'
import { Trash } from '@phosphor-icons/react'

export function CartItems() {
  const { increaseProduct, decreaseProduct, cartProducts, deleteProduct } =
    useCart()

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt="" />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <TotalPrice>
                  {formatPrice(product.quantity * product.price)}
                  <Trash
                    className="trash"
                    onClick={() => deleteProduct(product.id)}
                    size={32}
                    weight="fill"
                    color={theme.colors.error}
                  />
                </TotalPrice>
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <EmptyCart>Carrinho Vazio</EmptyCart>
        )}
      </Table.Body>
    </Table.Root>
  )
}
