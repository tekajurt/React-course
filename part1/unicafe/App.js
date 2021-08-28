import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  const Boton = ({handler, text}) =>(
    <button onClick={handler}>
      {text}
    </button>
  )
  const Display = ({text, count}) =>  <p> {text} : {count} </p>

  return (
    <div>
      <h1> give feedback </h1>
      <Boton handler={handleGood} text='Good' />
      <Boton handler={handleNeutral} text='Neutral' />
      <Boton handler={handleBad} text='Bad' />
      
      <h1> Statistics </h1> 
      <Display text='Good' count={good} />
      <Display text='Neutral' count={neutral} />
      <Display text='Bad' count={bad} />

    </div>
  )
}

export default App
