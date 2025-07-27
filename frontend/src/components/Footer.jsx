import { useTheme } from '@/context/ThemeContext';

const Footer = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <footer className="bg-dark-bg text-contrast-color py-6">
            <div className="container mx-auto px-4">
                <hr className="border-contrast-color mb-6" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-center md:text-left text-sm">&copy; {new Date().getFullYear()} Negromate Creatives. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="border border-contrast-color rounded-lg px-4 py-2 text-sm font-spartan hover:bg-main-color hover:text-sub-color transition-colors"
                        >
                            Modo {theme === 'dark' ? 'Claro' : 'Oscuro'}
                        </button>
                         <a href="https://www.instagram.com/negromatecreatives/" target="_blank" rel="noopener noreferrer" className="hover:text-sub-color transition-colors">
                           Instagram
                        </a>
                         <a href="https://www.behance.net/soyyowyow/" target="_blank" rel="noopener noreferrer" className="hover:text-sub-color transition-colors">
                            Behance
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;