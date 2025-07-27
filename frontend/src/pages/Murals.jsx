import { useState, useEffect } from 'react';
import { api } from '@/services/api';
import { useCart } from '@/context/CartContext';

const PriceCard = ({ product }) => {
    const { addToCart } = useCart();
    return (
        <div className="bg-dark-bg p-8 rounded-lg shadow-xl flex flex-col border-2 border-contrast-color">
            <h3 className="text-2xl font-bold text-contrast-color mb-4 text-center">{product.name}</h3>
            <p className="text-center mb-6">{product.description}</p>
            <div className="text-5xl font-bold text-center mb-6 text-contrast-color">{product.price}€</div>
            <ul className="space-y-3 mb-8 flex-grow">
                {product.details.map((detail, i) => <li key={i} className="flex items-start"><svg className="w-5 h-5 text-contrast-color mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg><span>{detail}</span></li>)}
            </ul>
            <button onClick={() => addToCart(product)} className="mt-auto w-full bg-contrast-color text-main-color font-bold py-3 rounded-lg hover:bg-sub-contrast transition-colors">Agregar al Carrito</button>
        </div>
    );
}

const Murals = () => {
    const [products, setProducts] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [modalImage, setModalImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const [productsRes, galleryRes] = await Promise.all([
                    api.products.get('Murals', { signal: controller.signal }),
                    api.content.get('gallery-murals', { signal: controller.signal })
                ]);
                setProducts(productsRes.data);
                setGallery(galleryRes.data);
            } catch (error) {
                 if (error.name !== 'AbortError') console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        return () => controller.abort();
    }, []);

    if (loading) return <div className="text-center py-20 text-xl">Cargando murales...</div>;

    return (
        <div className="bg-main-color text-sub-color">
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-contrast-color">Galería de Murales</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gallery.map(item => (
                            <div key={item.id} className="group relative overflow-hidden rounded-lg cursor-pointer aspect-video" onClick={() => setModalImage(item.imageUrl)}>
                                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center p-4">
                                    <h3 className="text-xl text-center font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 bg-dark-bg">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-contrast-color">Paquetes de Murales</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                       {products.map(p => <PriceCard key={p._id} product={p} />)}
                    </div>
                </div>
            </section>
             {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setModalImage(null)}>
                    <img src={modalImage} alt="Vista ampliada" className="max-w-full max-h-full object-contain rounded-lg"/>
                </div>
            )}
        </div>
    );
};

export default Murals;