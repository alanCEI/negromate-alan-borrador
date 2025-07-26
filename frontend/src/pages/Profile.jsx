import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

const Profile = () => {
  const { user, logout } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: {
      street: user?.address?.street || '',
      city: user?.address?.city || '',
      postalCode: user?.address?.postalCode || '',
      country: user?.address?.country || 'España'
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name.includes('address.')) {
      const field = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí implementarías la actualización del perfil
    console.log('Actualizando perfil:', formData)
    setIsEditing(false)
    alert('Perfil actualizado correctamente (funcionalidad demo)')
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-text-dark">
          Mi Perfil
        </h1>
        <p className="text-lg text-text-light">
          Gestiona tu información personal y preferencias
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Información principal */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-text-dark">
                Información Personal
              </h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 border-2 border-accent-color text-accent-color rounded-lg hover:bg-accent-color hover:text-white transition-colors"
              >
                {isEditing ? 'Cancelar' : 'Editar'}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
                    placeholder="+34 600 123 456"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Dirección
                    </label>
                    <input
                      type="text"
                      name="address.street"
                      value={formData.address.street}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
                      placeholder="Calle, número"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      name="address.city"
                      value={formData.address.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
                      placeholder="Ciudad"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Código Postal
                    </label>
                    <input
                      type="text"
                      name="address.postalCode"
                      value={formData.address.postalCode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
                      placeholder="28001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      País
                    </label>
                    <select
                      name="address.country"
                      value={formData.address.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color"
                    >
                      <option value="España">España</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Francia">Francia</option>
                      <option value="Italia">Italia</option>
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-3 border border-border-color text-text-dark rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-text-dark mb-2">Email</h3>
                    <p className="text-text-light">{user?.email}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-text-dark mb-2">Nombre</h3>
                    <p className="text-text-light">{user?.name}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-text-dark mb-2">Teléfono</h3>
                    <p className="text-text-light">{user?.phone || 'No especificado'}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-text-dark mb-2">Miembro desde</h3>
                    <p className="text-text-light">
                      {new Date(user?.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {user?.address && (
                  <div>
                    <h3 className="font-medium text-text-dark mb-2">Dirección</h3>
                    <p className="text-text-light">
                      {user.address.street && `${user.address.street}, `}
                      {user.address.city && `${user.address.city}, `}
                      {user.address.postalCode && `${user.address.postalCode}, `}
                      {user.address.country || 'España'}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Panel lateral */}
        <div className="space-y-6">
          {/* Estadísticas del usuario */}
          <div className="card bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
            <h3 className="text-xl font-bold mb-4">Tu Actividad</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Pedidos realizados:</span>
                <span className="font-bold">0</span>
              </div>
              <div className="flex justify-between">
                <span>Total gastado:</span>
                <span className="font-bold">0€</span>
              </div>
              <div className="flex justify-between">
                <span>Estado:</span>
                <span className="font-bold">Cliente</span>
              </div>
            </div>
          </div>

          {/* Acciones rápidas */}
          <div className="card">
            <h3 className="text-lg font-bold mb-4 text-text-dark">
              Acciones Rápidas
            </h3>
            <div className="space-y-3">
              <Link
                to="/dashboard"
                className="block w-full px-4 py-2 bg-accent-color text-white rounded-lg hover:bg-opacity-90 transition-colors text-center"
              >
                Ir al Dashboard
              </Link>
              <Link
                to="/cart"
                className="block w-full px-4 py-2 border-2 border-accent-color text-accent-color rounded-lg hover:bg-accent-color hover:text-white transition-colors text-center"
              >
                Ver Carrito
              </Link>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>

          {/* Preferencias */}
          <div className="card">
            <h3 className="text-lg font-bold mb-4 text-text-dark">
              Preferencias
            </h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked={user?.preferences?.newsletter}
                  className="mr-2"
                />
                <span className="text-sm text-text-dark">Recibir newsletter</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked={user?.preferences?.notifications}
                  className="mr-2"
                />
                <span className="text-sm text-text-dark">Notificaciones push</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile