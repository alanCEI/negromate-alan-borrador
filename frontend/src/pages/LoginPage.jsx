import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Obtener la ruta desde donde vino el usuario, o usar '/' por defecto
  const from = location.state?.from || '/'

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

    const result = await login(formData)
    
    if (result.success) {
      setMessage('Sesión iniciada correctamente')
      setTimeout(() => {
        // Redirige a donde estaba antes o al dashboard
        navigate(from === '/auth/login' ? '/dashboard' : from, { replace: true })
      }, 1500)
    } else {
      setMessage(result.message || 'Error al iniciar sesión')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="card">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-text-dark mb-2">
            Iniciar Sesión
          </h1>
          <p className="text-text-light">
            Accede a tu cuenta de NegroMate
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
              className="w-full px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
              placeholder="Tu contraseña"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-text-light">
            ¿No tienes cuenta?{' '}
            <Link 
              to="/auth/register" 
              className="text-accent-color hover:underline font-medium"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login