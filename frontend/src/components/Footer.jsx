import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Footer = () => {
  return (
    <footer className="bg-primary-color text-text-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-accent-color mb-4 block">
              NegroMate
            </Link>
            <p className="text-text-light mb-4">
              Especialistas en arte urbano personalizado. Transformamos ideas en diseños únicos 
              que hablan por sí solos.
            </p>
            <ThemeToggle />
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-bold mb-4 text-text-dark">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-light hover:text-accent-color transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-light hover:text-accent-color transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-light hover:text-accent-color transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-bold mb-4 text-text-dark">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/graphic-design" className="text-text-light hover:text-accent-color transition-colors">
                  Diseño Gráfico
                </Link>
              </li>
              <li>
                <Link to="/custom-clothing" className="text-text-light hover:text-accent-color transition-colors">
                  Ropa Personalizada
                </Link>
              </li>
              <li>
                <Link to="/murals" className="text-text-light hover:text-accent-color transition-colors">
                  Murales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-color mt-8 pt-8 text-center">
          <p className="text-text-light">
            © 2025 NegroMate. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer