# 💼 Portfolio Personal

Portfolio web profesional desarrollado con React y Vite, diseñado para mostrar proyectos, habilidades y experiencia como desarrollador.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🎨 Interfaz diseñada con Tailwind CSS
- 📱 Totalmente adaptable a dispositivos móviles
- 🎯 Sección de proyectos destacados
- 📧 Formulario de contacto funcional
- ⚡ Rendimiento optimizado con Vite
- 🎭 Iconos personalizados con Lucide React y React Icons

## 🛠️ Tecnologías

- **Frontend:**
  - React 19.2
  - Vite 7.2
  - Tailwind CSS 4.1
  
- **Herramientas:**
  - ESLint (linting)
  - Lucide React (iconos)
  - React Icons
  - Resend (envío de emails)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/portfolio.git
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## 📁 Estructura del Proyecto

```
Portfolio/
├── api/              # API endpoints
│   └── contact.js    # Endpoint de contacto
├── public/           # Recursos públicos
│   ├── images/       # Imágenes del portfolio
│   └── logos/        # Logos y assets
├── src/
│   ├── components/   # Componentes React
│   │   ├── GenericComponents/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProyectCard.jsx
│   │   └── HomeComponets/
│   │       ├── About.jsx
│   │       ├── Contact.jsx
│   │       ├── Hero.jsx
│   │       └── Proyectos.jsx
│   ├── data/         # Datos del portfolio
│   │   └── protectosData.js
│   ├── pages/        # Páginas
│   │   └── Inicio.jsx
│   ├── routes/       # Configuración de rutas
│   │   └── routesConfig.jsx
│   ├── styles/       # Estilos globales
│   │   └── globals.css
│   └── main.jsx      # Punto de entrada
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub
