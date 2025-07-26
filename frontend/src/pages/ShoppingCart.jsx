import React from 'react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'

const ShoppingCart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    getTotalItems 
  } = useCart()
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleCheckout = () => {
    if (!isAuthenticated) {
      alert('Debes iniciar sesión para realizar la compra')
      navigate('/profile')
      return
    }
    
    // Aquí implementarías la lógica de checkout real
    alert('Funcionalidad de pago en desarrollo. ¡Gracias por tu interés!')
    clearCart()
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="card">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-3xl font-bold mb-4 text-text-dark">
            Acceso Requerido
          </h1>
          <p className="text-lg text-text-light mb-6">
            Debes iniciar sesión para ver tu carrito de compras
          </p>
          <button
            onClick={() => navigate('/profile')}
            className="btn-primary"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="card">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-3xl font-bold mb-4 text-text-dark">
            Carrito Vacío
          </h1>
          <p className="text-lg text-text-light mb-6">
            Aún no has agregado productos a tu carrito
          </p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Explorar Servicios
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-text-dark">
          Mi Carrito
        </h1>
        <p className="text-lg text-text-light">
          {getTotalItems()} {getTotalItems() === 1 ? 'producto' : 'productos'} en tu carrito
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Lista de productos */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="card">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-dark mb-2">
                    {item.name}
                  </h3>
                  <p className="text-text-light mb-2">
                    Precio unitario: {item.price}€
                  </p>
                  
                  {/* Controles de cantidad */}
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-text-light">Cantidad:</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-xl font-bold text-text-dark mb-2">
                    {(item.price * item.quantity).toFixed(2)}€
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors text-sm"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen del pedido */}
        <div className="lg:col-span-1">
          <div className="card bg-gradient-to-br from-accent-color to-pink-500 text-white sticky top-4">
            <h2 className="text-2xl font-bold mb-6">
              Resumen del Pedido
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{getTotalPrice().toFixed(2)}€</span>
              </div>
              <div className="flex justify-between">
                <span>IVA (21%):</span>
                <span>{(getTotalPrice() * 0.21).toFixed(2)}€</span>
              </div>
              <div className="border-t border-white border-opacity-30 pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span>{(getTotalPrice() * 1.21).toFixed(2)}€</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full bg-white text-accent-color py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Proceder al Pago
              </button>
              
              <button
                onClick={clearCart}
                className="w-full border-2 border-white py-3 rounded-lg font-bold hover:bg-white hover:text-accent-color transition-colors"
              >
                Vaciar Carrito
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-white border-opacity-30">
              <h3 className="font-bold mb-3">Métodos de Pago Aceptados</h3>
              <div className="flex space-x-2">
                <div className="bg-white bg-opacity-20 px-3 py-2 rounded text-sm">
                  💳 Tarjeta
                </div>
                <div className="bg-white bg-opacity-20 px-3 py-2 rounded text-sm">
                  📱 PayPal
                </div>
                <div className="bg-white bg-opacity-20 px-3 py-2 rounded text-sm">
                  🏦 Transferencia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart