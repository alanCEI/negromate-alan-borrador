import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import apiService from '@/services/api'

const Products = () => {
  const [servicesContent, setServicesContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchServicesContent = async () => {
      const controller = new AbortController()
      
      try {
        const response = await apiService.getLandingPageContent()
        if (response.status === 'ok') {
          setServicesContent(response.data.content.services)
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching services content:', error)
          // Fallback content
          setServicesContent({
            title: "Nuestros Servicios",
            subtitle: "Descubre nuestras especialidades en arte urbano",
            items: [
              {
                id: "graphic-design",
                title: "Diseño Gráfico",
                description: "Logos, branding y identidad visual",
                icon: "🎨"
              },
              {
                id: "custom-clothing", 
                title: "Ropa Personalizada",
                description: "Camisetas, hoodies y accesorios únicos",
                icon: "👕"
              },
              {
                id: "murals",
                title: "Murales",
                description: "Arte mural para espacios únicos",
                icon: "🖼️"
              }
            ]
          })
        }
      } finally {
        setIsLoading(false)
      }

      return () => controller.abort()
    }

    fetchServicesContent()
  }, [])

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-lg">Cargando servicios...</p>
        </div>
      </section>
    )
  }

  if (!servicesContent) {
    return null
  }

  const serviceRoutes = {
    "graphic-design": "/graphic-design",
    "custom-clothing": "/custom-clothing", 
    "murals": "/murals"
  }

  const serviceColors = {
    "graphic-design": "bg-gradient-to-br from-purple-500 to-pink-500",
    "custom-clothing": "bg-gradient-to-br from-blue-500 to-cyan-500",
    "murals": "bg-gradient-to-br from-green-500 to-teal-500"
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-text-dark">
            {servicesContent.title}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {servicesContent.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesContent.items?.map(service => (
            <Link
              key={service.id}
              to={serviceRoutes[service.id] || '/'}
              className="group block"
            >
              <div className={`card ${serviceColors[service.id]} text-white hover:scale-105 transition-transform duration-300`}>
                <div className="text-6xl mb-4 text-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-center opacity-90">
                  {service.description}
                </p>
                {service.startingPrice && (
                  <div className="mt-4 text-center">
                    <span className="text-sm opacity-75">Desde </span>
                    <span className="text-lg font-bold">{service.startingPrice}</span>
                  </div>
                )}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium group-hover:bg-opacity-30 transition-colors">
                    Ver más →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products