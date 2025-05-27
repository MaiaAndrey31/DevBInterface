# DevBurguer - Interface Web

Bem-vindo ao DevBurguer, uma aplicação web moderna para gerenciamento de pedidos de um restaurante de hambúrgueres. Desenvolvida com React e Vite, esta interface oferece uma experiência completa para clientes e administradores.

## 🚀 Funcionalidades

- 🍔 Catálogo de produtos com categorias
- 🛒 Carrinho de compras integrado
- 💳 Pagamento via Stripe
- 👨‍💼 Área administrativa
- 🔄 Interface responsiva e moderna
- 🔒 Autenticação de usuários
- 📱 Design responsivo para todos os dispositivos

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - React 18
  - Vite
  - Styled Components
  - Material-UI (MUI)
  - React Hook Form + Yup para validações
  - React Router DOM para navegação
  - React Multi Carousel para exibição de produtos
  - Axios para requisições HTTP
  - React Toastify para notificações
  - Stripe para processamento de pagamentos

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Chaves de API do Stripe (opcional para desenvolvimento local)

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositório>
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd DevBurguerInterface/DevBInterface
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   VITE_API_URL=sua_url_da_api
   VITE_STRIPE_PUBLIC_KEY=sua_chave_publica_do_stripe
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O projeto estará disponível em `http://localhost:5173`

## 📦 Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento
- `build`: Gera a versão de produção
- `preview`: Previsualiza a build de produção localmente
- `lint`: Executa a análise de código

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.
```

The app will be available at `http://localhost:3000` (or the port Vite assigns).

### Main Routes

- `/` - Home page displaying categories and offers.
- `/login` - Login page for user authentication.
- `/cadastro` - Registration page for new users.

## Available Scripts

- `dev` - Starts the development server.
- `build` - Builds the app for production.
- `preview` - Previews the production build locally.
- `lint` - Runs ESLint to check code quality.

## License

This project does not specify a license.
