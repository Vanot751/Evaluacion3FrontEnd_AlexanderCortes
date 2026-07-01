import { FaRunning, FaDumbbell, FaYinYang } from 'react-icons/fa'

const clases = [
  { icon: <FaRunning size={40} />, titulo: 'Running', desc: 'Mejora tu resistencia con sesiones de trote y intervalos.' },
  { icon: <FaDumbbell size={40} />, titulo: 'Pesas', desc: 'Gana fuerza y masa muscular con entrenamiento guiado.' },
  { icon: <FaYinYang size={40} />, titulo: 'Yoga', desc: 'Encuentra el equilibrio entre mente y cuerpo.' },
]

export default function Clases() {
  return (
    <section id="clases" className="bg-dark-section">
      <div className="container">
        <h2 className="section-title">Nuestras clases</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {clases.map((clase, idx) => (
            <div className="col" key={idx}>
              <div className="card-fitness h-100 text-center p-3">
                <div className="card-body">
                  <div className="mb-3 text-primary">{clase.icon}</div>
                  <h5 className="card-title">{clase.titulo}</h5>
                  <p className="card-text">{clase.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}