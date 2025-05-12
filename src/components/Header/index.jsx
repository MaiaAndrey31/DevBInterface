import { theme } from '../../styles/theme'
import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
  Content
} from './styles'
import { UserCircle, ShoppingCart } from '@phosphor-icons/react'
import { useNavigate, useResolvedPath } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'

export function Header() {
  const navigate = useNavigate()
  const { pathname } = useResolvedPath()
  const { logout, userInfo } = useUser()

  function LogoutUser() {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to={'/'} $isActive={pathname === '/'}>
              Home
            </HeaderLink>
            <hr></hr>
            <HeaderLink to={'/cardapio'} $isActive={pathname === '/cardapio'}>
              Cardapio
            </HeaderLink>
          </div>
        </Navigation>

        <Options>
          <Profile>
            <UserCircle color={theme.colors.primary} size={45} />

            <div>
              <p>
                Olá, <span>{userInfo?.name || 'Visitante'}</span>
              </p>
              <Logout onClick={LogoutUser}>Sair</Logout>
            </div>
          </Profile>

          <LinkContainer>
            <HeaderLink to={'/carrinho'}>
              <ShoppingCart color={theme.colors.primary} size={38} />
              Carrinho
            </HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  )
}
