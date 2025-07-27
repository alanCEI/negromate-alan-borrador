import { useState, useEffect } from 'react';
import { api } from '@/services/api';

const AboutUs = () => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        const fetchContent = async () => {
            try {
                const response = await api.content.get('aboutUs', { signal: controller.signal });
                setContent(response.data);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError('No se pudo cargar el contenido. Inténtalo más tarde.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
        return () => controller.abort();
    }, []);

    if (loading) return <div className="text-center py-20 text-xl">Cargando...</div>;
    if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
    if (!content) return <div className="text-center py-20">No hay contenido disponible.</div>;

    return (
        <section className="py-16 bg-main-color">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-10 text-contrast-color">{content.title}</h1>
                <p
                    className="text-lg text-center max-w-4xl mx-auto mb-16 leading-relaxed bg-sub-color text-dark-bg p-8 rounded-lg border-4 border-contrast-color shadow-xl"
                    dangerouslySetInnerHTML={{ __html: content.mainParagraph }} // 
                ></p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <figure className="max-w-md mx-auto">
                        <img src={content.artists.imageUrl} alt={content.artists.title} className="rounded-lg shadow-2xl w-full border-4 border-contrast-color" />
                        <figcaption className="text-center mt-4 flex justify-around text-contrast-color">
                            <a href={content.artists.instagram.adriana} target="_blank" rel="noopener noreferrer" className="hover:text-sub-color">@adriluzzatto</a>
                            <a href={content.artists.instagram.yoel} target="_blank" rel="noopener noreferrer" className="hover:text-sub-color">@soyyowyow</a>
                        </figcaption>
                    </figure>
                    <div className="space-y-6 bg-dark-bg p-8 rounded-lg">
                         <h2 className="text-3xl font-bold text-center text-contrast-color">{content.artists.title}</h2>
                        {content.artists.paragraphs.map((p, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: p }} className="leading-loose"></p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;