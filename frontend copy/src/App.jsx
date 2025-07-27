import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LandingPage from '@/pages/LandingPage';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import Profile from '@/pages/Profile';
import GraphicDesign from '@/pages/GraphicDesign';
import CustomClothing from '@/pages/CustomClothing';
import Murals from '@/pages/Murals';
import ShoppingCart from '@/pages/ShoppingCart';
import ProtectedRoute from './components/ProtectedRoute';
import GuestRoute from './components/GuestRoute';

function App() {
  return (
    <div className="gridContainer bg-main-color">
      <Header />
      <main className="w-full">
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/custom-clothing" element={<CustomClothing />} />
          <Route path="/murals" element={<Murals />} />

          {/* Rutas solo para invitados (no logueados) */}
          <Route element={<GuestRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Rutas protegidas (requieren login) */}
          <Route element={<ProtectedRoute />}>
             <Route path="/cart" element={<ShoppingCart />} />
             {/* Aquí podrías agregar una página de perfil del usuario logueado */}
             {/* <Route path="/my-profile" element={<UserDashboard />} /> */}
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;