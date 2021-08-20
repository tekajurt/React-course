const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  resume (
    <div>
      <div> {counter} </div>
      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}
