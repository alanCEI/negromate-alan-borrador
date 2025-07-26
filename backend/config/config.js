import dotenv from 'dotenv'

dotenv.config()

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Base de datos
  database: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    cluster: process.env.CLUSTER,
    name: process.env.DATABASE
  },
  
  // JWT
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  },
  
  // API
  apiToken: process.env.API_TOKEN,
  
  // CORS origins
  corsOrigins: process.env.NODE_ENV === 'production' 
    ? ['https://tu-frontend-url.vercel.app']
    : ['http://localhost:5173']
}