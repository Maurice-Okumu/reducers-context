

import Counter from './components/Counter'
import './App.css'
import { CounterProvider } from './context/index.jsx'
import Tester from './components/Tester.jsx'

function App() {

  return (
    <>
  
      <h1>Context and Reducers</h1>
      <div className="card">
        <CounterProvider>
          <Counter />
          <Tester />
        </CounterProvider>
      </div>
  
       
        
    </>
  )
}

export default App
