import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField } from './components/TextField'
import ContactForm from './components/ContactForm'
import ContentData  from './components/ContentData'
import CalculationData from './components/CalculationData'
import CenterData from './components/CenterData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ContactForm/>
    {/* <CenterData/> */}
    <ContentData/>
    <CalculationData/>
    </>
  )
}

export default App
