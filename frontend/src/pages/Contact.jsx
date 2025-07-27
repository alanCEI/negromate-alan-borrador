import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ user: '', email: '', tel: '', type: 'private', info: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulamos una llamada a API
        setTimeout(() => {
            console.log('Formulario enviado:', formData);
            setSubmitted(true);
            setLoading(false);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center text-center">
                <div className="p-8 bg-dark-bg rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-contrast-color mb-4">¡Gracias por tu mensaje!</h2>
                    <p>Nos pondremos en contacto contigo lo antes posible.</p>
                </div>
            </div>
        );
    }

    return (
        <section className="py-16 bg-main-color flex items-center justify-center">
            <div className="container max-w-2xl mx-auto px-4">
                 <h1 className="text-4xl font-bold text-center mb-2 text-contrast-color">Contacto</h1>
                 <p className="text-center text-lg mb-8">¿Tienes un proyecto en mente? Ponte en contacto con nosotros y hablemos sobre él.</p>
                <form onSubmit={handleSubmit} className="bg-sub-color text-dark-bg p-8 rounded-lg shadow-xl border-2 border-contrast-color space-y-6">
                    <div>
                        <label htmlFor="user" className="block text-sm font-medium">Nombre / Empresa</label>
                        <input type="text" id="user" name="user" value={formData.user} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-dark-bg"/>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-dark-bg"/>
                    </div>
                     <div>
                        <label htmlFor="tel" className="block text-sm font-medium">Teléfono (Opcional)</label>
                        <input type="tel" id="tel" name="tel" value={formData.tel} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-dark-bg"/>
                    </div>
                    <fieldset>
                        <legend className="text-sm font-medium">Tipo de cliente</legend>
                        <div className="mt-2 space-y-2 md:space-y-0 md:flex md:items-center md:space-x-4">
                            <div className="flex items-center">
                                <input id="private" name="type" type="radio" value="private" checked={formData.type === 'private'} onChange={handleChange} className="focus:ring-sub-contrast h-4 w-4 text-sub-contrast border-gray-300"/>
                                <label htmlFor="private" className="ml-3 block text-sm font-medium">Particular</label>
                            </div>
                             <div className="flex items-center">
                                <input id="company" name="type" type="radio" value="company" checked={formData.type === 'company'} onChange={handleChange} className="focus:ring-sub-contrast h-4 w-4 text-sub-contrast border-gray-300"/>
                                <label htmlFor="company" className="ml-3 block text-sm font-medium">Empresa</label>
                            </div>
                        </div>
                    </fieldset>
                    <div>
                        <label htmlFor="info" className="block text-sm font-medium">Comentarios</label>
                        <textarea id="info" name="info" rows="5" value={formData.info} onChange={handleChange} placeholder="Coméntanos brevemente sobre tu proyecto..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-dark-bg"></textarea>
                    </div>
                     <button type="submit" disabled={loading} className="w-full bg-contrast-color text-main-color font-bold py-3 px-6 rounded-lg hover:bg-sub-contrast transition-colors duration-300 disabled:opacity-50">
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;