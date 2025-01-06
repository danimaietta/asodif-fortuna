"use client"

import { useState, useEffect } from "react"
//import fondo from '@assets/fondo3.jpg'
import { FortunaGuanacaste } from "./components/FortunaGuanacaste"
import { TourVolcan } from "./components/TourVolcan"
import { Microempresa } from "./components/Microempresa"
import { Header } from "./components/Header"
import { Contacto } from '@components/Contacto'
import useWindowSize from '@hooks/useWindowSize'
import { HEADER_OPTIONS } from "@constants/data"

export default function Home() {

  const [selected, setSelected] = useState<string>('fortuna')
  const { height } = useWindowSize()
  const totalHeight = height * HEADER_OPTIONS.length

  useEffect(() => {
    document.addEventListener('scroll', () => {
        if(scrollY < height){
            setSelected('fortuna')
        } else if(scrollY <= totalHeight - (height * 2)){
            setSelected('tour')
        } else if(scrollY <= totalHeight - (height)){
            setSelected('microempresa')
        } else {
            setSelected('contacto')
        }
    });

    return () => document.removeEventListener('scroll', () => {})
  })

  const scrollWindow = (section: string) => () => {
    let scrollPosition
    if(section === 'fortuna') scrollPosition = 0
    if(section === 'tour') scrollPosition = 1100
    if(section === 'microempresa') scrollPosition = 2000
    if(section === 'contacto' ) scrollPosition = 3000
    scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }

  /*
    Add this property to div when we have a proper image

      style={{
        backgroundImage: `url(${fondo.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
        
  */

  return (
    <div 
      className="min-h-[350vh]"
    >
      <Header selected={selected} scrollWindow={scrollWindow}/>
      <main className="container mx-auto p-4 space-y-12">
        <FortunaGuanacaste />
        <TourVolcan />
        <Microempresa />
        <Contacto />
      </main>
    </div>
  )
}