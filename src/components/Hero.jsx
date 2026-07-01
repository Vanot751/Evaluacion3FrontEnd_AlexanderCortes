import heroBg from '../assets/hero-bg.jpg'

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="text-white d-flex align-items-center" 
      style={{
        minHeight: '80vh',
        backgroundImage: `
          radial-gradient(circle at 30% 40%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%),
          url(${heroBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container h-100 d-flex align-items-center">
        <div className="row w-100">
          <div className="col-lg-7 mx-auto text-center">
            <h1 
              className="display-3 fw-bold" 
              style={{ 
                textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)',
                letterSpacing: '-0.02em'
              }}
            >
              Transforma tu cuerpo
            </h1>
            <p 
              className="lead my-4" 
              style={{ 
                textShadow: '0 2px 20px rgba(0,0,0,0.8)',
                fontSize: '1.3rem'
              }}
            >
              Entrena con los mejores profesionales en un ambiente motivador.
              Clases grupales, pesas y mucho más.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="#planes" className="btn btn-primary btn-lg px-5 py-3 fw-bold">
                Ver planes
              </a>
              <a href="#contacto" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold border-2">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}