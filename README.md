# Ayudame a crear/editar y convertir el codigo completo del proyecto adjunto en un repositorio de github a ReactJS con Vite como front-end y ExpressJS como back-end/API, ademas usando tambien una base de datos con MongoDB Atlas, MongoDB Compass y mongoose.

## Instrucciones:

## Estructura inicial de carpetas del proyecto (crear o agregar carpetas/archivos si lo requiere, ya sea por la limpieza, buena lectura o sencillez):

negromate-ecommerce/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   └── LandingPage.jsx
│   │   │   └── AboutUs.jsx
│   │   │   └── Contact.jsx
│   │   │   └── Profile.jsx
│   │   │   └── GraphicDesign.jsx
│   │   │   └── CustomClothing.jsx
│   │   │   └── Murals.jsx
│   │   │   └── ShoppingCart.jsx
│   │   ├── components/
│   │   │   └── Header.jsx
│   │   │   └── Hero.jsx
│   │   │   └── Products.jsx
│   │   │   └── ContactInfo.jsx
│   │   │   └── Login.jsx
│   │   │   └── Register.jsx
│   │   │   └── Footer.jsx
│   │   ├── context/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── .env.production
│   ├── .gitignore
│   ├── jsconfig.json
│   ├── package.json
│   ├── vite.config.js
├── backend/
│   ├── config/
│   │   └── config.js
│   ├── controllers/   
│   ├── db/
│   │   └── data.mock.js
│   │   └── mongoose.js
│   │   ├── models/
│   ├── middlewares/
│   ├── routes/   
│   ├── .env
│   ├── .env.production
│   ├── package.json
│   ├── index.js
│   ├── TESTS.REST
│   ├── vercel.json
│   ├── .gitignore

## Instalacion de paquetes y dependencias para el terminal en el front-end y back-end:

- Front-end y back-end, se deben iniciar cada uno en terminales separados.
- NO usar/instalar 'axios' en el proyecto.

### Front-end, instalar dependencias:

npm create vite@latest
npm i
npm i react-router-dom
npm i -D tailwindcss @tailwindcss/vite

- Agregar "type": "module" en package.json
- Agregar en jsconfig.json: 
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"] 
        }
    }
} 
- Agregar en vite.config.js:
  resolve: {
    alias: {
      '@': '/src'
    }
  }

### Back-end, instalar dependencias:
npm init -y
npm i express cors dotenv mongoose jsonwebtoken bcrypt
npm i -D nodemon

- Agregar "type": "module" en package.json

## Estructura nueva del proyecto, de pages y components, etc.. (ejemplo):

### LandingPage/Inicio:

- Component-Header:
logo
Inicio
Sobre Nosotros
Contacto
Perfil
Carrito de compras

- Component-Hero: 
Mantener fondo e imagen en el centro

- Component-Products: Galeria de 3 imagenes con los siguientes titulos y al hacer seleccionar alguno de los 3 se actualiza al page de cada uno
GraphicDesign
CustomClothing
Murals

- Component-InfoDeContacto:
Cuadro de contacto para recordar si desea contactar puede hacer click aqui para rellenar un formulario de contacto, al hacer click se actualiza al page de Contacto

- Component-Footer:
Mantener 

### AboutUs:

- Component-Header:
logo
Inicio
Sobre Nosotros
Contacto
Perfil
Carrito de compras

- Sobre nosotros:
La informacion de sobre nosotros ahora es una page separada y no esta en el landing page, se debe actualizar compo page/componente al hacer click en el navlink del header

- Component-Footer:
Mantener

### Contact:

- Component-Header:
logo
Inicio
Sobre Nosotros
Contacto
Perfil
Carrito de compras

- Contacto:
Mantener el formulario para rellenar de contacto

- Component-Footer:
Mantener

### Profile:

- Component-Header:
Logo
Inicio
Component-Iniciar sesion
Component-Registrarse
Carrito de compras

- Perfil:
Component-Cuadro del mismo tamaño del formulario de contacto pero para iniciar sesion (si se inicia sesion hay que mantenerse iniciado con el token jwt)
Component-Cuadro del mismo tamaño del formulario de contacto pero para registarse en caso de no tener perfil creado, pueda registrarse

- Component-Footer:
Mantener

### GraphicDesign:

- Component-Header:
logo
Inicio
Sobre Nosotros
Contacto
Perfil
Carrito de compras

- Galeria: 5 nombres de marcas con una imagen, parrafo de descripcion cada una y al hacer click se despliega la galeria de imagenes de cada marca 

- Component-Precios:
3 paquetes de precios (250€, 500€, 750€) con detalles de lo que incluye cada paquete y boton para comprar/agregar al carrito

- Component-Footer:
Mantener

### CustomClothing:

- Component-Header:
logo
Sobre Nosotros
Contacto
Perfil
Carrito de compras

- Galeria: de 6 imagenes de ropa personalizada con titulo y un parrafo de descripcion y al hacer click en la imagen se hace grande

- Component-Precios:
3 paquetes de precios (50€, 100€, 150€) con detalles de lo que incluye cada paquete y boton para comprar/agregar al carrito

- Component-Footer:
Mantener

### Murals:

- Component-Header:
logo
Sobre Nosotros
Contacto
Perfil
Carrito de compras

- Galeria: de 6 imagenes de murales con titulo y un parrafo de descripcion y al hacer click en la imagen se hace grande

