import React, { useState } from 'react'
import Die from './components/Die'
import './App.css'

function App() {
  const [nums, setNums] = useState(generateNumbers())
  const dieElements = nums.map(num => <Die number={num} />)

  function generateNumbers(n) {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6))
  }




  return (
    <main>
      <div className="die-container">
        {dieElements}
      </div>
    </main>
  )
}

export default App
