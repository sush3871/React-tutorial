import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
  const [user , setUSer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchGitUser = async () => {
      try {
        const response = await fetch('https://api.github.com/users/sush3871')
        if(!response.ok){
          throw new Error(`Error Fetching API Url ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        setUSer(data)
        setLoading(false)
      } catch (error) {
        setError("Something went wrong", error)
        setLoading(false)
      }
    }
    fetchGitUser()
  }, []);
  
  if(loading) {
    return <div>Loading the Git User</div>
  }

  if(error) {
    return <div>Something went wrong {error}</div>
  }
  return (
    <div className='border border-blue-500 rounded-xl p-5 bg-white text-black shadow-md flex flex-col items-center'>
      <img src={user.avatar_url} alt={user.name} className='h-[100px] w-[100px] rounded-[100%] border border-red-400'/>
      <h2 className='font-bold text-[2vw]'>{user.name}</h2>
      <a href={user.html_url} target='_blank' className='font-bold p-2 rounded-xl px-5 hover:bg-white hover:text-black hover:border-black border transition bg-black text-white'>Visit Profile </a>
    </div>
  )
}

export default UseEffectHook