import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import Pizza from './components/Pizza.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card/>
    <Pizza/>
    
    </>
  )
}

export default App
