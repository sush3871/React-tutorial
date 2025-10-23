import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { useState } from 'react'
function Login() {

    const[userName, setUserName] = useState("")
    const[pass, setPass] = useState('')

    const {setUser} = useContext(UserContext)

    const onSubmit = (e) => {
        e.preventDefault();
        setUser({name: userName, password: pass})
        console.log("Submitted", userName, pass);
    }

  return (
    <div>
        <h2>Login</h2>
        <input
         type="text"
         placeholder='Username'
         value={userName}
         onChange={(e) => setUserName(e.target.value)}

          />
          <input 
          type="password" 
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          />
          <button type="button" onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Login