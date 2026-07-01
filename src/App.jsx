import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clases from './components/Clases'
import Horarios from './components/Horarios'
import Disciplinas from './components/Disciplinas'
import Galeria from './components/Galeria'
import Planes from './components/Planes'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Testimonio from './components/Testimonio'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clases />
        <Horarios />
        <Disciplinas />
        <Galeria />
        <Planes />
        <Testimonio />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App