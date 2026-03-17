import './App.css'
import ExampleComponent from './components/ExampleComponent'

function App() {
  const name = 'CHOCO'
  let x = 10
  let y = 20
  return (
    <div>
      <h1>User varb with JSX!</h1>
      <h3>Value of varb is... {name}</h3>
      <h5>JSX is cool, isn't it?</h5>
    </div>
  )
}

export default App
