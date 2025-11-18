
import React, {useContext} from "react"
import { UserContext } from "../contexts/UserContext"
import { CarContext } from "../contexts/CarContext"
const GrandChild = () => {

  const {user, setUser} = useContext(UserContext)
  const car = useContext(CarContext)

  const handleName = () => {
    setUser({name:'Ravi'} )
    car.brand = "sushant"
  }
  return (
    <div>
        GrandChild
        <p>user {user.name}</p>
        <p>Brand {car.brand}</p>
        <button onClick={handleName}>change name</button>
    </div>
  )
}

export default GrandChild