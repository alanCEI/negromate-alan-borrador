import mongoose from 'mongoose'
import { config } from '../config/config.js'

export const connectDB = async () => {
  const { user, password, cluster, name } = config.database
  const url = `mongodb+srv://${user}:${password}@${cluster}/${name}`

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    
    console.log("✅ Connected to MongoDB")
    console.log(`📊 Database: ${mongoose.connection.db.databaseName}`)
    
    const collections = await mongoose.connection.db.listCollections().toArray()
    console.log(`📋 Collections: ${collections.map(c => c.name).join(', ') || 'None'}`)

  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`)
    process.exit(1)
  }
}

// Eventos de conexión
mongoose.connection.on('disconnected', () => {
  console.log('📡 MongoDB disconnected')
})

mongoose.connection.on('error', (error) => {
  console.error(`❌ MongoDB error: ${error}`)
})