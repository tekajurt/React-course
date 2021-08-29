// ejercicio 1.7
import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  
  const [click, setClick] = useState({
    good:0,
    neutral:0,
    bad:0,
    all:0,
    avg:0,
    pos:0
  })
  const onClickGood  = () => setClick({
    ...click,
    good: click.good + 1,
    all: click.all + 1,
    avg: (click.good - click.bad + 1)/(click.all + 1),
    pos: ((click.good/(click.all + 1))*100)+'%'
  })
  const onClickNeutral = () => setClick({
    ...click,
    neutral: click.neutral + 1,
    all: click.all + 1,
    avg: (click.good - click.bad)/(click.all + 1),
    pos: ((click.good/(click.all + 1))*100)+'%'
  })
  const onClickBad = () =>  setClick({
    ...click,
    bad: click.bad + 1,
    all: click.all + 1,
    avg: (click.good - click.bad - 1)/(click.all + 1),
    pos: ((click.good/(click.all + 1))*100)+'%'
  })
  
  const Display  = ({text, count}) =>{
    return <p> {text} : {count} </p>
  }
  return (
    <div>
      <h1> give feedback </h1>
      <button onClick={() => onClickGood()}> Good </button>
      <button onClick={() => onClickNeutral()}> Neutral </button>
      <button onClick={() => onClickBad()}> Bad </button>
      
      <h1> Statistics </h1> 
      <Display text='Good' count={click.good} />
      <Display text='Neutral' count={click.neutral} />
      <Display text='Bad' count={click.bad} />
      <Display text='All' count={click.all}  />
      <Display text='Avg' count={click.avg} />
      <Display text='Pos' count={click.pos} /> 
    </div>
  )
}

export default App
