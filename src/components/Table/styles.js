import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${theme.colors.light};
  border-radius: 20px;
`

export const Header = styled.thead``

export const Tr = styled.tr``

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: ${theme.colors.lighttext};
  background-color: ${theme.colors.dark};
  border-bottom: 1px solid ${theme.colors.darktext};
  font-weight: 600;

  &:last-child {
    border-top-right-radius: 20px;
  }
  &:first-child {
    border-top-left-radius: 20px;
  }
`

export const Td = styled.td`
  padding: 16px;
  color: ${theme.colors.dark};
  font-family: 'Lolita One', cursive;
  font-weight: 700;
  line-height: 115%;
`

export const Body = styled.tbody``
