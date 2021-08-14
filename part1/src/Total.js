import React from 'react'

const Total = (arg) => {
  //console.log(arg)
  return(
    <p>Number of exercises {arg.parts[0].exercise+arg.parts[1].exercise + arg.parts[2].exercise}  </p>
  )
}
export default Total
