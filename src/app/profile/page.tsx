'use client'

import axios from 'axios'
import { get } from 'http'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {
  const [user , setUser] = useState([])

  const getProfile = async()=>{
    try {
      const response = await axios.post('/api/users/me')
      console.log(response.data)
      setUser(response.data.data)
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getProfile()
  },[])

  return (
    <div className='flex items-center justify-center h-screen'>
      {
        user && (
          <div className=''>
          <h2 className='text-4xl'>User Name: {user.username}</h2>
          <h2 className='text-4xl'>Email: {user.email}</h2>
          <h2 className='text-4xl'>id: {user._id}</h2>

        </div>
        )
      }
    </div>
  )
}

export default page

