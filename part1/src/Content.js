import React from 'react'
import Part from './part.js'
const Content = (arg) => {
  const parts = arg.parts
  // console.log(parts)
  return (
    <div>
      <Part name={parts[0].name} exercise={parts[0].exercise} />
      <Part name={parts[1].name} exercise={parts[1].exercise} />
      <Part name={parts[2].name} exercise={parts[2].exercise} />
    </div>
  )
}
export default Content
