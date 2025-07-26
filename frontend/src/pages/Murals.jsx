import React from 'react'
import Gallery from '@/components/Gallery'
import PricingCard from '@/components/PricingCard'

const Murals = () => {
  const muralProjects = [
    {
      title: 'Mural Corporativo Tech',
      description: 'Mural de 50m² para oficinas de empresa tecnológica',
      emoji: '🏢'
    },
    {
      title: 'Arte Urbano Comunitario',
      description: 'Mural colaborativo en centro comunitario',
      emoji: '🏘️'
    },
    {
      title: 'Pared Dormitorio Infantil',
      description: 'Diseño colorido y educativo para niños',
      emoji: '🎨'
    },
    {
      title: 'Restaurante Temático',
      description: 'Ambiente inmersivo para restaurante mexicano',
      emoji: '🌮'
    },
    {
      title: 'Gimnasio Motivacional',
      description: 'Murales inspiradores para zona de entrenamiento',
      emoji: '💪'
    },
    {
      title: 'Tienda de Skate',
      description: 'Arte urbano auténtico para skate shop',
      emoji: '🛹'
    }
  ]

  const pricingPlans = [
    {
      id: 'small-mural',
      name: 'Mural Pequeño',
      price: 600,
      features: [
        'Hasta 10m² de superficie',
        'Diseño personalizado',
        'Pinturas de alta calidad',
        'Preparación de superficie',
        'Protección final UV',
        '2 revisiones de boceto'
      ]
    },
    {
      id: 'medium-mural',
      name: 'Mural Mediano',
      price: 850,
      features: [
        'Hasta 25m² de superficie',
        'Diseño complejo multicolor',
        'Técnicas mixtas (spray + pincel)',
        'Preparación profesional',
        'Garantía de 5 años',
        'Documentación fotográfica',
        '3 revisiones de boceto'
      ]
    },
    {
      id: 'large-mural',
      name: 'Mural Grande',
      price: 1200,
      features: [
        'Más de 25m² de superficie',
        'Diseño artístico completo',
        'Efectos especiales (3D, glow)',
        'Equipo especializado',
        'Garantía de 10 años',
        'Time-lapse del proceso',
        'Revisiones ilimitadas',
        'Mantenimiento incluido (1 año)'
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-dark">
          Murales Artísticos
        </h1>
        <p className="text-xl text-text-light max-w-3xl mx-auto">
          Transformamos espacios en experiencias visuales únicas. 
          Desde pequeños rincones hasta grandes fachadas, creamos arte que inspira.
        </p>
      </div>

      {/* Galería de murales */}
      <Gallery 
        images={muralProjects} 
        title="Proyectos Realizados" 
      />

      {/* Sección de precios */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-text-dark">
            Paquetes de Murales
          </h2>
          <p className="text-lg text-text-light">
            Proyectos adaptados al tamaño y complejidad de tu espacio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map(plan => (
            <PricingCard key={plan.id} product={plan} />
          ))}
        </div>
      </div>

      {/* Proceso de trabajo */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-text-dark">
            Proceso de Creación
          </h2>
          <p className="text-lg text-text-light">
            De la idea a la obra maestra en tu pared
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="text-xl font-bold mb-2 text-text-dark">1. Medición</h3>
            <p className="text-text-light">
              Visitamos el espacio y tomamos medidas precisas
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="text-xl font-bold mb-2 text-text-dark">2. Boceto</h3>
            <p className="text-text-light">
              Creamos diseños detallados adaptados al espacio
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2 text-text-dark">3. Ejecución</h3>
            <p className="text-text-light">
              Pintamos con técnicas profesionales y materiales premium
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-2 text-text-dark">4. Acabado</h3>
            <p className="text-text-light">
              Aplicamos protección final y realizamos retoques
            </p>
          </div>
        </div>
      </div>

      {/* Tipos de espacios */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="card">
          <h2 className="text-2xl font-bold mb-6 text-text-dark">
            Espacios que Transformamos
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏠</div>
              <p className="font-medium text-text-dark">Residencial</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏢</div>
              <p className="font-medium text-text-dark">Comercial</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏫</div>
              <p className="font-medium text-text-dark">Educativo</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🎪</div>
              <p className="font-medium text-text-dark">Cultural</p>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-500 to-teal-500 text-white">
          <h2 className="text-2xl font-bold mb-6">
            Materiales Premium
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎨</span>
              <div>
                <h3 className="font-bold">Pinturas Acrílicas</h3>
                <p className="opacity-90">Resistentes al agua y UV</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💎</span>
              <div>
                <h3 className="font-bold">Barniz Protector</h3>
                <p className="opacity-90">Protección a largo plazo</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌱</span>
              <div>
                <h3 className="font-bold">Eco-Friendly</h3>
                <p className="opacity-90">Sin tóxicos, seguros para interiores</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para Transformar tu Espacio?
        </h2>
        <p className="text-lg opacity-90 mb-6">
          Cada mural es único y se adapta perfectamente a tu visión y espacio
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Solicitar Presupuesto
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-500 transition-colors">
            Ver Más Proyectos
          </button>
        </div>
      </div>
    </div>
  )
}

export default Murals