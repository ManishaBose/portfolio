import './App.css'
import { About } from './components/About/About'
import { Education } from './components/Education/Education'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'

function App() {
 
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Education/>
    </>
  )
}

export default App
