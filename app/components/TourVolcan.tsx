"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const tours = [
  { 
    id: 1, 
    title: "Tour 1", 
    description: "Experience the beauty of our volcanic landscapes.",
    images: ["/assets/volcan-miravalles-1.jpg?height=400&width=600", "/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"]
  },
  { 
    id: 2, 
    title: "Tour 2", 
    description: "Discover hidden gems in the heart of the volcano.",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"]
  },
  { 
    id: 3, 
    title: "Tour 3", 
    description: "Adventure awaits in our thrilling volcano tour.",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"]
  },
]

const inputClass = "border-[#2F4F2F] transition-all duration-300 ease-in-out hover:border-[#1C1C1C] focus:border-[#1C1C1C] focus:ring-2 focus:ring-[#1C1C1C]"

function ImageSlider({ images }: { images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

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
            className="bg-white border-[#2F4F2F] overflow-hidden h-[80vh] flex flex-col"
            onMouseEnter={() => setHoveredTour(tour.id)}
            onMouseLeave={() => setHoveredTour(null)}
          >
            <CardContent className="p-6 flex flex-col h-full relative">
              <h3 className="text-2xl font-semibold text-[#2F4F2F] mb-4">{tour.title}</h3>
              <div className="flex-grow aspect-video bg-[#1C1C1C]/10 rounded mb-4 overflow-hidden">
                <ImageSlider images={tour.images} />
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
                  <Textarea placeholder="Dejenos un mensaje" className={cn(inputClass, "border-[#2F4F2F] flex-grow")} />
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