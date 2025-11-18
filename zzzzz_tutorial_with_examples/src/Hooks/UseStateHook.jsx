import React, { useState } from 'react'

const UseStateHook = () => {

  const [count, setCount] = useState(0)

  const handleCount = () => {
    if(count >= 20) {
      alert("You Cannot add the values above 20")
    }
    else{
      return setCount(count + 1)
    }
  }
  const handleCountDesc = () => {
    if (count <= 0) {
      alert("You Cannot add the values below 0")
    }
    else{
      return setCount(count - 1)
    }
  }
  return (
    <>
    <h1 className='text-2xl text-red-600 font-bold'>UseState Hook Example</h1>
    <div>Count is {count}</div>
    <div className='flex gap-2 mt-3'>
      
    <button onClick={handleCount}>Increase </button>
    <button onClick={handleCountDesc}>Decrease</button>
    </div>
    </>
  )
}

export default UseStateHook