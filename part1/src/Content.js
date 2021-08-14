import React from 'react'
import Part from './part.js'
const Content = (arg) => {
  return (
    <div>
      <Part part={arg.part1} exercise = {arg.exercises1} />
      <Part part={arg.part2} exercise = {arg.exercises2} />
      <Part part={arg.part3} exercise = {arg.exercises3} />
    </div>
  )
}
export default Content
