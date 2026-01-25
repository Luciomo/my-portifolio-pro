# My Creative Showcase

Este é um portfólio pessoal construído com tecnologias web modernas para exibir projetos, experiências e habilidades. O projeto utiliza uma arquitetura front-end robusta com Vite, React, TypeScript e é estilizado com Tailwind CSS e shadcn/ui.

## 🚀 Demo ao Vivo

[**[Clique aqui para ver a demonstração ao vivo]**](https://luciomo.github.io/my-portifolio-pro/)

*(Substitua `SEU_LINK_AQUI` pela URL do seu site publicado, por exemplo, na Vercel ou Netlify)*

## ✨ Funcionalidades

- **Design Responsivo**: Totalmente adaptável para desktops, tablets e dispositivos móveis.
- **Componentes Reutilizáveis**: Construído com um sistema de componentes modulares e reutilizáveis.
- **Seções Principais**: Inclui seções como Sobre Mim, Experiência, Projetos e Contato.
- **Tema Escuro/Claro**: Suporte para alternância de temas (se aplicável).

## 🛠️ Construído com

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/)
- **Roteamento**: [React Router](https://reactrouter.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Testes**: [Vitest](https://vitest.dev/)

## 🏁 Começando

Siga estas instruções para obter uma cópia do projeto e executá-lo em sua máquina local para desenvolvimento e testes.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [Bun](https://bun.sh/) ou [NPM](https://www.npmjs.com/)

### Instalação

1.  Clone o repositório:
    ```sh
    git clone https://github.com/SEU_USUARIO/my-creative-showcase.git
    ```

2.  Navegue até o diretório do projeto:
    ```sh
    cd my-creative-showcase
    ```

3.  Instale as dependências (você pode usar `bun` ou `npm`):
    ```sh
    bun install
    ```
    ou
    ```sh
    npm install
    ```

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run dev` ou `bun run dev`
  - Inicia o aplicativo em modo de desenvolvimento. Abra [http://localhost:5173](http://localhost:5173) para vê-lo no navegador.

- `npm run build` ou `bun run build`
  - Compila o aplicativo para produção na pasta `dist`.

- `npm run preview` ou `bun run preview`
  - Inicia um servidor local para visualizar a versão de produção (após o `build`).

- `npm run lint` ou `bun run lint`
  - Executa o ESLint para analisar o código em busca de problemas.

- `npm run test` ou `bun run test`
  - Executa os testes uma vez usando o Vitest.

## 🚀 Deploy

A maneira mais fácil de fazer o deploy deste projeto é usando plataformas como:

- [Vercel](https://vercel.com)
- [Netlify](https://www.netlify.com)

Ambas oferecem integração contínua com o GitHub, detectando automaticamente a configuração do Vite e fazendo o deploy a cada `push` para a branch principal.
Mas foi usado o VSCode e o GitHub Actions para versionamento e deploy automático.