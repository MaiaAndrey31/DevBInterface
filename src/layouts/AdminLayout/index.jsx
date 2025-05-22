import { Outlet, Navigate } from 'react-router-dom'
import { SideMenu } from '../../components'
import { Container } from './styles'

export function AdminLayout() {
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('monsterburguer: userData')
  )

  return isAdmin ? (
    <Container>
      <SideMenu />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" />
  )
}
