import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useUser } from '../../hooks/UserContext'
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
import { Button } from '../../components'
import Logo from '../../assets/LogoMonster2.png'
import Fire from '../../assets/fireVid2.mp4'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export  function Login() {
  const navigate = useNavigate()
  const {putUserData} = useUser()

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido!')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('Digite uma Senha')
    })
    .required()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    try {
      const {status, data: userData } = await api.post(
        '/session',
        {
          email: data.email,
          password: data.password
        },
        {
          validateStatus: () => true
        }
      )
      putUserData(userData)


      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/')
        }, 2000)
        toast.success('Olá! Seja Bem Vindo! ✅')
      } else if (status === 409) {
        toast.error('Email ou Senha incorretos! 😔')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('🤔 Falaha no Sistema! Tente novamente!')
    }
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
          <span className="burger">BURGER</span>
          <br />
          Acesse com seu <span>e-mail</span> e<span> senha</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input {...register('email')} type="email" />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input {...register('password')} type="password" />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/cadastro">Não possui conta? Clique Aqui!</Link>
      </RightContainer>
    </Container>
  )
}
