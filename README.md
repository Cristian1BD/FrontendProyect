
# FrontendProject

Este proyecto es una aplicación frontend desarrollada con **React**, **Vite**, **TypeScript** y **TailwindCSS**, que se conecta a un backend desarrollado en **Spring Boot (Java)**. Utiliza **React Router DOM** para el manejo de rutas y tiene integración con un servicio de chatbot mediante **Gemmini**.

---

## 🛠️ Tecnologías y Herramientas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Spring Boot (Java)](https://spring.io/projects/spring-boot)
- [Gemmini](https://www.gemmini.ai/) (Chatbot)
- `.env` para variables de entorno (local / producción)

---

## 📁 Estructura del Proyecto

```
src/
├── assets/                        # Archivos estáticos
├── components/
│   ├── ComponentesForEstudiante/ # Componentes específicos para el estudiante
│   ├── ComponentesPagInicio/     # Componentes de la página de inicio
│   ├── ComponentesInicio/
│   ├── ComponentsProtectdRoute/  # Rutas protegidas
│   └── Layout/                   # Layout general
├── context/                      # Context API
├── hooks/                        # Custom hooks
├── pages/                        # Páginas principales
├── services/
│   ├── PaginaInicio/
│   ├── PaginaLogin/
│   ├── ServicesGemmi/            # Servicio para chatbot con Gemmini
│   └── EstudianteService.ts      # Servicio para lógica del estudiante
├── App.tsx                       # Componente raíz
├── i18next.ts                    # Configuración de i18n
├── main.tsx                      # Punto de entrada principal
├── vite-env.d.ts                 # Tipado para Vite
```

---

## 🚀 Despliegue

### Local

1. Clona el repositorio
2. Crea un archivo `.env` con las variables necesarias para el entorno local:
   ```env
   VITE_BACKEND_URL=http://localhost:8080
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta la app:
   ```bash
   npm run dev
   ```

### Producción

El proyecto está desplegado como una **vista estática**. Se utiliza Render para el hosting y se conecta al backend de Spring Boot.

---

## 🌐 Navegación

Se utiliza `react-router-dom` para manejar las rutas de las páginas y los componentes.

---

## 💬 Chatbot

El chatbot se integra con **Gemmini** mediante un servicio dedicado (`ServicesGemmi`) y permite interactuar con los usuarios desde el frontend.

---

## 📦 Scripts Útiles

```bash
npm run dev        # Iniciar el servidor de desarrollo
npm run build      # Compilar para producción
npm run preview    # Previsualizar la build
```

---
