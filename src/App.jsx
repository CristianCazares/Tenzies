import React, { useEffect, useState } from 'react'
import Die from './components/Die'
import './App.css'

function App() {
  const [dice, setDice] = useState(generateDice([]))
  /*
  useEffect(() => {
    dice.forEach(die => {
      console.log(die)
      if(die.isHeld === false)
        return
    });
    console.log("you win")
  }, [dice])
  */

  function generateRandomNumber() {
    return Math.ceil(Math.random() * 6)
  }

  function generateDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      const die = {
        id: `die${i}`,
        value: generateRandomNumber(),
        isHeld: false
      }
      newDice.push(die)
    }
    return newDice
  }

  const dieElements = dice.map(die =>
    <Die
      key={die.id}
      number={die.value}
      isHeld={die.isHeld}
      handleClick={() => holdDie(die.id)}
    />
  )

  function holdDie(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    })
    )
  }

  const reroll = () => {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld === true ?
        die :
        {...die, value : generateRandomNumber()}

    }))
  }




  return (
    <main>
      <div className="die-container">
        {dieElements}
      </div>
      <button
        className='roll-button'
        onClick={reroll}
      >
        Roll
      </button>
    </main>
  )
}

export default App
