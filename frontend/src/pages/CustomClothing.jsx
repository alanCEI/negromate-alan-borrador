import React from 'react'
import Gallery from '@/components/Gallery'
import PricingCard from '@/components/PricingCard'

const CustomClothing = () => {
  const clothingItems = [
    {
      title: 'Camiseta Street Art',
      description: 'Diseño exclusivo con técnicas de spray digital',
      emoji: '👕'
    },
    {
      title: 'Hoodie Personalizado',
      description: 'Sudadera con capucha y diseño frontal/trasero',
      emoji: '🧥'
    },
    {
      title: 'Gorra Bordada',
      description: 'Bordado de alta calidad con tu diseño',
      emoji: '🧢'
    },
    {
      title: 'Tote Bag Artística',
      description: 'Bolsa ecológica con arte original',
      emoji: '👜'
    },
    {
      title: 'Chaqueta Bomber',
      description: 'Chaqueta personalizada con parches únicos',
      emoji: '🧥'
    },
    {
      title: 'Sneakers Custom',
      description: 'Zapatillas personalizadas con pintura especial',
      emoji: '👟'
    }
  ]

  const pricingPlans = [
    {
      id: 'basic-clothing',
      name: 'Paquete Básico',
      price: 50,
      features: [
        '1 prenda personalizada',
        'Diseño simple (1-2 colores)',
        'Impresión/bordado básico',
        'Prenda de calidad estándar',
        '1 revisión de diseño'
      ]
    },
    {
      id: 'premium-clothing',
      name: 'Paquete Premium',
      price: 100,
      features: [
        '2 prendas personalizadas',
        'Diseño complejo (multicolor)',
        'Técnicas mixtas (impresión + bordado)',
        'Prendas de calidad premium',
        '3 revisiones de diseño',
        'Packaging especial'
      ]
    },
    {
      id: 'collection-clothing',
      name: 'Colección Completa',
      price: 150,
      features: [
        '4 prendas personalizadas',
        'Línea de diseño coherente',
        'Técnicas especiales (foil, glow)',
        'Prendas de marca reconocida',
        'Revisiones ilimitadas',
        'Photoshoot del resultado',
        'Certificado de autenticidad'
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-dark">
          Ropa Personalizada
        </h1>
        <p className="text-xl text-text-light max-w-3xl mx-auto">
          Transforma tu estilo con prendas únicas. Cada pieza es una obra de arte 
          wearable diseñada especialmente para ti.
        </p>
      </div>

      {/* Galería de ropa */}
      <Gallery 
        images={clothingItems} 
        title="Nuestras Creaciones" 
      />

      {/* Sección de precios */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-text-dark">
            Paquetes de Personalización
          </h2>
          <p className="text-lg text-text-light">
            Desde piezas individuales hasta colecciones completas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map(plan => (
            <PricingCard key={plan.id} product={plan} />
          ))}
        </div>
      </div>

      {/* Técnicas y materiales */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="card">
          <h2 className="text-2xl font-bold mb-6 text-text-dark">
            Técnicas Utilizadas
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🖨️</span>
              <div>
                <h3 className="font-bold text-text-dark">Serigrafía</h3>
                <p className="text-text-light">Impresión de alta durabilidad</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🪡</span>
              <div>
                <h3 className="font-bold text-text-dark">Bordado</h3>
                <p className="text-text-light">Acabado premium y elegante</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">✨</span>
              <div>
                <h3 className="font-bold text-text-dark">Vinilo Transfer</h3>
                <p className="text-text-light">Colores vibrantes y precisos</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎨</span>
              <div>
                <h3 className="font-bold text-text-dark">Pintura Textil</h3>
                <p className="text-text-light">Arte manual exclusivo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
          <h2 className="text-2xl font-bold mb-6">
            Marcas de Ropa que Utilizamos
          </h2>
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Premium</h3>
              <p className="opacity-90">Gildan, Fruit of the Loom, Stanley/Stella</p>
            </div>
            
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Eco-Friendly</h3>
              <p className="opacity-90">Algodón orgánico certificado</p>
            </div>
            
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Deportiva</h3>
              <p className="opacity-90">Poliéster reciclado, tecnología Dri-FIT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cuidado de las prendas */}
      <div className="card bg-gradient-to-r from-green-500 to-teal-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Cuidado de tu Prenda Personalizada
        </h2>
        <p className="text-lg opacity-90 mb-6">
          Sigue estos consejos para mantener tu diseño como el primer día
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="text-3xl mb-2">🌡️</div>
            <p className="font-medium">Lavar en frío (máx. 30°C)</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="text-3xl mb-2">🔄</div>
            <p className="font-medium">Voltear al revés antes del lavado</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="text-3xl mb-2">🚫</div>
            <p className="font-medium">No usar lejía ni suavizante</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="text-3xl mb-2">🌬️</div>
            <p className="font-medium">Secar al aire libre</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomClothing