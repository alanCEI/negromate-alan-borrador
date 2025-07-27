import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
        } catch (err) {
            setError(err.message || 'Error al iniciar sesión. Verifica tus credenciales.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md bg-sub-color p-8 rounded-lg shadow-lg border-2 border-contrast-color">
            <h2 className="text-3xl font-bold text-center mb-6 text-dark-bg">Iniciar Sesión</h2>
            {error && <p className="bg-red-200 text-red-800 p-3 rounded-md mb-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="login-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sub-contrast focus:border-sub-contrast sm:text-sm text-dark-bg"
                        autoComplete="email"
                    />
                </div>
                <div>
                    <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input
                        id="login-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sub-contrast focus:border-sub-contrast sm:text-sm text-dark-bg"
                        autoComplete="current-password"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-main-color bg-contrast-color hover:bg-sub-contrast focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sub-contrast transition-colors disabled:opacity-50"
                >
                    {loading ? 'Entrando...' : 'Entrar'}
                </button>
            </form>
        </div>
    );
};

export default Login;