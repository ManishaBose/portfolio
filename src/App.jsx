import './App.css'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Education } from './components/Education/Education'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'

function App() {
 
  return (
    <div className="bg-gray-100 pl-30 pr-30">
      <div className="bg-white pt-0 p-20 font-serif">
        <Header/>
        <Hero/>
        <About/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
