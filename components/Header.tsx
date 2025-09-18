"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

 
 export function Logo() {
   return (
     <Link href="/" className="text-white text-2xl">
       Vibe<span className="text-[#FE8002]">Connect</span>
     </Link>
   );
 }
 
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-black text-white">
      <section className="flex items-center justify-between p-2">
        <Logo />
        <button
          className="px-2.5 py-1 border-1 border-[#ffffff80] rounded-md lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={30} />
        </button>
      </section>

      {isOpen ? (
        <>
          <nav className="mb-4 b">
            <ul>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Events</Link>
              </li>
              <li>
                <Link href="/">Music</Link>
              </li>
              <li>
                <Link href="/">Artworks</Link>
              </li>
            </ul>
          </nav>
          <Link
            className="border-2 border-amber-50 inline-block px-4 rounded-md mr-6 py-1"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="inline-block bg-[#E74C3C]  px-4 py-1 rounded-md mb-6"
            href="/signup"
          >
            Sign Up
          </Link>
        </>
      ) : null}
    </header>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <button
        className="px-2.5 py-1 border-1 border-[#ffffff80] rounded-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={30} />
      </button>
      {isOpen ? (
        <button onClick={() => setIsOpen(false)}></button>
      ) : (
        <p>Menu is closed</p>
      )}
      <button onClick={() => setIsOpen(!isOpen)}>
        <Menu size={26} />
      </button>
    </section>
  );
}

export default Header;
