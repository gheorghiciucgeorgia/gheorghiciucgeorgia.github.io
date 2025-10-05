
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


      {/* <ProjectCard colorFrame="var(--accent-color)" className="w-[400px]" title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat." imageUrl="/assets/placeholder-img-card.png" /> */}

      {/* <Footer></Footer> */}
    </>
  )
}

export default App