- Component-Precios:
3 paquetes de precios (600€, 850€, 1200€) con detalles de lo que incluye cada paquete y boton para comprar/agregar al carrito

- Component-Footer:
Mantener

### ShoppingCart:

- Component-Header:
logo
Contacto
Perfil 
Carrito de compras

- Carrito de compras:
Lista con los paquetes agregados para comprar, debe indicar la imagen el nombre del articulo y la cantidad

- Component-Footer:
Mantener

## Detalles importantes del proyecto:

- Debe ser un codigo/proyecto responsive y usaremos grid y flex para ubicar/ordenar.
- Mantener el inicio de sesion con token jwt, una vez el cliente inicie sesion y siga navegando por toda la app web pero con la sesion iniciada.
- Usaremos 'useState', 'useEffect', 'useContext', 'useParams', 'useNavigate', en el proyecto.
- Haremos el deploy del front-end y el back-end por separado en vercel.
- Crea las variables de entorno en .env y .env.production para el back-end y front-end.
- Usa toda la informacion de la web/proyecto adjunto en el repositorio (texto) para crear y rellenar el archivo '/db/data.mock.js' para luego usarla para llamar la informacion del back-end y verla en el front-end.
- Crea el codigo para los handles necesarios en el proyecto.
- Usaremos tailwind 4 para los estilos .css del proyecto pero el archivo index.css lo usaremos para el :root y el reset necesarios para el proyecto.
- El codigo tailwind debe ser elegante pero moderno para una web de arte 'street style' que vende sus diferentes productos.
- El codigo para la autentificaion/autorizacion del login y register debe ser private para el proyecto.
- Se debe crear el boton para modo claro/oscuro en el footer como esta en el proyecto adjunto pero usando context

### Mas indicaciones importantes:

- Se debe usar '<Link>' para enlaces comunes y '<NavLink>' para los enlaces del navegador del header.
- Agregamos/usaremos '<StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,' en el archivo 'main.jsx'.
  - Usaremos token jwt para el 'auth.middleware.js'
- La app web se compone en general para el grid como: 'Header', 'Main' y 'Footer' (puedes agregar secciones sub en el 'Main' para ordenarlo en las distintas pages)
- Agregamos/usaremos el 'import { Routes, Route, Link, NavLink } from "react-router"' en el archivo 'App.jsx';
- Intenta crear todos los componentes necesarios para mantener el orden y buenas costumbres en el codigo.
- Crea el codigo en el 'AuthContext.jsx' para el login y register.
- NO usar/instalar 'axios' en el proyecto.
- El nombre de las clases debe ser en ingles pero el contenido/informacion de la app web es en español.
- Usa el metodo comun o el que se usa regularmente para nombrar las clases y archivos en este tipo de proyectos (ejemplo: pascalcase, camelcase).
- Usaremos localStorage si es necesario/optimo.
- El formulario solo debe indicar que se ha enviado pero sin la funcion de que llegue en verdad el formulario rellenado a un email.

### Indicaciones para el codigo usando en los controllers 'token jwt, bcrypt, etc..'

- Para los fetch del controller en el codigo debe incluirse como const url = ''; 
const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_TOKEN}`
            }
        };
- Para los mensajes de status en los controllers usaremos en el codigo const ResponseAPI = {
    msg: "",
    data: [],
    status: 'ok'
}

### Indicaciones para el codigo de los pages en el 'useEffect' para los 'fetch':

- Usaremos const controller = new AbortController();
- Usaremos const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            },
            signal: controller.signal
        };


### Indicaciones para crear codigo y archivos, tambien importante:

- Crea el codigo y archivos de los controllers necesarios y nombralos por ejemplo: xxxxx.controller.js
- Crea el codigo y archivos de los models necesarios y su Schema correspondiente y nombralos por ejemplo: xxxxx.model.js
- Crea el codigo y archivos de las rutas necesarias y nombralos por ejemplo: xxxxx.routes.js
- Crea el codigo y archivos de los middlewares necesarios para los errores (usando next() tambien) y autentificacion y/o autorizacion y nombralos por ejemplo: xxxxx.middleware.js
- Crea el codigo sencillo de entender para agregar paquetes de productos seleccionados por el cliente como carrito de compras, una vez se inicie sesion. 
- Crea el codigo para usar 'useContext' para el login y register.
- Usaremos navigate.

### Crea el codigo completo para hacer la pruebas CRUD en el archivo TESTS.REST para nuestra REST API

- Debemos poder ver en nuestra base de datos si se ha registrado un nuevo cliente.

### Crea el codigo para poder conectar el front-end con el back-end(rest api) y con la base de datos usando MongoDB Atlas, Compass y mongoose.

- Ejemplo para la base de datos:
'export const connectDB = async () => {
    const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${CLUSTER}/${DATABASE}`;

    try{
        await mongoose.connect(url);
        console.log("Connected to MongoDB")
        console.log(`DB: ${mongoose.connection.db.databaseName}`)
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log(`Collections: ${collections.map(c => c.name)}`)

    }catch(error){
        console.log(`Error connecting to MongoDB: ${error}`)
    }
}'

#### NOTAS: Soy un estudiante que quiere aprender como realizar este proyecto, por lo cual, debe ser un codigo simple pero completo en su logica y codigo para entenderlo y mantener buenas costumbres, es decir, no lo simplifiques para lograr la sencillez porque quiero aprender, no seas flojo.