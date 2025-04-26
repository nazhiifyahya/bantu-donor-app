'use client'

import React from 'react'
import Link from 'next/link';

const DonorRequestButton = () => {
  return (
    <Link href='/request-form'>
      <button className="btn btn-error">Isi Formulir</button>
    </Link>
  )
}

export default DonorRequestButton