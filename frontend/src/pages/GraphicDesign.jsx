import React from 'react'
import Gallery from '@/components/Gallery'
import PricingCard from '@/components/PricingCard'

const GraphicDesign = () => {
  const brands = [
    {
      title: 'TechStart',
      description: 'Identidad visual completa para startup tecnológica',
      emoji: '💻'
    },
    {
      title: 'Urban Café',
      description: 'Branding para cafetería con estilo urbano',
      emoji: '☕'
    },
    {
      title: 'FitLife',
      description: 'Logo y diseño para gimnasio moderno',
      emoji: '💪'
    },
    {
      title: 'EcoGreen',
      description: 'Identidad para empresa sostenible',
      emoji: '🌱'
    },
    {
      title: 'ArtSpace',
      description: 'Branding para galería de arte contemporáneo',
      emoji: '🎨'
    }
  ]

  const pricingPlans = [
    {
      id: 'basic-design',
      name: 'Paquete Básico',
      price: 250,
      features: [
        'Logo principal + 2 variaciones',
        'Paleta de colores',
        'Tipografía personalizada',
        '3 rondas de revisiones',
        'Archivos en alta resolución'
      ]
    },
    {
      id: 'premium-design',
      name: 'Paquete Premium',
      price: 500,
      features: [
        'Todo del paquete básico',
        'Manual de identidad corporativa',
        'Papelería básica (tarjetas, papel membretado)',
        'Mockups profesionales',
        '5 rondas de revisiones',
        'Iconografía personalizada'
      ]
    },
    {
      id: 'enterprise-design',
      name: 'Paquete Empresarial',
      price: 750,
      features: [
        'Todo del paquete premium',
        'Estrategia de marca completa',
        'Aplicaciones digitales y físicas',
        'Campaña de lanzamiento',
        'Revisiones ilimitadas',
        'Soporte post-entrega (3 meses)',
        'Consultoría estratégica'
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-dark">
          Diseño Gráfico
        </h1>
        <p className="text-xl text-text-light max-w-3xl mx-auto">
          Creamos identidades visuales únicas que conectan con tu audiencia. 
          Desde logos hasta estrategias de marca completas.
        </p>
      </div>

      {/* Galería de marcas */}
      <Gallery 
        images={brands} 
        title="Marcas que Hemos Diseñado" 
      />

      {/* Sección de precios */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-text-dark">
            Paquetes de Diseño
          </h2>
          <p className="text-lg text-text-light">
            Elige el paquete que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map(plan => (
            <PricingCard key={plan.id} product={plan} />
          ))}
        </div>
      </div>

      {/* Proceso de trabajo */}
      <div className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg opacity-90">
            Metodología probada para crear diseños que funcionan
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">1. Briefing</h3>
            <p className="opacity-90">Entendemos tu visión y objetivos</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="text-xl font-bold mb-2">2. Conceptualización</h3>
            <p className="opacity-90">Desarrollamos ideas y conceptos únicos</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">3. Diseño</h3>
            <p className="opacity-90">Creamos propuestas visuales impactantes</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">4. Entrega</h3>
            <p className="opacity-90">Finalizamos y entregamos todo listo para usar</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraphicDesign