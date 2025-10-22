import React from 'react'
import { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/sush3871")
        .then(response => response.json())
        .then(data =>   {
            console.log(data)
            setData(data);

        })
    }, [])
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data && data.followers}</div>
    <div className="m-auto text-center d-flex justify-center align-center">
        <img src={data && data.avatar_url} alt="" className='d-block m-auto' />
    </div>
    </>
    
  )
}

export default Github