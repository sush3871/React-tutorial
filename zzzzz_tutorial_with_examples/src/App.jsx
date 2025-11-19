import React from 'react'
import UseStateHook from './Hooks/UseStateHook'
import UseEffectHook from './Hooks/UseEffectHook'

const App = () => {
  return (
    <>
    <div className='text-center flex flex-col justify-center items-center'>
      <UseStateHook />
      <hr className='border-1 border-light my-5 w-[100%] block' />
      <UseEffectHook/>
    </div>
    </>
  )
}

export default App