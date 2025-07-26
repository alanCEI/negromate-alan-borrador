import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth()
  const { getTotalItems } = useCart()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="bg-primary-color text-text-dark shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-accent-color">
            NegroMate
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-accent-color transition-colors ${
                  isActive ? 'text-accent-color' : ''
                }`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-accent-color transition-colors ${
                  isActive ? 'text-accent-color' : ''
                }`
              }
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-accent-color transition-colors ${
                  isActive ? 'text-accent-color' : ''
                }`
              }
            >
              Contacto
            </NavLink>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {/* Usuario autenticado */}
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `hover:text-accent-color transition-colors ${
                      isActive ? 'text-accent-color' : ''
                    }`
                  }
                >
                  Dashboard
                </NavLink>
                
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `hover:text-accent-color transition-colors ${
                      isActive ? 'text-accent-color' : ''
                    }`
                  }
                >
                  Mi Perfil
                </NavLink>

                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `relative hover:text-accent-color transition-colors ${
                      isActive ? 'text-accent-color' : ''
                    }`
                  }
                >
                  🛒 Carrito
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent-color text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </NavLink>

                <div className="flex items-center space-x-2">
                  <span className="text-sm">Hola, {user?.name}</span>
                  <button
                    onClick={handleLogout}
                    className="text-sm hover:text-accent-color transition-colors px-3 py-1 border border-border-color rounded-lg hover:border-accent-color"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Usuario NO autenticado */}
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) =>
                    `hover:text-accent-color transition-colors ${
                      isActive ? 'text-accent-color' : ''
                    }`
                  }
                >
                  Iniciar Sesión
                </NavLink>
                
                <NavLink
                  to="/auth/register"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition-colors ${
                      isActive 
                        ? 'bg-accent-color text-white' 
                        : 'bg-accent-color text-white hover:bg-opacity-90'
                    }`
                  }
                >
                  Registrarse
                </NavLink>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu - versión simplificada */}
        <div className="md:hidden mt-4 pt-4 border-t border-border-color">
          <div className="flex flex-wrap gap-4 text-sm">
            <NavLink to="/" className="hover:text-accent-color">Inicio</NavLink>
            <NavLink to="/about" className="hover:text-accent-color">Nosotros</NavLink>
            <NavLink to="/contact" className="hover:text-accent-color">Contacto</NavLink>
            
            {isAuthenticated ? (
              <>
                <NavLink to="/dashboard" className="hover:text-accent-color">Dashboard</NavLink>
                <NavLink to="/cart" className="hover:text-accent-color">Carrito ({getTotalItems()})</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/auth/login" className="hover:text-accent-color">Login</NavLink>
                <NavLink to="/auth/register" className="hover:text-accent-color">Registro</NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header