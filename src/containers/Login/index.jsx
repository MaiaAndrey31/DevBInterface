import { useState } from 'react'
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Link,
  
  Background
} from './style'
import {Button} from '../../components/Button'
import Logo from '../../assets/LogoMonster2.png'
import Fire from '../../assets/fireVid2.mp4'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement login logic here
    console.log('Login attempt with:', { email, password })
  }

  return (
    <Container>
      <LeftContainer>
        <Background>
          <video loop autoPlay muted className="conteudo-background ">
            <source src={Fire} />{' '}
          </video>
        </Background>
        <img src={Logo} alt="Logo Monster Burguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Bem vindo ao <span>MONSTER </span>
          <span className='burger'>BURGER</span>
          <br />
          Acesse com seu <span>e-mail</span> e<span> senha</span>
        </Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputContainer>
          
          <Button type="submit">Entrar</Button>
        </Form>
        <Link as="span" onClick={() => console.log('Sign up clicked')}>
          Não possui conta? Clique Aqui!
        </Link>
      </RightContainer>
    </Container>
  )
}
