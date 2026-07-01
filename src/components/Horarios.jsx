export default function Horarios() {
  return (
    <section id="horarios" className="bg-dark-section">
      <div className="container">
        <h2 className="section-title">Horarios de clases</h2>
        <div className="table-responsive">
          <table className="table table-fitness">
            <thead>
              <tr>
                <th>Día</th>
                <th>Hora</th>
                <th>Clase</th>
                <th>Instructor</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Lunes</td><td>08:00 - 09:00</td><td>Yoga</td><td>María</td></tr>
              <tr><td>Lunes</td><td>18:00 - 19:00</td><td>Pesas</td><td>Carlos</td></tr>
              <tr><td>Martes</td><td>07:00 - 08:00</td><td>Running</td><td>Juan</td></tr>
              <tr><td>Miércoles</td><td>09:00 - 10:00</td><td>Yoga</td><td>María</td></tr>
              <tr><td>Jueves</td><td>18:00 - 19:00</td><td>Pesas</td><td>Carlos</td></tr>
              <tr><td>Viernes</td><td>07:00 - 08:00</td><td>Running</td><td>Juan</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}