import { useContext } from 'react'
import GrandChild from './GrandChild'
import { CarContext } from '../contexts/CarContext'

const Child = () => {
  const car = useContext(CarContext)
  return (
    <div>
        Child 
        <p>Hello my name is {car.owener}. My car is {car.name}  model is  {car.model} & the company is {car.brand}</p>
        <GrandChild />
    </div>
  )
}

export default Child