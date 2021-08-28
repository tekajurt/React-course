// ejercicio 1.7
import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  
  const [click, setClick] = useState({
    good:0,
    neutral:0,
    bad:0,
    all:0
  })
  const [stats, setStats] = useState({
    avg:0,
    pos:0
  })
    
  const handleGood = () => {
    setClick({...click, good: click.good + 1, all: click.all + 1})
    setStats({...stats, avg: (click.good-click.bad)/click.all})
  }
  const handleNeutral = () => { 
    setClick({...click, neutral: click.neutral + 1, all: click.all + 1})
    setStats({...stats, avg: (click.good-click.bad)/click.all})

  }
  const handleBad = () => { 
    setClick({...click, bad: click.bad + 1, all: click.all + 1})
    setStats({...stats, avg: (click.good-click.bad)/click.all})

  }

  
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
      <Display text='Good' count={click.good} />
      <Display text='Neutral' count={click.neutral} />
      <Display text='Bad' count={click.bad} />
      <Display text='All' count={click.all}  />
      <Display text='Avg' count={stats.avg} />
      
    </div>
  )
}

export default App
