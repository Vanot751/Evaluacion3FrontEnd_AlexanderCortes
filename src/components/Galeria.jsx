// Galeria.jsx (versión mejorada y simplificada)
import { useState, useEffect } from 'react'

const imagenes = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop',
]

export default function Galeria() {
  const [show, setShow] = useState(false)
  const [selectedImg, setSelectedImg] = useState('')

  const openModal = (img) => {
    setSelectedImg(img)
    setShow(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setShow(false)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <section id="galeria" className="bg-dark-section">
      <div className="container">
        <h2 className="section-title">Galería de instalaciones</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          {imagenes.map((img, idx) => (
            <div className="col" key={idx}>
              <img
                src={img}
                className="img-fluid rounded"
                style={{
                  cursor: 'pointer',
                  border: '2px solid var(--fitness-border)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
                onClick={() => openModal(img)}
                alt="Instalación"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(230,57,70,0.3)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal simplificado */}
      {show && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'pointer', // Indica que se puede cerrar
          }}
          onClick={closeModal} // Cerrar al hacer clic en el fondo
        >
          {/* Botón cerrar (X) - se coloca fuera del contenedor de imagen para que no interfiera */}
          <button
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              zIndex: 10000,
              fontSize: '2rem',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              textShadow: '0 0 10px rgba(0,0,0,0.8)',
            }}
            onClick={(e) => {
              e.stopPropagation() // Evitar que el clic en el botón cierre el modal dos veces
              closeModal()
            }}
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Contenedor de la imagen - sin eventos que interfieran */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '95vw',
              maxHeight: '90vh',
              pointerEvents: 'none', // Permite que los clics pasen al overlay
            }}
          >
            <img
              src={selectedImg}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
                pointerEvents: 'none', // Asegura que los clics en la imagen no interfieran
              }}
              alt="Ampliación"
            />
          </div>
        </div>
      )}
    </section>
  )
}