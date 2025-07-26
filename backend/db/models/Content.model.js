import mongoose from 'mongoose'

const contentSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  type: {
    type: String,
    enum: ['page', 'section', 'company', 'service'],
    required: true
  },
  category: {
    type: String,
    default: 'general'
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  version: {
    type: Number,
    default: 1
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// Índices para mejorar performance
contentSchema.index({ type: 1, category: 1 })
contentSchema.index({ key: 1, isActive: 1 })

export default mongoose.model('Content', contentSchema)