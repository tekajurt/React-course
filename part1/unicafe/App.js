// ejercicio 1.8
import React, { useState } from 'react'
const Statistics  = (props) =>{
  
    console.log(props)
    if(props.click.all === 0) return 'there is no stats'
     
    return(
    <div>
       <h1> Statistics </h1>,
        <p> Good: {props.click.good} </p>
        <p> Neutral: {props.click.neutral} </p>
        <p> Bad: {props.click.bad} </p>
        <p> All: {props.click.all} </p>
        <p> Avg: {props.click.avg} </p>
        <p> Pos: {props.click.pos} </p>
     
      </div>
    ) 
  }
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
    pos: (((click.good + 1)/(click.all + 1))*100)+'%'
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
  
  
  return (
    <div>
      <h1> give feedback </h1>
      <button onClick={() => onClickGood()}> Good </button>
      <button onClick={() => onClickNeutral()}> Neutral </button>
      <button onClick={() => onClickBad()}> Bad </button>
      < Statistics click={click} />
    </div>
  )
}

export default App
