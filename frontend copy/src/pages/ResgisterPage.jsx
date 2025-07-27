/*import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    // Validar contraseñas
    if (formData.password !== formData.confirmPassword) {
      setMessage('Las contraseñas no coinciden')
      setIsLoading(false)
      return
    }

    // Validar longitud de contraseña
    if (formData.password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres')
      setIsLoading(false)
      return
    }

    const { confirmPassword, ...userData } = formData
    const result = await register(userData)
    
    if (result.success) {
      setMessage('Usuario registrado correctamente. Te estamos redirigiendo al login...')
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      
      // Redirigir al login después de 2 segundos
      setTimeout(() => {
        navigate('/auth/login', { 
          state: { message: 'Cuenta creada exitosamente. Ya puedes iniciar sesión.' }
        })
      }, 2000)
    } else {
      setMessage(result.message || 'Error al registrarse')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="card">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-text-dark mb-2">
            Crear Cuenta
          </h1>
          <p className="text-text-light">
            Únete a la comunidad NegroMate
          </p>
        </div>
        
        {message && (
          <div className={`mb-4 p-3 rounded-lg text-center ${
            message.includes('correctamente') 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              className="w-full px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-dark mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-dark mb-1">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
              placeholder="Repite tu contraseña"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-text-light">
            ¿Ya tienes cuenta?{' '}
            <Link 
              to="/auth/login" 
              className="text-accent-color hover:underline font-medium"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register*/