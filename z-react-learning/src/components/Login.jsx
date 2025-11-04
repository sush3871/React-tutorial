import React, { useState } from 'react'
import MyButton from './MyButton'

const Login = () => {
  const [login, setLogin] = useState(false)
  const [input, setInput] = useState('')
  const [password, setPassword] = useState('')

  const userDetails = {
    name: "Sushant",
    email: "sushshirke96@gmail.com",
    password: "sush@1234"
  }

  function handleLogin(e) {
    e.preventDefault()

    let inputVal = input.trim()
    let passVal = password.trim()

    if (inputVal === userDetails.name && passVal === userDetails.password) {
      setLogin(true)
      alert("Login Successful ✅")
    } else {
      alert("Please enter valid credentials ❌")
    }
  }

  return (
    <div>
      <h1>{!login ? "Login" : "Welcome, Sushant!"}</h1>
      <form onSubmit={handleLogin} className='flex flex-wrap gap-3'>
        <input
          type="text"
          className='border-2xl bg-white text-black p-3'
          value={input}
          id='name'
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter name"
        />
        <br /><br />
        <input
          type="password"
          className='border-2xl bg-white text-black p-3'
          value={password}
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <MyButton />
      </form>
    </div>
  )
}

export default Login
