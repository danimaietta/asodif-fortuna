import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const businesses = [
  { name: "Empresa 1", phone: "1234-5555" },
  { name: "Empresa 2", phone: "1234-5555" },
  { name: "Empresa 3", phone: "1234-5555" },
  { name: "Empresa 4", phone: "1234-5555" },
  { name: "Empresa 5", phone: "1234-5555" },
  { name: "Empresa 6", phone: "1234-5555" },
  { name: "Empresa 7", phone: "1234-5555" },
  { name: "Empresa 8", phone: "1234-5555" },
]

const tours = [
  { 
    id: 1, 
    title: "Tour 1", 
    description: "Experience the beauty of our volcanic landscapes.",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"]
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

const inputClass = "border-[#091B0B] transition-all duration-300 ease-in-out hover:border-[#1C1C1C] focus:border-[#1C1C1C] focus:ring-2 focus:ring-[#1C1C1C]"

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

export default function Home() {
  const [hoveredTour, setHoveredTour] = useState<number | null>(null);

  return (
    <div className="min-h-[350vh] bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#091B0B] p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="h-8 w-20 bg-white/20 rounded" />
          <div className="flex gap-4">
            <button className="text-xl font-semibold hover:text-[#1C1C1C] transition-colors">
              Fortuna Guanacaste
            </button>
            <button className="text-xl font-semibold hover:text-[#1C1C1C] transition-colors">
              Tour Volcán
            </button>
            <button className="text-xl font-semibold hover:text-[#1C1C1C] transition-colors">
              Microempresa
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 space-y-12">
        {/* Fortuna Guanacaste Section */}
        <section className="border-b pb-12">
          <h2 className="text-2xl font-bold text-[#091B0B] mb-6 text-center">Fortuna Guanacaste</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Sidebar */}
            <aside className="space-y-4 md:col-span-1">
              {businesses.map((business, index) => (
                <Card key={index} className="bg-[#091B0B] text-white hover:bg-[#1C1C1C] transition-colors">
                  <CardContent className="flex items-center gap-3 p-3">
                    <div className="h-8 w-8 rounded-full bg-white/20" />
                    <div>
                      <p className="font-medium">{business.name}</p>
                      <p className="text-sm opacity-80">{business.phone}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </aside>

            {/* Image Grid */}
            <div className="grid gap-6 md:col-span-3 grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-[#1C1C1C]/10 rounded-lg" />
              ))}
            </div>
          </div>
        </section>

        {/* Tour Volcán Section */}
        <section className="h-screen py-12 border-b">
          <h2 className="text-3xl font-bold text-[#091B0B] mb-6 text-center">Tour Volcán</h2>
          <div className="h-[calc(100%-4rem)] grid gap-6 sm:grid-cols-3">
            {tours.map((tour) => (
              <Card 
                key={tour.id} 
                className="bg-white border-[#091B0B] overflow-hidden h-[80vh] flex flex-col"
                onMouseEnter={() => setHoveredTour(tour.id)}
                onMouseLeave={() => setHoveredTour(null)}
              >
                <CardContent className="p-6 flex flex-col h-full relative">
                  <h3 className="text-2xl font-semibold text-[#091B0B] mb-4">{tour.title}</h3>
                  <div className="flex-grow aspect-video bg-[#1C1C1C]/10 rounded mb-4 overflow-hidden">
                    <ImageSlider images={tour.images} />
                  </div>
                  <p className="text-[#1C1C1C] mb-4">{tour.description}</p>
                  <form 
                    className={cn(
                      "space-y-4 absolute inset-0 bg-white p-6 transition-all duration-300 ease-in-out flex flex-col",
                      hoveredTour === tour.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                    )}
                  >
                    <h4 className="text-xl font-semibold text-[#091B0B] mb-4">Reserva {tour.title}</h4>
                    <Input placeholder="Nombre" className={cn(inputClass, "border-[#091B0B]")} />
                    <Input placeholder="Correo" className={cn(inputClass, "border-[#091B0B]")} />
                    <Input placeholder="Teléfono" className={cn(inputClass, "border-[#091B0B]")} />
                    <Textarea placeholder="Dejenos un mensaje" className={cn(inputClass, "border-[#091B0B] flex-grow")} />
                    <Button className="w-full bg-[#091B0B] hover:bg-[#1C1C1C] transition-all duration-300 ease-in-out transform hover:scale-105">
                      Reservar Ahora
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Microempresa Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="h-12 w-32 mx-auto bg-[#091B0B] rounded" />
            <h2 className="text-2xl font-bold text-[#091B0B]">Microempresa Fortuna Guanacaste</h2>
            <p className="max-w-3xl mx-auto text-[#1C1C1C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="aspect-square bg-[#1C1C1C]/10 rounded-lg" />
            ))}
          </div>

          {/* Footer */}
          <footer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-12">
            <div className="grid grid-cols-3 gap-4 col-span-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="aspect-video bg-[#091B0B]/20 rounded" />
              ))}
            </div>
            <Card className="bg-[#091B0B]">
              <CardContent className="p-4 space-y-4">
                <Input placeholder="Nombre" className={cn(inputClass, "bg-white/10 text-white placeholder:text-white/70")} />
                <Input placeholder="Correo" className={cn(inputClass, "bg-white/10 text-white placeholder:text-white/70")} />
                <Input placeholder="Teléfono" className={cn(inputClass, "bg-white/10 text-white placeholder:text-white/70")} />
                <Textarea placeholder="Dejenos un mensaje" className={cn(inputClass, "bg-white/10 text-white placeholder:text-white/70")} />
                <Button variant="secondary" className="w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-[#091B0B]">Mail</Button>
              </CardContent>
            </Card>
          </footer>
        </section>
      </main>
    </div>
  )
}

