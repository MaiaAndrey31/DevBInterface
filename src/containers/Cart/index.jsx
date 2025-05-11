import Logo from '../../assets/LogoMonster2.png'
import { Banner, Container, Content, Title } from './styles'


export function Cart(){

    return (

        <Container>
           <Banner >
            <img src={Logo} alt="logo" />
           </Banner>
           <Title >Checkout - Pedido</Title>
           <Content>
            {/* <CartItems />
            <CartResume/> */}
           </Content>
        </Container>
    )
}