import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)

  return (
    
<div className="page">
  <h1>СЧЁТЧИК</h1>

  <div className="main-container">
    <div className="counter">
      <p className="text">{value}</p>
    </div>

    <div className="buttons-container">
      <button onClick={() => setValue(value + 1)} className="button1">+</button>
      <button onClick={() => setValue(value - 1)} className="button2">-</button>
    </div>
  </div>
</div>

  )
}

export default App
