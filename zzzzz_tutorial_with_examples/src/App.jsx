import React from 'react'
import UseStateHook from './Hooks/UseStateHook'

const App = () => {
  return (
    <>
    <div className='text-center flex flex-col justify-center items-center'>
      <UseStateHook />
      <hr className='border-1 border-light mt-5 w-[100%] block' />
    </div>
    </>
  )
}

export default App