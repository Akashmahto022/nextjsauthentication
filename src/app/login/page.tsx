'use client'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'

const page = () => {

  const router = useRouter() 
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const onLogin = async()=>{
    try {
      setLoading(true)
      const response = await axios.post('/api/users/login', user)
      console.log("user login successfully", response.data)
      router.push("/profile")
    } catch (error:any) {
      console.log(error.message, "error while login the user")
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    }
    else {
      setButtonDisabled(true)
    }
  }, [user])

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
      <button onClick={onLogin} className='p-2 border border-gray-300 rounded-lg mb-4 focus:border-gray-600'>{buttonDisabled ? "No login" : "Login"}</button>
      <Link href={"/signup"}>Visit SignUp Page</Link>
    </div>
  )
}

export default page