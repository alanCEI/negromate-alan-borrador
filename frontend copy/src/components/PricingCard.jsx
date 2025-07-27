/*import React from 'react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

const PricingCard = ({ product }) => {
  const { addToCart } = useCart()
  const { isAuthenticated } = useAuth()

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert('Debes iniciar sesión para agregar productos al carrito')
      return
    }
    
    addToCart(product)
    alert('Producto agregado al carrito')
  }

  return (
    <div className="card border-2 border-border-color hover:border-accent-color transition-colors">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-text-dark">
          {product.name}
        </h3>
        <div className="text-4xl font-bold text-accent-color mb-4">
          {product.price}€
        </div>
        <ul className="text-left space-y-2 mb-6 text-text-light">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-accent-color mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <button
          onClick={handleAddToCart}
          className="w-full btn-primary"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

export default PricingCard*/