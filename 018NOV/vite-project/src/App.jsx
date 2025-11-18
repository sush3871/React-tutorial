import './App.css'
import EnhancedComponent from './components/Greet'
// import EnhancedComponent from './components/Greet'
// import Parent from './components/Parent'
// import { CarProvider } from './contexts/CarContext'
// import { UserProvider } from './contexts/UserContext'

import React, {useState} from 'react'
import Modal from './components/Modal'
function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    {/* <UserProvider>
      <CarProvider>
      <Parent />
      </CarProvider>
    </UserProvider> */}

{/* <EnhancedComponent name = "sushant" /> */}

      {/* <div>
        hi
        <Modal isOpen={isModalOpen}>
          <h1>IHIHI i am modal</h1>
        <button onClick={() => setIsModalOpen(false)}>close</button>

        </Modal>

        <button onClick={() => setIsModalOpen(true)}>open</button>
      </div> */}
    </>
  )
}

export default App
