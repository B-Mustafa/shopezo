import React from 'react'
import Sidebar from "../../../components/backend/Sidebar";
import Header from '@/components/backend/Header';

export default function layout({children}) {
  return (
    <div className='flex'>
      {/* sidebar */}

            <Sidebar/>
        

      {/* main content */}
        <div className='w-full'>
            {/* header */}
            <Header/>
            {/* main body content */}
            <main className='ml-60 p-8 bg-slate-900 text-slate-50 min-h-screen mt-16'>
                {children}
            </main>
        </div>
    </div>
  )
}
