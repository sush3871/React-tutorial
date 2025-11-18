import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  const handleCount = () => {
    if (count < 0) {
      alert("You Cannot add the values below 0")
    }
    else if(count >= 20) {
      alert("You Cannot add the values above 20")
    }
    else{
      return setCount(count + 1)
    }
  }
  return (
    <>
    <div>Count is {count}</div>

    <button onClick={handleCount}>Increase {count}</button>
    </>
  )
}

export default App