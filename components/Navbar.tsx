import React from 'react'
import { FloatingNav } from './ui/floating-navbar';

export default function Navbar() {
    const navItems = [
        {
          name: "Home",
          link: "/",
          // Optionally, you can include an icon for each item
          icon: <span>🏠</span>, // Example icon
        },
        {
          name: "About",
          link: "/about",
          icon: <span>📚</span>, // Example icon
        },
        {
          name: "Contact",
          link: "/contact",
          icon: <span>📧</span>, // Example icon
        },
        // Add more items as needed
     ];
  return (
    <>
      <FloatingNav navItems={navItems} />
    </>
  )
}
