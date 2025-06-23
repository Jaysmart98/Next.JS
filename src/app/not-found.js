import React from 'react'
import Link from 'next/link'

const notfound = () => {

  return (
    <div className='flex flex-col item-center justify-center min-h-screen p-4'>
      <h1 className='text-4xl font-bold mb-4'>404</h1>
      <p className='text-xl'>This page could not be found</p>
      <Link href="/" className='mt-6 px-4 py-2 bg-blue-500 text-white rounded'>Return Home</Link>
    </div>
  )
}

export default notfound
 