import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { CheckCircle, Pencil, XCircle } from '@phosphor-icons/react'
import { Container, EditButton, ProductImage } from './styles'
import { theme } from '../../../styles/theme'
import { formatPrice } from '../../../utils/formatPrice'
import { useNavigate } from 'react-router-dom'

export function Products() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function LoadProducts() {
      const { data } = await api.get('/products')
      setProducts(data)
    }
    LoadProducts()
  }, [])

  function IsOffer(offer){
    if(offer){
      return <CheckCircle size={25} color={theme.colors.success} />
    } else{
      return <XCircle size={25} color={theme.colors.lightred} />
    }

  }

  function EditProduct(product){
    navigate('/admin/editproducts', { state: {product} })

  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#333333' }}>
            <TableRow>
              <TableCell
                sx={{ color: `${theme.colors.light}`, fontWeight: 600 }}
              >
                Nome
              </TableCell>
              <TableCell
                sx={{ color: `${theme.colors.light}`, fontWeight: 600 }}
                align="center"
              >
                Preço
              </TableCell>
              <TableCell
                sx={{ color: `${theme.colors.light}`, fontWeight: 600 }}
                align="center"
              >
                Produto em Oferta
              </TableCell>
              <TableCell
                sx={{ color: `${theme.colors.light}`, fontWeight: 600 }}
                align="center"
              >
                Imagem
              </TableCell>
              <TableCell
                sx={{ color: `${theme.colors.light}`, fontWeight: 600 }}
                align="center"
              >
                Editar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: `${theme.colors.darktext}` }}>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  sx={{ color: `${theme.colors.light}`, fontWeight: 600, fontSize: '18px' }}
                  component="th"
                  scope="row"
                >
                  {product.name}
                </TableCell>
                <TableCell
                  sx={{ color: `${theme.colors.light}`, fontWeight: 600, fontSize: '18px' }}
                  align="center"
                >
                  {formatPrice(product.price) }
                </TableCell>
                <TableCell
                  sx={{ color: `${theme.colors.light}`, fontWeight: 600 }}
                  align="center"
                >
                  {IsOffer(product.offer)}
                </TableCell>
                <TableCell
                  sx={{ color: `${theme.colors.light}`, fontWeight: 600 }}
                  align="center"
                >
                  <ProductImage src={product.url} />
                </TableCell>
                <TableCell
                  sx={{ color: `${theme.colors.light}`, fontWeight: 600 }}
                  align="center"
                >
                  <EditButton onClick={() => EditProduct(product)}>
                    <Pencil />
                  </EditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
