import { useState } from 'react'
import './App.css'
import Title from '../public/components/Title'
import Counter from '../public/components/Counter'
import  anonovo from '../src/assets/anonovo.jpg'
import useCountdown from '../public/Hooks/useCountdown'
function App() {
  const [day, hour, minute,  second] = useCountdown("Jan 1, 2024 00:00:00 ");
  const [count, setCount] = useState(0)

  return (
    <div className='App' style={{backgroundImage: `url(${anonovo})`}}>
      <div className="container">
        <Title title="Contagem regressiva para 2024"/>
        <div className="countdown-container">
        <Counter title="Dias" number={day}/>
        <Counter title="Horas" number={hour}/>
        <Counter title="Minutos" number={minute}/>
        <Counter title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App
