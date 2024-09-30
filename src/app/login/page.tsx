'use client'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const page = () => {

  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const onLogin = async()=>{

  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>{loading ? "processing" : "Login"}</h1>
      <hr />
      <label htmlFor="username">email</label>
      <input
        className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
        type="text"
        id='email'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder='email'
      />
      <label htmlFor="username">passsword</label>
      <input
        className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
        type="text"
        id='password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder='password'
      />
      <button onClick={onLogin} className='p-2 border border-gray-300 rounded-lg mb-4 focus:border-gray-600'>{buttonDisabled ? "No signup" : "Signup"}</button>
      <Link href={"/signup"}>Visit SignUp Page</Link>
    </div>
  )
}

export default page