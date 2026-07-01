import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>FitnessPro</h5>
            <p className="text-muted">Entrenamiento de calidad para todos los niveles.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Ubicaciones</h5>
            <ul className="list-unstyled text-muted">
              <li><FaMapMarkerAlt className="me-2" /> Av. Siempreviva 742, Santiago</li>
              <li><FaMapMarkerAlt className="me-2" /> Calle Falsa 123, Providencia</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <ul className="list-unstyled text-muted">
              <li><FaPhone className="me-2" /> +56 9 1234 5678</li>
              <li><FaEnvelope className="me-2" /> contacto@fitnesspro.cl</li>
            </ul>
          </div>
        </div>
        <hr className="bg-secondary" />
        <p className="text-center text-muted small">
          &copy; {new Date().getFullYear()} FitnessPro - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}