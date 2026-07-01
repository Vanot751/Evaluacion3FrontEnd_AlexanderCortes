export default function Planes() {
  return (
    <section id="planes" className="bg-dark-section">
      <div className="container">
        <h2 className="section-title">Planes de membresía</h2>
        <div className="table-responsive">
          <table className="table table-fitness text-center align-middle">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Precio mensual</th>
                <th>Acceso a clases</th>
                <th>Entrenador personal</th>
                <th>Beneficios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Básico</strong></td>
                <td>$25.000</td>
                <td>✅</td>
                <td>❌</td>
                <td>Acceso ilimitado a sala de pesas</td>
              </tr>
              <tr className="plan-destacado">
                <td><strong>Estándar</strong></td>
                <td>$40.000</td>
                <td>✅</td>
                <td>❌</td>
                <td>Clases grupales ilimitadas</td>
              </tr>
              <tr>
                <td><strong>Premium</strong></td>
                <td>$60.000</td>
                <td>✅</td>
                <td>✅</td>
                <td>Entrenador personal + seguimiento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}