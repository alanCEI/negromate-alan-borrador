import { useState, useEffect } from 'react';

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <section
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-cover bg-fixed"
            style={{ backgroundImage: `url(/images/bghero-clear.webp)` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div
                className={`z-10 transition-all duration-500 ease-in-out ${scrolled ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`}
            >
                <img
                    src='/images/logoclear.webp'
                    alt="Negromate Creatives Logo"
                    className="w-64 h-64 md:w-80 md:h-80 object-contain border-4 border-contrast-color rounded-full shadow-2xl shadow-black"
                />
            </div>
        </section>
    );
};

export default Hero;