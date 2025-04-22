import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
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
import { Button } from '../../components/Button'
import Logo from '../../assets/LogoMonster2.png'
import Fire from '../../assets/fireVid2.mp4'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })
  
  const onSubmit = (data) => console.log(data)

  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().min(6).required()
    })
    .required()
  

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
          <span className="burger">BURGER</span>
          <br />
          Acesse com seu <span>e-mail</span> e<span> senha</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label >Email</label>
            <input
              {...register('email')}
              type="email"
              
            />
          </InputContainer>
          <InputContainer>
            <label >Senha</label>
            <input
              {...register('password')}
              type="password"
              
            />
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <Link >
          Não possui conta? Clique Aqui!
        </Link>
      </RightContainer>
    </Container>
  )
}
