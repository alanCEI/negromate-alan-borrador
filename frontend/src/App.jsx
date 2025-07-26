import { Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProtectedRoute from '@/components/ProtectedRoute'
import GuestRoute from '@/components/GuestRoute'


// Páginas públicas
import LandingPage from '@/pages/LandingPage'
import AboutUs from '@/pages/AboutUs'
import Contact from '@/pages/Contact'
import GraphicDesign from '@/pages/GraphicDesign'
import CustomClothing from '@/pages/CustomClothing'
import Murals from '@/pages/Murals'

// Páginas de autenticación (solo para invitados)
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// Páginas protegidas (solo para usuarios autenticados)
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import ShoppingCart from '@/pages/ShoppingCart'

function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-secondary-color">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          {/* Rutas públicas - accesibles para todos */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/custom-clothing" element={<CustomClothing />} />
          <Route path="/murals" element={<Murals />} />

          {/* Rutas de invitado - solo para usuarios NO autenticados */}
          <Route path="/auth/login" element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          } />
          <Route path="/auth/register" element={
            <GuestRoute>
              <Register />
            </GuestRoute>
          } />

          {/* Rutas protegidas - solo para usuarios autenticados */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute>
              <ShoppingCart />
            </ProtectedRoute>
          } />

          {/* Ruta de fallback - página no encontrada */}
          <Route path="*" element={
            <div className="text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h1 className="text-3xl font-bold mb-4 text-text-dark">
                Página No Encontrada
              </h1>
              <p className="text-lg text-text-light mb-6">
                La página que buscas no existe o ha sido movida.
              </p>
              <Link to="/" className="btn-primary">
                Volver al Inicio
              </Link>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App