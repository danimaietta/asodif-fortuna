"use client"

import { FortunaGuanacaste } from "./components/FortunaGuanacaste"
import { TourVolcan } from "./components/TourVolcan"
import { Microempresa } from "./components/Microempresa"
import { Header } from "./components/Header"

export default function Home() {
  return (
    <div className="min-h-[350vh] bg-white">
      <Header />
      <main className="container mx-auto p-4 space-y-12">
        <FortunaGuanacaste />
        <TourVolcan />
        <Microempresa />
      </main>
    </div>
  )
}