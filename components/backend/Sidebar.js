import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function sidebar() {
  return (
    <div className='bg-slate-700 space-y-6 w-60 h-screen fixed left-0 top-0'>
      <Link href='/dashboard' className='mb-3 text-slate-50 p-3'>
        {/* <Image src='/images/logo.png' width={200} height={200} /> */}
        LOGO
      </Link>
      <div className='space-y-3 flex flex-col'>
        <Link href="#" className='text-white'>
          Dashboard
        </Link>
        <Link href="#" className='text-white'>
          Catalog
        </Link>
        <Link href="#" className='text-white'>
          Customer
        </Link>
        <Link href="#" className='text-white'>
          Market
        </Link>
        <Link href="#" className='text-white'>
          Staff
        </Link>
        <Link href="#" className='text-white'>
          Settings
        </Link>
        <Link href="#" className='text-white'>
          Online Store
        </Link>
      </div>
    </div>
  )
}

export default sidebar
