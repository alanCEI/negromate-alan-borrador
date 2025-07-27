import { useTheme } from '@/context/ThemeContext';
import '@/css/components/Footer.css';

const Footer = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <footer className="footer">
            <div className="container">
                <hr className="footer-divider" />
                <div className="footer-content">
                    <p className="footer-copy">&copy; {new Date().getFullYear()} Negromate Creatives. Todos los derechos reservados.</p>
                    <div className="footer-links">
                        <button onClick={toggleTheme} className="theme-toggle-button">
                            Modo {theme === 'dark' ? 'Claro' : 'Oscuro'}
                        </button>
                         <a href="https://www.instagram.com/negromatecreatives/" target="_blank" rel="noopener noreferrer">
                           Instagram
                        </a>
                         <a href="https://www.behance.net/soyyowyow/" target="_blank" rel="noopener noreferrer">
                            Behance
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
