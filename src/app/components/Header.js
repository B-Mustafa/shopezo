"use client"
import Image from 'next/image';
import React from 'react';
import Shopezo from '../../../public/Shopezo.svg';
import {  BiCart, BiDotsVertical, BiSearch } from 'react-icons/bi';
import { SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import Link from 'next/link';
import { BsCart, BsShop } from 'react-icons/bs';


export default function Header() {
 return (
      <div className=' flex justify-between'>
    <header className='flex  items-center justify-between px-2 h-[67px] flex-grow'>
      <div className='flex items-center '>
        <Link href={"/"}>
        <Image src={Shopezo} alt="logo" className='h-[100px] w-[160px] flex p-4 ' />
        </Link>
        <div className='relative'>
          <input type="text" className='space-x-2 pl-10 p-3 border border-gray-400 rounded-md' placeholder="Search..." />
          <BiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2' size={20} />
        </div>
      </div>
      <div className='flex text-center gap-4'>
        <SignedOut>
          <button className=' p-2 m-4 rounded-md bg-black text-white '>
            <SignInButton afterSignInUrl='/' mode="modal"/>
          </button>
        </SignedOut>
        <div className='flex items-center ml-4'>
          <BsCart className='mr-1' size={20}/>
          <Link href="/" className='text-sm'>Cart</Link>
        </div>
        <div className='flex items-center ml-4'>
          <BsShop className='mr-1' size={20}/>
          <Link href="/" className='text-sm'>Become a seller</Link>
        </div>
        <div className='flex items-center ml-4'>
          <Link href="" className='text-xl'><BiDotsVertical/></Link>
        </div>
        <div className='items-center flex'>
        <UserButton afterSignOutUrl="/"  />
        </div>
      </div>
    </header>
  </div>
 );
}