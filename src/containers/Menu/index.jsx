import { useEffect, useState } from 'react'
import {
  Banner,
  CategoriesMenu,
  CategoryButton,
  Container,
  ProductsContainer
  
} from './styles'
import { api } from '../../services/api'
import { formatPrice } from '../../utils/formatPrice'
import { CardProduct } from '../../components/CardProduct'
import { useLocation, useNavigate } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'

export function Menu() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const navigate = useNavigate()

  const { search } = useLocation()

  const queryParams = new URLSearchParams(search)

  const [selectedCategory, setSelectedCategory] = useState(() => {
    const categoryId = +queryParams.get('category')

    if (categoryId) {
      return categoryId
    } else {
      return 0
    }
  })

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
    }
    async function loadProducts() {
      const { data } = await api.get('/products')

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product
      }))

      setProducts(newProducts)
    }
    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (selectedCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === selectedCategory
      )
      setFilteredProducts(newFilteredProducts)
    }
  }, [products, selectedCategory])
  return (
    <Container>
      <Banner>
        <BackButton />
        <h1>
          O MELHOR
          <br /> HAMBURGUER
          <br /> ESTÁ AQUI!
          <br />
          <span>Iressistível em cada pedaço!</span>
        </h1>
      </Banner>

      <CategoriesMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === selectedCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?category=${category.id}`
                },
                {
                  replace: true
                }
              )
              setSelectedCategory(category.id)
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoriesMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  )
}
