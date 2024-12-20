"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import logo from '../assets/logo.png'

export function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#2F4F2F] text-white transition-all duration-500 ease-in-out">
      <div className={`container mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${scrollY > 0 ? 'py-2' : 'py-6'}`}>
        <Image 
            className={`bg-white/20 rounded transition-all duration-500 ease-in-out transform ${scrollY > 0 ? 'h-8 w-32' : 'h-12 w-48'}`}
            src={logo} 
            alt="logo" 
            width={250}
            height={100} 
        />
        <div className="flex gap-6">
          <button className={`font-semibold hover:text-[#FFDF00] transition-all duration-500 ease-in-out transform ${scrollY > 0 ? 'text-lg' : 'text-2xl'}`}>
            Fortuna Guanacaste
          </button>
          <button className={`font-semibold hover:text-[#FFDF00] transition-all duration-500 ease-in-out transform ${scrollY > 0 ? 'text-lg' : 'text-2xl'}`}>
            Tour Volcán
          </button>
          <button className={`font-semibold hover:text-[#FFDF00] transition-all duration-500 ease-in-out transform ${scrollY > 0 ? 'text-lg' : 'text-2xl'}`}>
            Microempresa
          </button>
        </div>
      </div>
    </header>
  )
} 