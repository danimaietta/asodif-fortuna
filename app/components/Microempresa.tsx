import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import microempresa1 from '../assets/microempresa-1.jpg'
import microempresa2 from '../assets/microempresa-2.jpg'
import microempresa3 from '../assets/microempresa-3.jpg'
import microempresa4 from '../assets/microempresa-4.jpg'
import microempresa5 from '../assets/microempresa-5.jpg'
import microempresa6 from '../assets/microempresa-6.jpg'
import microempresa7 from '../assets/microempresa-7.jpg'
import microempresa8 from '../assets/microempresa-8.jpg'
import microempresa9 from '../assets/microempresa-9.jpg'
import microempresa10 from '../assets/microempresa-10.jpg'
import microempresa11 from '../assets/microempresa-11.jpg'
import microempresa12 from '../assets/microempresa-12.jpg'
import microempresa13 from '../assets/microempresa-13.jpg'
import microempresa14 from '../assets/microempresa-14.jpg'
import microempresa15 from '../assets/microempresa-15.jpg'


const inputClass = "border-[#2F4F2F] transition-all duration-300 ease-in-out hover:border-[#1C1C1C] focus:border-[#1C1C1C] focus:ring-2 focus:ring-[#1C1C1C]"

const images = [
  microempresa1,
  microempresa2,
  microempresa3,
  microempresa4,
  microempresa5,
  microempresa6,
  microempresa7,
  microempresa8,
  microempresa9,
  microempresa10,
  microempresa11,
  microempresa12,
  microempresa13,
  microempresa14,
  microempresa15
]

export function Microempresa() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <div className="h-12 w-32 mx-auto bg-[#2F4F2F] rounded" />
        <h2 className="text-2xl font-bold text-[#2F4F2F]">Microempresa Fortuna Guanacaste</h2>
        <p className="max-w-3xl mx-auto text-[#1C1C1C]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="aspect-square bg-[#1C1C1C]/10 rounded-lg">
            <Image 
              src={images[i]}
              alt="Description"
              className="aspect-square bg-[#1C1C1C]/10 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              width={400}
              height={400}
              onClick={() => {
                setCurrentImageIndex(i);
                setIsModalOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-[80%] flex items-center">
            <button
              className="absolute top-4 right-4 text-white text-5xl z-10"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <button
              className="text-white text-7xl font-bold hover:text-white/80 transition-colors px-6"
              onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
            >
              ←
            </button>
            <div className="relative aspect-video flex-1 scale-55">
              <Image
                src={images[currentImageIndex]}
                alt="Modal view"
                fill
                className="object-contain"
              />
            </div>
            <button
              className="text-white text-7xl font-bold hover:text-white/80 transition-colors px-6"
              onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-12">
        <div className="grid grid-cols-3 gap-4 col-span-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-video bg-[#2F4F2F]/20 rounded" />
          ))}
        </div>
        <Card className="bg-[#2F4F2F]">
          <CardContent className="p-4 space-y-4">
            <Input placeholder="Nombre" className={cn(inputClass, "bg-white/10 text-white placeholder:text-white/70")} />
            <Input placeholder="Correo" className={cn(inputClass, "bg-white/10 text-white placeholder:text-white/70")} />
            <Input placeholder="Teléfono" className={cn(inputClass, "bg-white/10 text-white placeholder:text-white/70")} />
            <Textarea placeholder="Dejenos un mensaje" className={cn(inputClass, "bg-white/10 text-white placeholder:text-white/70")} />
            <Button variant="secondary" className="w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-[#2F4F2F]">
              Mail
            </Button>
          </CardContent>
        </Card>
      </footer>
    </section>
  )
} 