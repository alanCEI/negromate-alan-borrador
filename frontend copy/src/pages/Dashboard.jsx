/*import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const { user } = useAuth()
  const { getTotalItems } = useCart()

  const quickActions = [
    {
      title: 'Ver Servicios',
      description: 'Explora nuestros paquetes de diseño',
      link: '/',
      icon: '🎨',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      title: 'Mi Carrito',
      description: `${getTotalItems()} productos en tu carrito`,
      link: '/cart',
      icon: '🛒',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      title: 'Mis Pedidos',
      description: 'Historial de órdenes y seguimiento',
      link: '/orders',
      icon: '📦',
      color: 'bg-gradient-to-br from-green-500 to-teal-500'
    },
    {
      title: 'Contacto',
      description: 'Háblanos sobre tu proyecto',
      link: '/contact',
      icon: '💬',
      color: 'bg-gradient-to-br from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Bienvenida 
      <div className="card bg-gradient-to-r from-accent-color to-pink-500 text-white mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            ¡Bienvenido, {user?.name}! 👋
          </h1>
          <p className="text-xl opacity-90">
            Tu espacio personal en NegroMate. Aquí puedes gestionar tus proyectos y pedidos.
          </p>
        </div>
      </div>

      /* Estadísticas rápidas 
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card text-center">
          <div className="text-3xl mb-2">👤</div>
          <h3 className="font-bold text-text-dark">Perfil</h3>
          <p className="text-text-light">Miembro desde {new Date(user?.createdAt).getFullYear()}</p>
        </div>
        
        <div className="card text-center">
          <div className="text-3xl mb-2">🛒</div>
          <h3 className="font-bold text-text-dark">Carrito</h3>
          <p className="text-text-light">{getTotalItems()} productos</p>
        </div>
        
        <div className="card text-center">
          <div className="text-3xl mb-2">📊</div>
          <h3 className="font-bold text-text-dark">Pedidos</h3>
          <p className="text-text-light">0 completados</p>
        </div>
      </div>

       Acciones rápidas 
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-text-dark">
          Acciones Rápidas
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="group"
            >
              <div className={`card ${action.color} text-white hover:scale-105 transition-transform duration-300`}>
                <div className="text-center">
                  <div className="text-4xl mb-3">{action.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{action.title}</h3>
                  <p className="text-sm opacity-90">{action.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      Proyectos recientes o sugerencias 
      <div className="card">
        <h2 className="text-2xl font-bold mb-6 text-text-dark">
          ¿En qué te podemos ayudar hoy?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/graphic-design" className="group">
            <div className="p-6 border border-border-color rounded-lg hover:border-accent-color transition-colors">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-bold text-text-dark mb-2">Diseño Gráfico</h3>
              <p className="text-text-light">Logos, branding y identidad visual</p>
            </div>
          </Link>
          
          <Link to="/custom-clothing" className="group">
            <div className="p-6 border border-border-color rounded-lg hover:border-accent-color transition-colors">
              <div className="text-3xl mb-3">👕</div>
              <h3 className="font-bold text-text-dark mb-2">Ropa Personalizada</h3>
              <p className="text-text-light">Camisetas, hoodies y más</p>
            </div>
          </Link>
          
          <Link to="/murals" className="group">
            <div className="p-6 border border-border-color rounded-lg hover:border-accent-color transition-colors">
              <div className="text-3xl mb-3">🖼️</div>
              <h3 className="font-bold text-text-dark mb-2">Murales</h3>
              <p className="text-text-light">Arte mural para espacios únicos</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard*/