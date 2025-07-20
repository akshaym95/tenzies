import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import Dices from './Dices.jsx'
import { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid'

function App() {
  const { width, height } = useWindowSize()
  const numberOfDices = 10
  const [dices, setDices] = useState(() => generateDices(numberOfDices))
  const [rollCount, setRollCount] = useState(0)
  const [seconds, setSeconds] = useState(0);
  const [gameWonTime, setGameWonTime] = useState(null);
  const rollButtonRef = useRef(null)
  const gameWon = dices.every(dice => dice.num === dices[0].num) && dices.every(dice => dice.on)

  useEffect(() => {
    if (gameWon) {
      rollButtonRef.current.focus()
      setGameWonTime(seconds)
    }
  },[gameWon])

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup function
  }, []);
  
  function randomNumbers(num) {
    let generatedNumbers = []
    for (let i=1; i<=num; i++) {
      generatedNumbers.push(Math.ceil(Math.random() * 6))
    }
    return generatedNumbers
  }
  
  function generateDices(num) {
    let dices = []
    const numbers = randomNumbers(num)
    for (let i=0; i<numbers.length; i++) {
      dices.push({num: numbers[i], on: false, id: nanoid()})
    }
    return dices
  }
  function toggleDice(id) {
    setDices(prevDices => prevDices.map(dice => dice.id === id ? {...dice, on: !dice.on} : dice))
  }
  function rollDice() {
    if (gameWon) {
      setDices(generateDices(numberOfDices))
      setRollCount(0)
      setSeconds(0)
      setGameWonTime(null)
    }else{
      setDices(prevDices => prevDices.map(dice => dice.on ? dice : {...dice, num: Math.ceil(Math.random() * 6)}))
      setRollCount(prevRollCount => prevRollCount + 1)
    }
  }

  return (
    <div className="app-main">
      {gameWon && <Confetti width={width} height={height} gravity={0.2}/>}
      <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <Dices dices={dices} toggleDice={toggleDice} />
        {gameWon ? <>
        <button className="roll-button" onClick={rollDice} ref={rollButtonRef}>New Game</button>
        <p>You won in {rollCount} {rollCount === 1 ? "roll" : "rolls"} and {gameWonTime} {gameWonTime === 1 ? "second" : "seconds"}! Click the New Game button to play again.</p>
        </> : <>
        <button className="roll-button" onClick={rollDice} ref={rollButtonRef}>Roll</button>
        <p> Roll Counter: {rollCount}</p>
         <p>Time: {seconds} seconds</p>
        </>}
      </div>
  )
}

export default App
