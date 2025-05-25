import { Row } from './row.jsx'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { api } from '../../../services/api.js'
import { useEffect, useState } from 'react'
import { orderStatusOptions } from './orderStatus.js'
import { Filter, FilterOption } from './styles.js'

export function Orders() {
  const [filteredOrders, setFilteredOrders] = useState([])
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])
  const [activeStatus, setActiveStatus] = useState(0)

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('/orders')

      setOrders(data)
      setFilteredOrders(data)
    }

    loadOrders()
  }, [])

  

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order))

    setRows(newRows)
  }, [filteredOrders])

  function handleStatus(status){
    if(status.id === 0){
      setFilteredOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)

      setFilteredOrders(newOrders)
    }
    setActiveStatus(status.id)

  }

  return (
    <>
    <Filter>
      {orderStatusOptions.map(status =>(
        <FilterOption 
        key={status.id}
        onClick={() => handleStatus(status)}
        $isActive={activeStatus === status.id}
        >
          {status.label}
          </FilterOption>

      ) )}
      
    </Filter>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{background: '#333333'}}>
            <TableCell />
            <TableCell style={{color: 'white', fontWeight: 700, fontSize: '18px'}}>Pedido</TableCell>
            <TableCell style={{color: 'white', fontWeight: 700, fontSize: '18px'}}>Cliente</TableCell>
            <TableCell style={{color: 'white', fontWeight: 700, fontSize: '18px'}}>Data do pedido</TableCell>
            <TableCell style={{color: 'white', fontWeight: 700, fontSize: '18px'}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row
              key={row.orderId}
              row={row}
              orders={orders}
              setOrders={setOrders}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
