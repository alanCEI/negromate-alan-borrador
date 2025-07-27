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
                {product.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-contrast-color mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
            <button onClick={() => addToCart(product)} className="mt-auto w-full bg-contrast-color text-main-color font-bold py-3 rounded-lg hover:bg-sub-contrast transition-colors">
                Agregar al Carrito
            </button>
        </div>
    );
};

const GalleryItem = ({ item, onSelect, isSelected }) => (
    <div
        onClick={onSelect}
        className={`cursor-pointer p-4 rounded-lg transition-all duration-200 ${isSelected ? 'bg-contrast-color text-main-color shadow-lg' : 'bg-dark-bg hover:bg-gray-700'}`}
    >
        <h4 className="font-bold text-lg">{item.brand}</h4>
    </div>
);

const GraphicDesign = () => {
    const [products, setProducts] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const [productsRes, galleryRes] = await Promise.all([
                    api.products.get('GraphicDesign', { signal: controller.signal }),
                    api.content.get('gallery-graphicDesign', { signal: controller.signal })
                ]);
                setProducts(productsRes.data);
                setGallery(galleryRes.data);
                if(galleryRes.data.length > 0) {
                    setSelectedItem(galleryRes.data[0]);
                }
            } catch (error) {
                 if (error.name !== 'AbortError') console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        return () => controller.abort();
    }, []);

    if (loading) return <div className="text-center py-20 text-xl">Cargando diseños...</div>;

    return (
        <div className="bg-main-color text-sub-color">
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-contrast-color">Galería de Diseño Gráfico</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1 space-y-4">
                            {gallery.map(item => <GalleryItem key={item.id} item={item} onSelect={() => setSelectedItem(item)} isSelected={selectedItem?.id === item.id}/>)}
                        </div>
                        <div className="md:col-span-2">
                             {selectedItem && (
                                 <div className="bg-dark-bg p-6 rounded-lg sticky top-24">
                                     <img src={selectedItem.imageUrl} alt={selectedItem.brand} className="w-full h-auto object-cover rounded-lg mb-4"/>
                                     <h3 className="text-2xl font-bold text-contrast-color mb-2">{selectedItem.brand}</h3>
                                     <p>{selectedItem.description}</p>
                                 </div>
                             )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-dark-bg">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-contrast-color">Paquetes de Precios</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                       {products.map(p => <PriceCard key={p._id} product={p} />)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GraphicDesign;