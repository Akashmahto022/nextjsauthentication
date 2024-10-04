'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {
  const router = useRouter()
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

  const logout = async()=>{
    try {
      const response = await axios.get('/api/users/logout')
      toast.success("logout successfully")
      router.push('/login')
    } catch (error:any) {
      console.log(error.message)
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
          <h2 className='text-4xl m-8'>User Name: <span className='bg-slate-600 p-2 rounded-md'> {user.username}</span></h2>
          <h2 className='text-4xl m-8'>Email: <span className='bg-slate-600 p-2 rounded-md'>{user.email}</span></h2>
          <h2 className='text-4xl m-8'>id: <span className='bg-slate-600 p-2 rounded-md'>{user._id}</span></h2>

          <button onClick={logout} className='bg-blue-700 rounded-lg p-3 font-bold m-8'>Logout</button>
        </div>
        )
      }
    </div>
  )
}

export default page

