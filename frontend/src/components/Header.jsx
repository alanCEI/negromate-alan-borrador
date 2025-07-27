import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const { cartCount } = useCart();

    const navLinkClass = ({ isActive }) =>
        `px-4 py-2 rounded-lg transition-colors duration-200 text-contrast-color hover:bg-main-color hover:text-sub-color ${isActive ? 'bg-main-color text-sub-color' : ''}`;

    const handleMenuClick = () => {
        setIsMenuOpen(false);
    };

    const handleLogoutClick = () => {
        logout();
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-dark-bg sticky top-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="text-2xl font-bold text-contrast-color border-2 border-contrast-color px-2 py-1 rounded-md hover:scale-105 transition-transform">
                    <img src="/images/isotipo-header.webp" alt="Negromate Creatives Logo" className="h-8 w-auto"/>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-4">
                    <NavLink to="/" className={navLinkClass}>Inicio</NavLink>
                    <NavLink to="/about" className={navLinkClass}>Sobre Nosotros</NavLink>
                    <NavLink to="/contact" className={navLinkClass}>Contacto</NavLink>
                    {user ? (
                        <button onClick={logout} className="px-4 py-2 rounded-lg text-contrast-color hover:bg-red-500 hover:text-white transition-colors">
                            Cerrar Sesión
                        </button>
                    ) : (
                        <NavLink to="/profile" className={navLinkClass}>Perfil</NavLink>
                    )}
                    <NavLink to="/cart" className="relative text-contrast-color p-2 rounded-full hover:bg-main-color">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {cartCount > 0 && (
                             <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                     <NavLink to="/cart" className="relative text-contrast-color p-2 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        {cartCount > 0 && <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">{cartCount}</span>}
                    </NavLink>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-contrast-color">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-dark-bg flex flex-col items-center space-y-2 pb-4">
                    <NavLink to="/" className={navLinkClass} onClick={handleMenuClick}>Inicio</NavLink>
                    <NavLink to="/about" className={navLinkClass} onClick={handleMenuClick}>Sobre Nosotros</NavLink>
                    <NavLink to="/contact" className={navLinkClass} onClick={handleMenuClick}>Contacto</NavLink>
                     {user ? (
                        <button onClick={handleLogoutClick} className="w-full text-center px-4 py-2 rounded-lg text-contrast-color hover:bg-red-500 hover:text-white transition-colors">
                            Cerrar Sesión
                        </button>
                    ) : (
                        <NavLink to="/profile" className={navLinkClass} onClick={handleMenuClick}>Perfil</NavLink>
                    )}
                </nav>
            )}
        </header>
    );
};

export default Header;