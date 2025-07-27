import { Link } from 'react-router-dom';

const productCategories = [
    {
        title: 'Diseño Gráfico',
        path: '/graphic-design',
        image: '/images/ivy-bg.webp'
    },
    {
        title: 'Ropa Personalizada',
        path: '/custom-clothing',
        image: '/images/clothes.webp'
    },
    {
        title: 'Murales',
        path: '/murals',
        image: '/images/goiko.webp'
    }
];

const Products = () => {
    return (
        <section className="py-16 bg-dark-bg text-sub-color">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-contrast-color">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {productCategories.map((category) => (
                        <Link to={category.path} key={category.title} className="group block relative overflow-hidden rounded-lg shadow-lg aspect-square">
                            <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-70">
                                <h3 className="text-3xl font-bold text-white transition-transform duration-300 group-hover:scale-105">{category.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;