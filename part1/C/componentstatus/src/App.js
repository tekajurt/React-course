const Hello = ({ name, age}) => {
  const bornYear = () => new Date().getFullYear() - props.age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

function App() {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greetins</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />
    </div>
  );
}

export default App;
