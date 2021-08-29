import './App.css';

const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </>
  )
}

const App = () => {
  const age=15
  return (
    <>
      <h1> Greeting</h1>
      <Hello name='Paul' age={17+10} />
      <Hello name='George' age={age} />
    </>
  )
}
export default App;
