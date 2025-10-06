
import './App.css'
import Header from './components/Header/Header.tsx';
import Hero from './sections/Hero/Hero.tsx';
import AboutMe from './sections/AboutMe/AboutMe.tsx';
import Skills from './sections/Skills/Skills.tsx';
import Projects from './sections/Projects/Projects.tsx';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />

      {/* Buttons components examples bellow */}

      {/* <Button name='cv-btn' text='View CV' colorText='var(--secondary-color)' colorFrame='var(--secondary-color)' />
      <Button name='card-btn' text='View More' />
      <Button name='contact-btn' text='Contact Me' /> */}


      {/* <Footer></Footer> */}
    </>
  )
}

export default App
