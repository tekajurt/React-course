import React from 'react'

const Total = (arg) => {
  //console.log(arg)
  return(
    <p>Number of exercises {arg.parts[0].exercises+arg.parts[1].exercises + arg.parts[2].exercises} </p>
  )
}
export default Total
