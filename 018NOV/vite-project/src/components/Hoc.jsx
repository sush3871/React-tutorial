import React from 'react'

const Hoc = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    console.log(`The name of the function is ${WrappedComponent.name}`);

    return <WrappedComponent {...props} />
    
  }
}

export default Hoc