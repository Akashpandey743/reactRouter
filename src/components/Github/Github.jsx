import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Akashpandey743")
    //     .then(res => res.json())
    //     .then(res => {
            
    //         setData(res)
    //     })
    //     console.log(data)
    // }, [])
  return (
    <div className="texr-center text-white m-5 p-5
    bg-gray-700 text-3xl">
      Github followers:{data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
   const response = await  fetch("https://api.github.com/users/Akashpandey743")
   return response.json()
}
