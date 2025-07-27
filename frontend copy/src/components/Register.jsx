import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }
        setLoading(true);
        try {
            await register(username, email, password);
        } catch (err) {
            setError(err.message || 'Error al registrarse. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md bg-sub-color p-8 rounded-lg shadow-lg border-2 border-contrast-color">
            <h2 className="text-3xl font-bold text-center mb-6 text-dark-bg">Crear Cuenta</h2>
             {error && <p className="bg-red-200 text-red-800 p-3 rounded-md mb-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                    <label htmlFor="register-username" className="block text-sm font-medium text-gray-700">Nombre de Usuario</label>
                    <input
                        id="register-username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sub-contrast focus:border-sub-contrast sm:text-sm text-dark-bg"
                        autoComplete="username"
                    />
                </div>
                <div>
                    <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="register-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sub-contrast focus:border-sub-contrast sm:text-sm text-dark-bg"
                        autoComplete="email"
                    />
                </div>
                <div>
                    <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">Contraseña (mín. 6 caracteres)</label>
                    <input
                        id="register-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sub-contrast focus:border-sub-contrast sm:text-sm text-dark-bg"
                        autoComplete="new-password"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-main-color bg-contrast-color hover:bg-sub-contrast focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sub-contrast transition-colors disabled:opacity-50"
                >
                    {loading ? 'Creando cuenta...' : 'Registrarse'}
                </button>
            </form>
        </div>
    );
};

export default Register;