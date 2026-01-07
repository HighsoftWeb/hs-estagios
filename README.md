# Status das OS - Kanban

Sistema de visualização de estágios das Ordens de Serviço em formato Kanban, desenvolvido com Next.js 16, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- Visualização em formato Kanban dos estágios das Ordens de Serviço
- Atualização automática dos dados a cada 30 segundos
- Rota dinâmica baseada no CNPJ: `/{cnpj}`
- Interface responsiva e moderna
- Componentização completa do código
- Tipagem forte com TypeScript

## 📋 Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

## 🎯 Como usar

1. Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

2. Acesse a aplicação:

- Página inicial: `http://localhost:3000`
- Visualização de estágios: `http://localhost:3000/{cnpj}/{codGrupoEstagio}`

Exemplo: `http://localhost:3000/12345678000190/001`

## 📄 Licença

Este projeto é privado e de propriedade da HighSoft.
