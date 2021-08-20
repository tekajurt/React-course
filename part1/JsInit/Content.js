import React from 'react'
import Part from './part.js'
const Content = (arg) => {
  
  // console.log(parts)
  return (
    <div>
      <Part name={arg.parts[0].name} exercise={arg.parts[0].exercises} />
      <Part name={arg.parts[1].name} exercise={arg.parts[1].exercises} />
      <Part name={arg.parts[2].name} exercise={arg.parts[2].exercises} />
    </div>
  )
}
export default Content
