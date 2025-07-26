import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulamos el envío del formulario
    console.log('Formulario enviado:', formData)
    setIsSubmitted(true)
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-dark">
          Contacto
        </h1>
        <p className="text-xl text-text-light">
          Cuéntanos sobre tu proyecto y hagámoslo realidad
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulario */}
        <div className="card">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4 text-text-dark">
                ¡Mensaje Enviado!
              </h3>
              <p className="text-text-light">
                Gracias por contactarnos. Te responderemos pronto.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6 text-text-dark">
                Envíanos un Mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="graphic-design">Diseño Gráfico</option>
                    <option value="custom-clothing">Ropa Personalizada</option>
                    <option value="murals">Murales</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-3"
                >
                  Enviar Mensaje
                </button>
              </form>
            </>
          )}
        </div>

        {/* Información de contacto */}
        <div className="space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-text-dark">
              Información de Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-medium text-text-dark">Email</p>
                  <p className="text-text-light">info@negromate.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-medium text-text-dark">Teléfono</p>
                  <p className="text-text-light">+34 600 123 456</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-medium text-text-dark">Ubicación</p>
                  <p className="text-text-light">Madrid, España</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-accent-color to-pink-500 text-white">
            <h3 className="text-xl font-bold mb-4">
              Horarios de Atención
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados</span>
                <span>10:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingos</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-text-dark">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-accent-color transition-colors">
                📘
              </a>
              <a href="#" className="text-2xl hover:text-accent-color transition-colors">
                📷
              </a>
              <a href="#" className="text-2xl hover:text-accent-color transition-colors">
                🐦
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact