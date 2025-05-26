# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Frontend React - Proyecto Integrador

Este es el frontend de una aplicación desarrollada con **React + Vite**, siguiendo una arquitectura modular y limpia. Está diseñado para conectarse a un backend RESTful construido con **Spring Boot**.

## 🚀 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [Node.js](https://nodejs.org/) v18+

## 📦 Dependencias instaladas

```bash
npm install axios react-router-dom

 📁 Estructura base del frontend (React + Clean Architecture)

src/
├── app/                  # Configuración principal (router, contextos, etc.)
│   ├── router.jsx
│   ├── App.jsx
│   └── main.jsx
├── features/             # Casos de uso agrupados por dominio (User, Auth, etc.)
│   └── user/
│       ├── components/   # Componentes UI relacionados al dominio
│       ├── pages/        # Páginas completas del dominio
│       ├── services/     # Llamadas a APIs externas (infraestructura)
│       ├── application/  # Lógica de negocio / casos de uso
│       ├── domain/       # Interfaces, modelos y entidades
│       └── index.ts      # Punto de entrada del módulo
├── shared/               # Recursos reutilizables en toda la app
│   ├── components/       # Botones, inputs, layouts, etc.
│   ├── hooks/            # Custom hooks compartidos
│   ├── utils/            # Funciones utilitarias
│   └── constants/        # Constantes globales
├── styles/               # Estilos globales
└── assets/               # Imágenes, íconos, fuentes
