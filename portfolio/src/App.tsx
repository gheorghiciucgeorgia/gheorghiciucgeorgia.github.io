
import './App.css'
// import Header from './components/Header/Header.tsx';
import Button from './components/Button/Button.tsx';

function App() {

  return (
    <>
      {/* <Header /> */}
      <Button name='cv-btn' text='View CV' colorText='var(--secondary-color)' colorFrame='var(--secondary-color)' />
      <Button name='card-btn' text='View More' />
      <Button name='contact-btn' text='Contact Me' />
    </>
  )
}

export default App
