import React from 'react'
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
        <ul className='flex justify-between p-2'>
          <li><Link href={"/"} >Electronics</Link></li>
          <li><Link href={"/"} >TV & Appliances</Link></li>
          <li><Link href={"/"} >Men </Link></li>
          <li><Link href={"/"} >Women</Link></li>
          <li><Link href={"/"} >Baby & Kids</Link></li>
          <li><Link href={"/"} >Home & Furniture</Link></li>
          <li><Link href={"/"} >Sports , Books & More</Link></li>
          <li><Link href={"/"} >Beaty , Health & Grocery</Link></li>
          <li><Link href={"/"} >Shopezo Offers</Link></li>
        </ul>
      </nav>
    </>
  )
}