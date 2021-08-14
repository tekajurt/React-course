import React from 'react'

const Content = (arg) => {
  return (
    <div>
      <p>{arg.part1} {arg.exercises1}</p>
      <p>{arg.part2} {arg.exercises2}</p> 
      <p>{arg.part3} {arg.exercises3}</p>  
    </div>
  )
}
export default Content
