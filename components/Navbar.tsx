import React from 'react'
import { FloatingNav } from './ui/floating-navbar';
import Link from 'next/link';

export default function Navbar() {
    const navItems = [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        // Add more items as needed
     ];
  return (
    <>
      <nav>
        <ul>
          <li><Link href={"/"} >Home</Link></li>
          <li><Link href={"/"} >About</Link></li>
          <li><Link href={"/"} ></Link></li>
          <li><Link href={"/"} ></Link></li>
          <li><Link href={"/"} ></Link></li>
        </ul>
      </nav>
    </>
  )
}
