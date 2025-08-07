import { useState } from 'react'
import './App.css'
import UserList from './Userlist'
import UserInput from './UserInputs'
import Greeting from './Greeting'
import Fruits from './Fruits'
import Formhandling from './Formhandling'
import FocusInput from './FocusInput'
import Garage from './Garage'


function App() {
    const [count, setCount] = useState(10)
    const add = () => {
      if(count < 20){
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)

      }
    }
    const substract = () => {
      if(count > 0){
        setCount( count - 1)
      }
    }

    const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
    <h1>simple  Counter </h1>
    <h2>count: {count} </h2>
    <button onClick={add}>Add</button>
    <button onClick={substract}>Subtract</button>
    <footer>
      <p>Counter: {count}</p>
    </footer>

    {/* < UserList />
    <UserInput />
    <Greeting isLoggedIn={loggedIn} />
    <Fruits/> 
    <Formhandling/>
    <FocusInput/>
    <Garage/> */}
    </>
  )
}

export default App
