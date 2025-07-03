# 🏆 API Champions League

API completa e eficiente para acessar e manipular dados da UEFA Champions League.  
Proporciona integração com informações detalhadas sobre equipes e jogadores, ideal para plataformas que demandam acesso rápido e confiável a estatísticas atualizadas — suportando uma interface de usuário fluida e responsiva.

---

## ✅ Funcionalidades Atuais

### 📦 Rotas de Jogadores (`/players`)
- `GET /players` → Lista todos os jogadores
- `GET /players/:id` → Retorna jogador por ID
- `POST /players` → Adiciona novo jogador
- `PUT /players/:id` → Atualiza estatísticas do jogador
- `DELETE /players/:id` → Remove jogador

### ⚽ Rotas de Clubes (`/clubs`)
- `GET /clubs` → Lista todos os clubes
- `POST /clubs` → Adiciona novo clube

### 📌 Futuras Rotas Planejadas:
- `GET /clubs/:id`
- `PUT /clubs/:id`
- `DELETE /clubs/:id`

---

## 🧱 Arquitetura

A aplicação segue o padrão de **Arquitetura em Camadas (Layered Architecture)** para facilitar escalabilidade, manutenção e boas práticas de separação de responsabilidades.
```
src/
├── controllers/ # Recebem as requisições e retornam respostas
├── services/ # Contêm as regras de negócio
├── repositories/ # Acesso a dados (JSON)
│ └── db/ # Arquivos: players.json e clubs.json
├── models/ # Interfaces e contratos de dados (TypeScript)
├── routes/ # Definição de rotas da API
├── utils/ # Funções auxiliares (ex: leitura/escrita de arquivos)
└── server.ts # Inicialização da aplicação Express
```

### 🧩 Camadas principais

- **Controller** → Lida com a requisição e envia resposta HTTP  
- **Service** → Aplica a lógica de negócio e validações  
- **Repository** → Lê/escreve os dados nos arquivos JSON  
- **Model** → Define a estrutura dos dados com interfaces  
- **Utils** → Reúne funções utilitárias como leitura e escrita de arquivos  

---

## 🚀 Stacks Utilizadas

- [Node.js](https://nodejs.org/docs/latest/api/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Express](https://www.npmjs.com/package/express)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)
- [CORS](https://www.npmjs.com/package/cors)

---

## 🛠 Como utilizar

### 1. Clone o repositório
```
git clone https://github.com/gustavomob/api-champions-league
cd api-champions-league
```
### 2. Instale as dependências
```
npm install
```
### 3. Inicie o servidor
```
npm run start:dev
```
💾 Dados simulados
Os dados são armazenados localmente em arquivos .json:
```
src/repositories/db/players.json
src/repositories/db/clubs.json
```
📌 Observações
API desenvolvida com foco em aprendizado e organização de código seguindo boas práticas de projetos RESTful.

Pronta para ser expandida com autenticação, testes, banco de dados real e validações mais robustas