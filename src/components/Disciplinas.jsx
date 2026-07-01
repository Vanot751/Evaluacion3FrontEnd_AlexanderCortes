import { useState } from 'react'

const disciplinas = [
  { id: 1, titulo: '🏃 Running', desc: 'Mejora tu capacidad cardiovascular. Entrenamientos al aire libre y en cinta.' },
  { id: 2, titulo: '🏋️ Pesas', desc: 'Entrenamiento de fuerza con pesas, máquinas y ejercicios funcionales.' },
  { id: 3, titulo: '🧘 Yoga', desc: 'Sesiones de yoga para flexibilidad, relajación y conexión cuerpo-mente.' },
  { id: 4, titulo: '🚴 Ciclismo', desc: 'Clases de spinning de alta intensidad para quemar calorías.' },
]

export default function Disciplinas() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="disciplinas" className="bg-dark-section">
      <div className="container">
        <h2 className="section-title">Disciplinas</h2>
        <div className="accordion accordion-fitness" id="accordionDisciplinas">
          {disciplinas.map((item) => (
            <div className="accordion-item" key={item.id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openId === item.id ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={openId === item.id}
                >
                  {item.titulo}
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${openId === item.id ? 'show' : ''}`}>
                <div className="accordion-body">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}