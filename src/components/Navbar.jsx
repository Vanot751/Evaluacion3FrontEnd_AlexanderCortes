import { useState } from 'react'
import { FaDumbbell } from 'react-icons/fa'
import './Navbar.css' // si tienes estilos adicionales, sino puedes usar solo App.css

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showReserva, setShowReserva] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: 'var(--fitness-bg)', borderBottom: '1px solid var(--fitness-border)' }}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#inicio" style={{ color: 'var(--fitness-text)' }}>
            <FaDumbbell className="me-2" style={{ color: 'var(--fitness-primary)' }} /> FitnessPro
          </a>
          <button
            className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#clases" onClick={closeMenu} style={{ color: 'var(--fitness-text)' }}>Clases</a></li>
              <li className="nav-item"><a className="nav-link" href="#horarios" onClick={closeMenu} style={{ color: 'var(--fitness-text)' }}>Horarios</a></li>
              <li className="nav-item"><a className="nav-link" href="#disciplinas" onClick={closeMenu} style={{ color: 'var(--fitness-text)' }}>Disciplinas</a></li>
              <li className="nav-item"><a className="nav-link" href="#galeria" onClick={closeMenu} style={{ color: 'var(--fitness-text)' }}>Galería</a></li>
              <li className="nav-item"><a className="nav-link" href="#planes" onClick={closeMenu} style={{ color: 'var(--fitness-text)' }}>Planes</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto" onClick={closeMenu} style={{ color: 'var(--fitness-text)' }}>Contacto</a></li>
            </ul>
            <button className="btn btn-fitness-primary ms-lg-3" onClick={() => { setShowReserva(true); closeMenu(); }}>
              Reservar clase
            </button>
          </div>
        </div>
      </nav>

      {/* Modal de Reserva */}
      <div className={`modal fade ${showReserva ? 'show' : ''}`} style={{ display: showReserva ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Reservar clase</h5>
              <button type="button" className="btn-close" onClick={() => setShowReserva(false)}></button>
            </div>
            <div className="modal-body">
              <p>Próximamente podrás reservar tu clase desde aquí.</p>
              <p>Mientras tanto, escríbenos al <strong>+56 9 1234 5678</strong>.</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowReserva(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}