"use client"
import Image from 'next/image';
import React from 'react';
import Shopezo from '@/public/Shopezo.svg';
import { BiSearch } from 'react-icons/bi';
import { SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';


export default function Header() {
 return (
    <header>
      <div>
        <Image src={Shopezo} alt="logo" height={100} width={100} />
      </div>
      <div className='flex items-center'>
        <div className='relative'>
          <input type="text" className='space-x-2 pl-10' placeholder="Search..." />
          <BiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2' size={20} />
        </div>
      </div>
      <div className='flex justify-center item-center space-x-2 px-2 text-center bg-[#be9696]'>
        <SignedOut>
          <button className=' p-2 m-4 rounded-md bg-black text-white '>
            <SignInButton afterSignInUrl='/dashboard' mode="modal"/>
          </button>
        </SignedOut>

        <SignedIn>
          <button className=' p-2 m-4 rounded-md '>
            <SignOutButton  />
          </button>
        </SignedIn>
        <div className='items-center flex'>
        <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
 );
}
