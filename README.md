🌟 API para Gestión de Usuarios y Productos con Seguridad y Roles
Esta API está diseñada para proporcionar una solución segura, escalable y eficiente para la gestión de usuarios y productos. Con soporte para autenticación robusta, administración basada en roles y rutas protegidas, es ideal para proyectos modernos que priorizan la seguridad.

✨ Características principales

🔒 Autenticación Segura
Uso de JWT (JSON Web Tokens) para autenticación y autorización.
Protección de rutas sensibles para usuarios autenticados.

🛡️ Gestión de Roles y Permisos
Sistema de roles jerárquicos:
ADMIN, EDITOR, y USUARIO estándar.
Control de acceso basado en los permisos asignados.

🗝️ Módulo de Inicio de Sesión
Validación de credenciales al iniciar sesión.
Generación de tokens con tiempo de expiración configurable.

📦 Gestión de Productos
CRUD completo para productos:
Crear, listar, actualizar y eliminar productos.
Protección de operaciones críticas mediante roles.

⚙️ Tecnologías Utilizadas
Backend: Node.js con Express.
Autenticación: JWT (JSON Web Tokens).
Base de Datos: MongoDB con Mongoose.
Utilidades: bcrypt para encriptación de contraseñas y dotenv para configuración de variables de entorno.

🚀 Cómo usar el proyecto
Clona el repositorio:
git clone https://github.com/Fuskito/Apirest.git


2.  Accede al directorio del proyecto e instala las dependencias:
    
    
    cd Apirest  
    npm install
    
   
    
3.  Configura el archivo `.env` con los datos de tu base de datos y otras variables de entorno.
4.  Conecta tu base de datos usando **MongoDB Compass** u otra herramienta.
5.  Inicia el servidor:
    
npm run dev

    

    



🌐 Endpoints Disponibles

👤 User

-   GET: `/api/user/get`
-   POST: `/api/user/create`
-   DELETE: `/api/user/delete/:id`
-   POST: `/api/user/update/:id`

🛍️ Product

-   GET: `/api/product/get`
-   POST: `/api/product/create`
-   DELETE: `/api/product/delete/:id`
-   POST: `/api/product/update/:id`

📂 Category

-   GET: `/api/category/get`
-   POST: `/api/category/create`
-   DELETE: `/api/category/delete/:id`
-   POST: `/api/category/update/:id`

----------

📄 Mocks de Datos

👤 User

```json
{
  "name": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "age": 30,
  "password": "secretPassword123",
  "role": "ADMIN"
}

🛍️ Product
{
  "name": "Ventilador de techo",
  "status": "AVAILABLE",
  "price": 200000
}

📂 Category
{
  "name": "Ventilador de techo",
  "description": "...."
}

📌 Uso Ideal
Perfecto para aplicaciones que requieren autenticación segura y gestión de usuarios y productos.
Ideal para proyectos con administración basada en roles y protección de rutas sensibles.

💻 Desarrollado con amor por Fuskito.