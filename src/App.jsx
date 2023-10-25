import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Component/Main'
import Header from './Component/Header'
import Section from './Component/Section'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Main/>
       <Section/>
       <Footer/>
    </>
  )
}

export default App
