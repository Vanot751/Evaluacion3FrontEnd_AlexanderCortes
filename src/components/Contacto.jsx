import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [errors, setErrors] = useState({})
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.'
    if (!form.email.trim()) {
      newErrors.email = 'El correo es obligatorio.'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Correo inválido.'
    }
    if (!form.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio.'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setEnviado(true)
      setForm({ nombre: '', email: '', mensaje: '' })
      setErrors({})
      setTimeout(() => setEnviado(false), 5000)
    }
  }

  return (
    <section id="contacto" className="bg-dark-section">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            {enviado && <div className="alert alert-success">¡Mensaje enviado con éxito!</div>}
            <form className="form-fitness" onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                <input
                  type="text"
                  className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                />
                {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                  className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  value={form.mensaje}
                  onChange={handleChange}
                ></textarea>
                {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
              </div>
              <button type="submit" className="btn btn-fitness-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}