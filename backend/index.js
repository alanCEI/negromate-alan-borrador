import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './db/mongoose.js'
import { errorHandler } from './middlewares/error.middleware.js'

// Importar rutas
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import orderRoutes from './routes/order.routes.js'
import contentRoutes from './routes/content.routes.js' // NUEVA RUTA

// Configuración
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

// Conectar a MongoDB
connectDB()

// Middlewares globales
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://tu-frontend-url.vercel.app'] 
    : ['http://localhost:5173'],
  credentials: true
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Rutas principales
app.get('/', (req, res) => {
  const ResponseAPI = {
    msg: "NegroMate API funcionando correctamente",
    data: {
      version: "1.0.0",
      endpoints: [
        "/api/auth",
        "/api/users", 
        "/api/products",
        "/api/orders",
        "/api/content" // NUEVO ENDPOINT
      ]
    },
    status: 'ok'
  }
  res.json(ResponseAPI)
})

// Rutas de la API
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/content', contentRoutes) // NUEVA RUTA

// Ruta para formulario de contacto
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body
  
  console.log('Formulario de contacto recibido:', { name, email, subject, message })
  
  const ResponseAPI = {
    msg: "Mensaje de contacto recibido correctamente",
    data: { submitted: true },
    status: 'ok'
  }
  res.json(ResponseAPI)
})

// Manejo de errores (debe ir al final)
app.use(errorHandler)

// Ruta 404
app.use('*', (req, res) => {
  const ResponseAPI = {
    msg: "Ruta no encontrada",
    data: [],
    status: 'error'
  }
  res.status(404).json(ResponseAPI)
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`)
  console.log(`🌍 Entorno: ${process.env.NODE_ENV}`)
})