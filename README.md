📝 Descrição
Aplicação web desenvolvida para o desafio técnico de Desenvolvedor(a) Júnior Frontend. Consome uma API pública para exibir uma listagem de usuários com funcionalidades de paginação, busca e visualização de detalhes.

🚀 Funcionalidades
Listagem paginada de usuários (6 por página)

Visualização de detalhes do usuário em rota separada

Filtro de busca por nome (processamento local)

Layout responsivo para mobile e desktop

Indicador de carregamento durante requisições

🛠️ Tecnologias Utilizadas
⚡ Vite (React + TypeScript)

🎨 TailwindCSS (estilização)

🚦 React Router DOM (navegação)

🔄 Context API (gerenciamento de estado)

📦 Axios (requisições HTTP)

▶️ Como Executar
Pré-requisitos
Node.js (v18+)

npm (v9+) ou yarn

Instalação
bash
# Clone o repositório
git clone https://github.com/erickken/ApiWeb.git

# Acesse a pasta do projeto
cd paciente360

# Instale as dependências
npm install

# Execute o projeto
npm run dev
🕒 Tempo de Desenvolvimento
Tempo estimado: 3 horas

Configuração inicial: 30 minutos

Implementação das funcionalidades: 2 horas

Ajustes de estilo e responsividade: 30 minutos

📸 Demonstração
UserDetails
<img width="658" height="701" alt="image" src="https://github.com/user-attachments/assets/4cc52021-a50f-49c9-9a4d-e90988ef50c2" />

UserList
<img width="606" height="867" alt="image" src="https://github.com/user-attachments/assets/399359c8-8cf6-463f-8347-32e14b99ea14" />


📚 Decisões Técnicas
Estrutura de Pastas:

text
src/
├── components/
├── context/
├── hooks/
├── pages/
├── services/
└── types/
Gerenciamento de Estado:

Optei por Context API por ser suficiente para a complexidade atual

Criado um UserContext para compartilhar o estado da listagem

Estilização:

TailwindCSS para agilidade no desenvolvimento

Media queries para responsividade

API:

Utilização da Random User API

Implementado cache básico para evitar requisições repetidas

✅ Requisitos Cumpridos
Listagem paginada

Tela de detalhes

Filtro de busca

Responsividade

Código organizado e tipado


