'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function SidBar() {
    const router = useRouter()
  return (
    <div className='w-64 h-screen border-r-2 flex flex-col items-center gap-2'>
      <div>
        <button className='btn btn-md'>public: schema</button>
      </div>
      <div className='rounded-lg border-2 px-12 py-1'>
        + <button>new table</button>
      </div>
      <div className='flex flex-row'>
        <input className='input input-sm input-bordered' type="search" placeholder="Search..." />
      </div>
      <div className='rounded-lg border-2 px-12 py-1'>
        <button onClick={()=>{
          console.log('company')
          router.push('/company')
        }}>company</button>
      </div>
    </div>
  )
}