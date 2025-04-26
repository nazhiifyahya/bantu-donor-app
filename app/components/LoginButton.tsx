'use client'

import React from 'react'
import Link from 'next/link'

const LoginButton = () => {
  return (
    <Link href='/login'>
      <button className="btn btn-error">Login</button>
    </Link>
  )
}

export default LoginButton