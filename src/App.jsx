import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RamdonUsers } from "./Components/RamdonUsers";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Consumiendo APIs</h1>
      <RamdonUsers/>
    </div>
  )
}

export default App
