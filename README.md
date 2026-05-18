Automação E2E com Cypress + BDD

Projeto de automação de testes utilizando Cypress + Cucumber (BDD) com foco em:

✅ Testes de API
✅ Testes de UI
✅ Dados dinâmicos
✅ Estrutura escalável

Sistema testado:
https://automationexercise.com

Tecnologias utilizadas:

Cypress
Cypress Cucumber Preprocessor
JavaScript (ES6)
Node.js
Page Object Model (POM)
API Testing (cy.request)
Dados dinâmicos (Date.now())


Estrutura do Projeto:

cypress/
│
├── e2e/
│   └── back-end/
│       ├── criarUsuario.feature
│       └── fluxoCompleto.feature
│
├── support/
│   ├── pages/
│   │   ├── API/
│   │   │   └── criarUsuario.api.js
│   │   ├── cadastroCompleto.page.js
│   │   ├── carrinho.page.js
│   │   ├── portal.page.js
│   │   └── produto.page.js
│   │
│   ├── step-definitions/
│   │   ├── cadastroUsuario.cy.js
│   │   ├── criarUsuario.cy.js
│   │   ├── portalAutomation.cy.js
│   │   └── produto.cy.js
│   │
│   ├── commands.js
│   └── e2e.js
│
├── plugins/
│   └── file-tasks.js
│
├── fixtures/
├── screenshots/
├── videos/
└── cypress.env.json

⚙️ Pré-requisitos

Node.js (>= 16)
npm (>= 7)

🚀 Como executar o projeto
🔹 Instalar dependências:
npm install

🔹 Executar modo headless:
npx cypress run

✅ Funcionalidades automatizadas

🔹 API

Criação de usuário:
POST /api/createAccount

Validações:
Status HTTP
responseCode
message
Estrutura da resposta


🔹 UI

Login com usuário criado dinamicamente
Navegação até produto
Seleção do produto Men Tshirt
Captura de:
Nome
Preço

Adicionar item ao carrinho
Validação de:
Nome do produto
Preço
Consistência entre telas

🎲 Dados dinâmicos

✅ Evita duplicidade
✅ Boa prática


Autora:
Clarice Oliveira
