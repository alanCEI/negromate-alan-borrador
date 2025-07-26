import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

// Componente para rutas que solo deben ver usuarios NO autenticados
const GuestRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth()

  // Mientras carga la información de autenticación, muestra un loading
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-lg text-text-light">Cargando...</p>
        </div>
      </div>
    )
  }

  // Si está autenticado, redirige al dashboard/perfil
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  // Si no está autenticado, muestra el componente (login/register)
  return children
}

export default GuestRoute