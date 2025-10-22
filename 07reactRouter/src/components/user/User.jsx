import React from 'react'
import { useParams } from 'react-router-dom'

function User( ) {

    const params = useParams();
  return (
    <div className='bg-gray-700 p-4 text-3xl text-white text-center'>User: {params.userId} </div>
  )
}

export default User