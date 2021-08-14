import Header from './Header'
import Content from './Content'
import Total from './Total'
const App = () => {
  const course = 'Half Stack Aplication development'
  const part1 ={
    name: 'Fundamentals of react',
    exercise: 10
  }
  const part2 ={ 
    name: 'Using props to pass data',
    exercise: 7
  }
  const part3 ={
    name: 'State of a component',
    exercise: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1.name}
        part2={part2.name} 
        part3={part3.name}
        exercises1 = {part1.exercise}
        exercises2 = {part2.exercise}
        exercises3 = {part3.exercise}
      />
      <Total exercises1={part1.exercise} exercises2={part2.exercise} exercises3={part3.exercise} />
    </div>
  )
}
export default App

