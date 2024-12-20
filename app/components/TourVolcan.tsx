"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import volcan1 from '../assets/volcan-1.jpg'
import volcan2 from '../assets/volcan-2.jpg'
import volcan3 from '../assets/volcan-3.jpg'
import volcan4 from '../assets/volcan-4.jpg'
import volcan5 from '../assets/volcan-5.jpg'
import volcan6 from '../assets/volcan-6.jpg'
import volcan7 from '../assets/volcan-7.jpg'
import volcan8 from '../assets/volcan-8.jpg'
import volcan9 from '../assets/volcan-9.jpg'

const tours = [
  { 
    id: 1, 
    title: "Tour 1", 
    description: "Experience the beauty of our volcanic landscapes.",
    images: [volcan1, volcan2, volcan3]
  },
  { 
    id: 2, 
    title: "Tour 2", 
    description: "Discover hidden gems in the heart of the volcano.",
    images: [volcan4, volcan5, volcan6]
  },
  { 
    id: 3, 
    title: "Tour 3", 
    description: "Adventure awaits in our thrilling volcano tour.",
    images: [volcan7, volcan8, volcan9]
  },
]

const inputClass = "border-[#2F4F2F] transition-all duration-300 ease-in-out hover:border-[#1C1C1C] focus:border-[#1C1C1C] focus:ring-2 focus:ring-[#1C1C1C]"

function ImageSlider({ images }: { images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Tour image ${index + 1}`}
          fill
          className={cn(
            "object-cover transition-opacity duration-1000",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </div>
  );
}

export function TourVolcan() {
  const [hoveredTour, setHoveredTour] = useState<number | null>(null);

  return (
    <section className="h-screen py-12 border-b">
      <h2 className="text-3xl font-bold text-[#2F4F2F] mb-6 text-center">Tour Volcán</h2>
      <div className="h-[calc(100%-4rem)] grid gap-6 sm:grid-cols-3">
        {tours.map((tour) => (
          <Card 
            key={tour.id} 
            className="bg-white overflow-hidden h-[80vh] flex flex-col"
            onMouseEnter={() => setHoveredTour(tour.id)}
            onMouseLeave={() => setHoveredTour(null)}
          >
            <CardContent className="p-6 flex flex-col h-full relative">
              <h3 className="text-2xl font-semibold text-[#2F4F2F] mb-4">{tour.title}</h3>
              <div className="flex-grow aspect-video bg-[#1C1C1C]/10 rounded mb-4 overflow-hidden">
                <ImageSlider images={tour.images.map(img => img.src)} />
              </div>
              <p className="text-[#1C1C1C] mb-4">{tour.description}</p>
              <form 
                className={cn(
                  "space-y-4 absolute bottom-0 left-0 right-0 bg-white p-6 transition-all duration-300 ease-in-out flex flex-col h-[60%]",
                  hoveredTour === tour.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                )}
              >
                <h4 className="text-xl font-semibold text-[#2F4F2F] mb-4">Reservar {tour.title}</h4>
                <div className="px-4">
                  <Input placeholder="Nombre" className={cn(inputClass, "border-[#2F4F2F]")} />
                </div>
                <div className="px-4">
                  <Input placeholder="Correo" className={cn(inputClass, "border-[#2F4F2F]")} />
                </div>
                <div className="px-4">
                  <Input placeholder="Teléfono" className={cn(inputClass, "border-[#2F4F2F]")} />
                </div>
                <div className="px-4">
                  <h4 className="text-sm font-medium mb-2 text-[#2F4F2F]">Fecha</h4>
                  <div className="grid grid-cols-7 gap-1">
                    {[...Array(7)].map((_, index) => {
                      const date = new Date();
                      date.setDate(date.getDate() + index);
                      const day = date.getDate();
                      const month = date.toLocaleString('default', { month: 'short' });
                      
                      let bgColor = "bg-gray-100";
                      if (index < 2) {
                        bgColor = "bg-red-100 text-red-800";
                      } else if (index >= 2 && index < 7) {
                        bgColor = "bg-green-100 text-green-800";
                      }

                      return (
                        <button
                          key={index}
                          className={`${bgColor} rounded p-2 text-sm hover:opacity-80 transition-opacity flex flex-col items-center`}
                        >
                          <span className="text-xs">{month}</span>
                          <span>{day}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="px-4">
                  <Button className="w-full bg-[#2F4F2F] hover:bg-[#1C1C1C] transition-all duration-300 ease-in-out transform hover:scale-105">
                    Reservar Ahora
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 