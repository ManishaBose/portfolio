import './App.css'
import { About } from './components/About/About'
import { Education } from './components/Education/Education'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'

function App() {
 
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Education/>
      <Projects/>
    </>
  )
}

export default App
