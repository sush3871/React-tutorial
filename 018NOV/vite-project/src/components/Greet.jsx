import React from 'react'
import Hoc from './Hoc'

const Greet = ({name}) => {
  return (
    <div>
      name is {name}
    </div>
  )
}

const EnhancedComponent = Hoc(Greet)

export default EnhancedComponent