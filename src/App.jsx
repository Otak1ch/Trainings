import { useState, useEffect, use } from 'react'
import './App.css'
const checkNumber = (num) => {
  if (num % 2 === 0) {
    return num*2
}
else { return (num-1)*2}
}
  
function App() {
  const [value, setValue] = useState(0) 
  useEffect(() => {
    console.log('Значение изменилось:', checkNumber(value));
  }, [checkNumber(value)])



  return (
    
<div className="page">
  <h1>СЧЁТЧИК</h1>

  <div className="main-container">
    <div className="counter">
      <p className="text">{value}</p>
      <p className='text'>{checkNumber(value)}</p>
    </div>

    <div className="buttons-container">
      <button onClick={() => setValue(prev => prev + 1)} className="button1">+</button>
      <button onClick={() => setValue(prev => prev - 1)} className="button2">-</button>
    </div>
  </div>
</div>

  )
}

export default App
