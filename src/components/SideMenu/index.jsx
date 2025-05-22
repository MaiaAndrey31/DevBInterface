import { navLinks } from './NavLinks'
import Logo from '../../assets/LogoMonster2.png'
import { SignOut } from '@phosphor-icons/react'
import { Container, Footer, NavLink, NavLinkContainer } from './styles'
import { useUser } from '../../hooks/UserContext'
import { theme } from '../../styles/theme'
import { useResolvedPath } from 'react-router-dom'

export function SideMenu() {
  const { logout } = useUser()
  const { pathname } = useResolvedPath()

  return (
    <Container>
      <img src={Logo} alt=" logo monster burguer" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.path} $isActive={pathname === link.path}>
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOut size={32} color={theme.colors.light} />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  )
}
