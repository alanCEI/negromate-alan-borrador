// Servicio centralizado para comunicación con la API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL
  }

  // Método genérico para hacer peticiones
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    // Agregar token si existe
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.msg || 'Error en la petición')
      }

      return data
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }

  // === MÉTODOS DE CONTENIDO (NUEVOS) ===
  async getContentByKey(key) {
    return this.request(`/content/key/${key}`)
  }

  async getContentByType(type) {
    return this.request(`/content/type/${type}`)
  }

  async getCompanyInfo() {
    return this.request('/content/key/company-info')
  }

  async getLandingPageContent() {
    return this.request('/content/key/landing-page')
  }

  async getAboutPageContent() {
    return this.request('/content/key/about-page')
  }

  async getContactPageContent() {
    return this.request('/content/key/contact-page')
  }

  async getServiceContent(service) {
    return this.request(`/content/key/${service}-service`)
  }

  // === MÉTODOS EXISTENTES ===
  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    })
  }

  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    })
  }

  async getProducts() {
    return this.request('/products')
  }

  async getProductsByCategory(category) {
    return this.request(`/products/category/${category}`)
  }

  async createOrder(orderData) {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    })
  }

  async getUserOrders() {
    return this.request('/orders/user')
  }

  async sendContactForm(formData) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
  }

  // Método para poblar contenido (desarrollo)
  async seedContent() {
    return this.request('/content/seed', {
      method: 'POST',
    })
  }
}

export default new ApiService()