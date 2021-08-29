import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'tu mama es maraca y era',
    'el diego esta funao por algo',
    'le quiero pegar a osvaldo',
    'todos quieren pegarle a osvaldo',
    'arch es para weones',
    'legalizen a las de 8'
  ]
  const random = () => () => {
    setSelected({...selected,select_id: Math.floor(Math.random()*anecdotes.length)})
  }
  const vote = (Id) => () => {
    const copy = {...selected.point}
    copy[Id] += 1
    setSelected({...selected, point: copy})
  }
  const [selected, setSelected] = useState({
    select_id:0,
    text: anecdotes,
    point: Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)
  })

  return(
    <div>
      <button onClick={random()}> cambia la wea </button>
      <button onClick={vote(selected.select_id)}> Votar </button>
      <p>{anecdotes[selected.select_id]}</p>
      
      <p>tiene {selected.point[selected.select_id]} votos</p>
    </div>
  )

}
export default App
