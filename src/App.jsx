import React, { useEffect, useState } from 'react'
import Die from './components/Die'
import './App.css'
import useWindowSize from 'react-use-window-size'
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(generateDice([]))
  const [tenzies, setTenzies] = useState(false)
  const { width, height } = useWindowSize()

  useEffect(() => {
    if (checkWin()) {
      setTenzies(true)
    }
  }, [dice])

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
    }))
  }

  const reroll = () => {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld === true ?
        die :
        { ...die, value: generateRandomNumber() }

    }))
  }

  const reset = () => {
    setDice(generateDice())
    setTenzies(false)
  }

  function checkWin() {
    return (
      dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)
    )
  }

  return (
    <main>
      {tenzies &&
        <Confetti
          width={width}
          height={height}
        />
      }
      <h1 className='title'>Tenzies</h1>
      <h4 className='subtitle'>Make all the tiles be the same number!</h4>
      <p className='description'>
        Click the tiles to locked their numbers, and keep rolling until you locked all the tiles in the same number.
      </p>
      <div className="die-container">
        {dieElements}
      </div>
      <button
        className='roll-button unselectable'
        onClick={tenzies === true ? reset : reroll}
      >
        {tenzies === true ? "New game" : "Roll"}
      </button>
    </main>
  )
}

export default App
