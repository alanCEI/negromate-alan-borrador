import React, { createContext, useContext, useState, useEffect } from 'react'
import apiService from '@/services/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthContextProvider')
  }
  return context
}

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Verificar si hay token guardado al cargar la app
  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    
    if (token && userData) {
      setUser(JSON.parse(userData))
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const login = async (credentials) => {
    try {
      setIsLoading(true)
      const response = await apiService.login(credentials)
      
      if (response.status === 'ok') {
        const { token, user } = response.data
        
        // Guardar en localStorage
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        
        // Actualizar estado
        setUser(user)
        setIsAuthenticated(true)
        
        return { success: true, message: 'Sesión iniciada correctamente' }
      }
    } catch (error) {
      console.error('Error en login:', error)
      return { success: false, message: error.message }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData) => {
    try {
      setIsLoading(true)
      const response = await apiService.register(userData)
      
      if (response.status === 'ok') {
        return { success: true, message: 'Usuario registrado correctamente' }
      }
    } catch (error) {
      console.error('Error en registro:', error)
      return { success: false, message: error.message }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    // Limpiar localStorage
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    
    // Limpiar estado
    setUser(null)
    setIsAuthenticated(false)
  }

  const value = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}