import Navbar  from './components/Navbar'
import Hero from './components/Hero'
import Boxes from './components/Boxes'
import About from './components/About'
import './App.css'

function App() {


  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Boxes />
      <About />
      <Navbar />
    </div>
  )
}

export default App
