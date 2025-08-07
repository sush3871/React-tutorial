import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-400 text-black p-4 rounded-xl">
        Hello world!
      </h1>
      <Card
      title="{new}"
      />
    </>
  )
}

export default App
