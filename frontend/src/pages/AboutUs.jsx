import React, { useState, useEffect } from 'react'
import apiService from '@/services/api'

const AboutUs = () => {
  const [aboutContent, setAboutContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAboutContent = async () => {
      const controller = new AbortController()
      
      try {
        const response = await apiService.getAboutPageContent()
        if (response.status === 'ok') {
          setAboutContent(response.data.content)
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching about content:', error)
        }
      } finally {
        setIsLoading(false)
      }

      return () => controller.abort()
    }

    fetchAboutContent()
  }, [])

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <div className="text-6xl mb-4">⏳</div>
        <h1 className="text-3xl font-bold mb-4">Cargando contenido...</h1>
      </div>
    )
  }

  if (!aboutContent) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-3xl font-bold mb-4">Error al cargar contenido</h1>
        <p className="text-lg text-text-light">
          No se pudo cargar la información de la página.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-dark">
          {aboutContent.title}
        </h1>
        <p className="text-xl text-text-light">
          {aboutContent.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-text-dark">
            {aboutContent.story.title}
          </h2>
          <div className="space-y-4 text-text-light">
            {aboutContent.story.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-accent-color to-pink-500 rounded-2xl p-8 text-white">
          <div className="text-center">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-4">{aboutContent.mission.title}</h3>
            <p className="opacity-90">
              {aboutContent.mission.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {aboutContent.values.map((value, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-text-dark">{value.title}</h3>
            <p className="text-text-light">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="card bg-gradient-to-r from-gray-900 to-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          {aboutContent.cta.title}
        </h2>
        <p className="text-lg opacity-90 mb-6">
          {aboutContent.cta.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {aboutContent.cta.stats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <span className="font-bold">{stat.value}</span> {stat.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs