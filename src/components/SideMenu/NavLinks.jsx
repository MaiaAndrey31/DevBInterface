import { List, ListPlus, Receipt } from "@phosphor-icons/react"
import { theme } from "../../styles/theme"

export const navLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/orders',
        icon : <Receipt size={32} color={theme.colors.light} />

    },
    {
        id: 2,
        label: 'Produtos',
        path: '/admin/products',
        icon : <List size={32} color={theme.colors.light} />

    },
    {
        id: 3,
        label: 'Novo Produto',
        path: '/admin/newproduct',
        icon : <ListPlus size={32} color={theme.colors.light} />

    },
    

]