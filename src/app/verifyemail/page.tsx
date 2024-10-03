'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [token, setToken] = useState("")
  const [verify, setVerify] = useState(false
  )
  const [error, setError] = useState(false)

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token })
      setVerify(true)

    } catch (error: any) {
      setError(true)
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1]
    setToken(urlToken || "")
  }, [])

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail()
    }
  }, [token])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-4xl'>verify email</h1>
      <h1 className='p-2 bg-orange-500 text-black'>
        {token ? `${token}` : "no token"}
      </h1>
      {verify && (
        <div>
          <h2>Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
        </div>
      )}
    </div>
  )
}

export default page