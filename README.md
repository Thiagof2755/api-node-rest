# API de Livros

Esta é uma API simples para gerenciar uma coleção de livros. Ele permite listar livros, obter detalhes de um livro específico, adicionar novos livros, atualizar informações de livros existentes e excluir livros da coleção.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose

## Instalação

1. Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.
2. Clone este repositório: `git clone <url-do-seu-repositório>`.
3. Instale as dependências do projeto executando `npm install`.
4. Configure as variáveis de ambiente, incluindo a string de conexão com o banco de dados MongoDB, no arquivo `.env`.
5. Inicie o servidor executando `npm start`.

## Estrutura do Projeto

- `config/dbConnect.js`: Configuração para conectar-se ao banco de dados MongoDB.
- `controllers/LivroController.js`: Controlador para lidar com operações CRUD relacionadas a livros.
- `models/Livros.js`: Definição do modelo de livro utilizando o Mongoose.
- `routes/index.js`: Definição das rotas da API.
- `routes/LivrosRouters.js`: Definição das rotas específicas para operações relacionadas a livros.
- `server.js`: Arquivo principal para iniciar o servidor Express e conectar-se ao banco de dados.

## Uso

- **Listar Livros**: Envie uma solicitação GET para `/livros` para obter uma lista de todos os livros.
- **Obter Livro por ID**: Envie uma solicitação GET para `/livros/:id` para obter detalhes de um livro específico.
- **Adicionar Livro**: Envie uma solicitação POST para `/livros` com os detalhes do livro no corpo da solicitação para adicionar um novo livro.
- **Atualizar Livro**: Envie uma solicitação PUT para `/livros/:id` com os novos detalhes do livro no corpo da solicitação para atualizar um livro existente.
- **Excluir Livro**: Envie uma solicitação DELETE para `/livros/:id` para excluir um livro da coleção.

## Contribuição

Sinta-se à vontade para contribuir para este projeto! Basta fazer um fork do repositório, implementar suas alterações e enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).


