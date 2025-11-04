import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import AboutPage from './components/AboutPage'
import Login from './components/Login'

function MyNewButton() {
  return (
    <button className='text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800'>new button</button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <h1>Welcome to my app</h1>

      {/* <MyButton/> 
      <br />
      <br />
      <MyNewButton/> */}
      <br /><br />
      {/* <AboutPage/> */}
      <br /><br />
      <Login/>
    </>
  )
}

export default App
