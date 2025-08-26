import './App.css'
import { useCounter } from './context/Context'

function App() {
  //here we destructured the context, all these items are part of the first layer
  //if we called centrilized it in a single context variable we could access these properties with context.count for example
  const { count, increment, decrement } = useCounter()

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment} style={{ marginLeft: "10px" }}>+</button>
    </div>
  )
}

export default App
