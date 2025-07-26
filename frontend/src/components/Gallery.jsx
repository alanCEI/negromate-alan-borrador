import React, { useState } from 'react'

const Gallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-text-dark">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="card cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openModal(image)}
          >
            <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-6xl">
              {image.emoji}
            </div>
            <h3 className="text-xl font-bold mb-2 text-text-dark">
              {image.title}
            </h3>
            <p className="text-text-light">
              {image.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedImage.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-8xl">
              {selectedImage.emoji}
            </div>
            <p className="text-gray-600">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery