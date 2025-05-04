import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
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
import {api} from '../../services/api'

export default function Register() {


  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório'),
      password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Digite uma Senha'),
      confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas não são iguais').required('Confirme sua senha')
    })
    .required()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })
  
  const onSubmit = async (data) => {
    
    await toast.promise(api.post('/users', {
      name: data.name,
      email: data.email,
      password: data.password
    }),
    {
      pending: 'Verificando seus dados de Login ⏳',
      success: 'Cadastro feito com sucesso! ✅',
      error: 'Ops algo deu errado, tente novamente! ⛔'
    }
  ) 

    
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
          Criar Conta
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
            <label >Nome</label>
            <input
              {...register('name')}
              type="text"
              
            />
            <p>{errors?.name?.message}</p>
          </InputContainer>
          <InputContainer>
            <label >Email</label>
            <input
              {...register('email')}
              type="email"
              
            />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label >Senha</label>
            <input
              {...register('password')}
              type="password"
              
            />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <InputContainer>
            <label >Confirme sua Senha</label>
            <input
              {...register('confirmPassword')}
              type="password"
              
            />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link >
          Já possui conta? Faça Login Aqui!
        </Link>
      </RightContainer>
    </Container>
  )
}
