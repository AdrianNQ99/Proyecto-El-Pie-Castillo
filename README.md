# Proyecto El Pie Castillo

Bienvenido al proyecto web y backend para **El Pie Castillo**, un restaurante ubicado en Águilas, Murcia, España.

---

## Descripción

Este proyecto incluye:

- **Frontend**: Aplicación React con Material UI para reservas, contacto y presentación del restaurante.
- **Backend**: API REST en Flask para gestionar clientes, reservas y menú, con base de datos SQLite y migraciones.

---

## Estructura del Proyecto

```
Proyecto-El-Pie-Castillo/
│
├── backend/
│   ├── src/
│   │   ├── app.py         # App principal Flask
│   │   ├── models.py      # Modelos SQLAlchemy
│   │   ├── utils.py       # Utilidades
│   │   └── ...            # Otros archivos
│   ├── Pipfile            # Dependencias Python
│   └── instance/          # Base de datos SQLite
│
├── web/
│   ├── src/
│   │   ├── pages/         # Páginas React (Reservas, About, etc.)
│   │   ├── assets/        # Imágenes
│   │   └── ...            # Componentes y utilidades
│   └── package.json       # Dependencias Node.js
│
└── README.md              # Este archivo
```

---

## Instalación y ejecución

### Backend (Flask)

1. Ve a la carpeta backend:
   ```
   cd backend
   ```
2. Instala dependencias:
   ```
   pipenv install
   ```
   o
   ```
   pip install flask flask_sqlalchemy flask_migrate flask_cors
   ```
3. Inicializa la base de datos (si usas migraciones):
   ```
   flask --app src/app db init
   flask --app src/app db migrate
   flask --app src/app db upgrade
   ```
4. Ejecuta el servidor:
   ```
   pipenv run start
   ```
   o
   ```
   flask --app src/app run
   ```

### Frontend (React)

1. Ve a la carpeta web:
   ```
   cd web
   ```
2. Instala dependencias:
   ```
   npm install
   ```
3. Ejecuta la app:
   ```
   npm start
   ```
   Accede a [http://localhost:3000](http://localhost:3000)

---

## Endpoints principales del backend

- `/health` — Estado del servidor
- `/clients` — Gestión de clientes
- `/reservations` — Gestión de reservas (máximo 40 personas por servicio)
- `/menu` — Consulta de menú

---

## Personalización

- Cambia la información del restaurante en `web/src/pages/Reservas.jsx`
- Actualiza imágenes en `web/src/assets/`
- Modifica modelos y lógica en `backend/src/models.py` y `backend/src/app.py`

---

## Requisitos

- Python 3.12+ recomendado
- Node.js 16+ recomendado

---

## Licencia

Este proyecto es para fines educativos y demostrativos.

---

## Autor

AdrianNQ99  
[GitHub](https://github.com/AdrianNQ99)
