import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout, signup } from './store/authSlice'
import { HomePage } from './HomePage'

function App() {
  const { user, isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const dummyUser = {
    name: 'Sushant Shirke',
    email: 'sushanrshirke96@gmail.com',
  }

  return (
    <HomePage/>
  )
}

export default App
