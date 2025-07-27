import { useCart } from '@/context/CartContext';
import { api } from '@/services/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
    const [status, setStatus] = useState({ loading: false, error: null, success: false });

    const handleCheckout = async () => {
        setStatus({ loading: true, error: null, success: false });
        try {
            const token = localStorage.getItem('userToken');
            if (!token) {
                throw new Error("Debes iniciar sesión para finalizar la compra.");
            }
            const orderData = {
                orderItems: cartItems.map(item => ({
                    product: item._id,
                    quantity: item.quantity
                }))
            };
            await api.orders.create(orderData, token);
            setStatus({ loading: false, error: null, success: true });
            setTimeout(clearCart, 300); // Pequeño delay para que la UI se actualice
        } catch (error) {
            setStatus({ loading: false, error: error.message || 'Hubo un error al procesar tu orden.', success: false });
        }
    };

    if (status.success) {
        return (
             <div className="container mx-auto py-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-contrast-color mb-4">¡Orden Realizada con Éxito!</h1>
                <p>Gracias por tu compra. Hemos recibido tu pedido.</p>
                <Link to="/" className="inline-block mt-6 bg-contrast-color text-main-color font-bold py-2 px-6 rounded-lg hover:bg-sub-contrast transition-colors">Volver al Inicio</Link>
            </div>
        )
    }

    return (
        <section className="py-16 bg-main-color min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12 text-contrast-color">Carrito de Compras</h1>
                {cartItems.length === 0 ? (
                    <div className="text-center py-10 bg-dark-bg rounded-lg">
                        <p className="text-xl mb-4">Tu carrito está vacío.</p>
                        <Link to="/" className="inline-block mt-4 bg-contrast-color text-main-color font-bold py-2 px-6 rounded-lg hover:bg-sub-contrast transition-colors">Explorar productos</Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-dark-bg p-6 rounded-lg space-y-4">
                            {cartItems.map(item => (
                                <div key={item._id} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-700 pb-4 gap-4">
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded"/>
                                        <div>
                                            <h3 className="font-bold text-lg">{item.name}</h3>
                                            <p className="text-sm text-gray-400">{item.price.toFixed(2)}€</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                                            className="w-16 text-center bg-main-color rounded p-1"
                                            min="1"
                                        />
                                        <button onClick={() => removeFromCart(item._id)} className="text-red-500 hover:text-red-400 transition-colors">
                                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="lg:col-span-1 bg-dark-bg p-6 rounded-lg self-start sticky top-24">
                             <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Resumen de la Orden</h2>
                             <div className="flex justify-between mb-4">
                                 <span>Subtotal</span>
                                 <span>{cartTotal.toFixed(2)}€</span>
                             </div>
                             <div className="flex justify-between font-bold text-xl border-t border-gray-700 pt-4">
                                 <span>Total</span>
                                 <span>{cartTotal.toFixed(2)}€</span>
                             </div>
                             <button
                                onClick={handleCheckout}
                                disabled={status.loading}
                                className="w-full mt-6 bg-contrast-color text-main-color font-bold py-3 rounded-lg hover:bg-sub-contrast transition-colors disabled:opacity-50"
                             >
                                 {status.loading ? 'Procesando...' : 'Finalizar Compra'}
                             </button>
                             {status.error && <p className="text-red-500 text-center mt-4">{status.error}</p>}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ShoppingCart;