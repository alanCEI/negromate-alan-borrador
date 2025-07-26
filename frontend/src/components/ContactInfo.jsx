import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import apiService from '@/services/api'

const ContactInfo = () => {
  const [ctaContent, setCTAContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCTAContent = async () => {
      const controller = new AbortController()
      
      try {
        const response = await apiService.getLandingPageContent()
        if (response.status === 'ok') {
          setCTAContent(response.data.content.services.cta)
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching CTA content:', error)
          // Fallback content
          setCTAContent({
            title: "¿Tienes un proyecto en mente?",
            description: "Nos encanta colaborar en proyectos únicos.",
            buttonText: "Contáctanos Ahora"
          })
        }
      } finally {
        setIsLoading(false)
      }

      return () => controller.abort()
    }

    fetchCTAContent()
  }, [])

  if (isLoading) {
    return (
      <section className="py-16 bg-accent-color text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-lg">Cargando...</p>
        </div>
      </section>
    )
  }

  if (!ctaContent) {
    return null
  }

  return (
    <section className="py-16 bg-accent-color text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {ctaContent.title}
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {ctaContent.description}
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-accent-color px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
        >
          {ctaContent.buttonText}
        </Link>
      </div>
    </section>
  )
}

export default ContactInfo