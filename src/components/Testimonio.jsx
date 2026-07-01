// src/components/TestimonioCarrusel.jsx
import { useState, useEffect } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonios = [
  { content: "Entrenar aquí cambió mi vida. Los entrenadores son increíbles.", author: "María G." },
  { content: "La mejor decisión fue unirme a FitnessPro. ¡Resultados reales!", author: "Carlos R." },
  { content: "Ambiente motivador y equipos de primera. 100% recomendado.", author: "Laura M." },
  { content: "He probado varios gimnasios, pero este es el único donde veo resultados.", author: "Javier P." },
  { content: "Vo sai po", author: "Angelo Z." },
  { content: "Soy programador", author: "Yotsua C." },
]

export default function TestimonioCarrusel() {
  const [index, setIndex] = useState(0)

  const siguiente = () => setIndex((prev) => (prev + 1) % testimonios.length)
  const anterior = () => setIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length)

  useEffect(() => {
    const intervalo = setInterval(siguiente, 6000)
    return () => clearInterval(intervalo)
  }, [])

  const testimonio = testimonios[index]

  return (
    <section className="bg-dark-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="testimonio-box position-relative">
              <FaQuoteLeft className="mb-3" size={32} color="#F4A261" />
              <p className="fs-4 fst-italic mb-2 text-white">"{testimonio.content}"</p>
              <p className="fw-bold text-light mb-0">— {testimonio.author}</p>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <button className="btn btn-outline-secondary btn-sm" onClick={anterior}>
                  <FaChevronLeft />
                </button>
                <span className="text-muted">{index + 1} / {testimonios.length}</span>
                <button className="btn btn-outline-secondary btn-sm" onClick={siguiente}>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}