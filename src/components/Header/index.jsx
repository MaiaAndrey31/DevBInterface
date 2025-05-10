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

export function Header() {
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>Cardapio</HeaderLink>
          </div>
        </Navigation>

        <Options>
          <Profile>
            <UserCircle color={theme.colors.primary} size={38} />

            <div>
              <p>
                Olá, <span>Andrey</span>
              </p>
              <Logout>Sair</Logout>
            </div>
          </Profile>

          <LinkContainer>
            <ShoppingCart color={theme.colors.primary} size={38} />
            <HeaderLink>Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  )
}
