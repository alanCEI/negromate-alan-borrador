import { useState } from 'react';
import Login from '@/components/Login';
import Register from '@/components/Register';

const Profile = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <section className="py-16 bg-main-color min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="w-full max-w-md">
                    <div className="flex justify-center border-b-2 border-contrast-color mb-8">
                        <button
                            onClick={() => setShowLogin(true)}
                            className={`flex-1 py-3 text-lg font-bold transition-colors rounded-t-lg ${showLogin ? 'bg-contrast-color text-main-color' : 'text-contrast-color hover:bg-gray-700'}`}
                        >
                            Iniciar Sesión
                        </button>
                         <button
                            onClick={() => setShowLogin(false)}
                            className={`flex-1 py-3 text-lg font-bold transition-colors rounded-t-lg ${!showLogin ? 'bg-contrast-color text-main-color' : 'text-contrast-color hover:bg-gray-700'}`}
                        >
                            Registrarse
                        </button>
                    </div>
                    {showLogin ? <Login /> : <Register />}
                </div>
            </div>
        </section>
    );
};

export default Profile;