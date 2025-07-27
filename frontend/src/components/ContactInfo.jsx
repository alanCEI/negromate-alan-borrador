import { Link } from 'react-router-dom';

const ContactInfo = () => {
    return (
        <section className="py-20 bg-main-color">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Nos encantaría escucharlo. Ponte en contacto con nosotros y hagamos que tu idea cobre vida.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-contrast-color text-main-color font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105 hover:bg-sub-contrast"
                >
                    Hablemos
                </Link>
            </div>
        </section>
    );
};

export default ContactInfo;