## 📚 Aprendizado

Este projeto faz parte do meu aprendizado em React Native. 
Para entender a diferença entre React e React Native, 
confira meu repositório de estudo:
[React vs React Native](https://github.com/youssuf-ops/React-React-Native)



# 🚀 UsedCard - React Native App

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

> Um aplicativo React Native simples e elegante para exibir informações de usuários

## ✨ Funcionalidades

- ✅ Carregar informações de usuário com um clique
- ✅ Exibir dados formatados (ID, Nome, Idade, Status, Perfil, Email)
- ✅ Estado de loading durante o carregamento
- ✅ Limpar dados do usuário
- ✅ Tipagem forte com TypeScript
- ✅ Design limpo e responsivo

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **TypeScript** - Tipagem estática
- **Expo** - Plataforma para desenvolvimento React Native
- **React Hooks** - Gerenciamento de estado

## 📂 Estrutura do Projeto
UsedCard/
├── src/
│ ├── components/
│ │ ├── LoadButton.tsx # Botão customizado
│ │ ├── UserCard.tsx # Componente principal
│ │ └── UserInfo.tsx # Exibição dos dados
│ └── types/
│ ├── user.enum.ts # Enum dos perfis
│ ├── user.type.ts # Types auxiliares
│ └── user.interface.ts # Interface do User
├── App.tsx # Ponto de entrada
├── package.json
├── tsconfig.json
└── README.md 


## 🚀 Como Executar

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- Expo CLI

### Instalação

```bash
# Clone este repositório
git clone https://github.com/youssuf-ops/UsedCard.git

# Acesse a pasta do projeto
cd UsedCard

# Instale as dependências
npm install

# Inicie o projeto
npm start

# Execute no Android
npm run android

# Execute no iOS
npm run ios

# Execute no Web
npm run web

🎯 Como Usar
Ao abrir o aplicativo, você verá o User Card

Clique no botão "Carregar Usuário"

Aguarde o loading (1 segundo)

Os dados do usuário serão exibidos

Clique em "Limpar" para remover os dados
interface User {
  id: number;
  name: string;
  age: number;
  email?: string;
  status: UserStatus;  // "ativo" | "inativo" | "pendente" | "bloqueado"
  role: UserRole;      // ADMIN | USER | MANAGER | GUEST
}

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MANAGER = "manager",
  GUEST = "guest"
}

🤝 Contribuição
Fork o projeto

Crie sua branch (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📝 Licença
Este projeto está sob a licença MIT.

👨‍💻 Autor
Youssuf

GitHub: @youssuf-ops

<div align="center"> Feito com ❤️ por Youssuf <br> ⭐ Se gostou, deixe uma estrela! ⭐ </div> ``
