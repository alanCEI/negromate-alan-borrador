import React, { useState, useEffect } from 'react'
import apiService from '@/services/api'

const Hero = () => {
  const [heroContent, setHeroContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchHeroContent = async () => {
      const controller = new AbortController()
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json'
        },
        signal: controller.signal
      }

      try {
        const response = await apiService.getLandingPageContent()
        if (response.status === 'ok') {
          setHeroContent(response.data.content.hero)
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching hero content:', error)
          // Fallback content si falla la API
          setHeroContent({
            title: "Arte Urbano",
            subtitle: "Personalizado",
            description: "Transformamos tu visión en arte callejero único.",
            primaryButton: "Explorar Servicios",
            secondaryButton: "Ver Portfolio"
          })
        }
      } finally {
        setIsLoading(false)
      }

      return () => controller.abort()
    }

    fetchHeroContent()
  }, [])

  if (isLoading) {
    return (
      <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-xl">Cargando...</p>
        </div>
      </section>
    )
  }

  if (!heroContent) {
    return null
  }

  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {heroContent.title}
            <span className="block text-accent-color">{heroContent.subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            {heroContent.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              {heroContent.primaryButton}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors">
              {heroContent.secondaryButton}
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
    </section>
  )
}

export default Hero