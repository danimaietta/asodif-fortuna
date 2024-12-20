import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import footer1 from '../assets/footer-1.jpg'
import footer2 from '../assets/footer-2.jpg'
import footer3 from '../assets/footer-3.jpg'
import footer4 from '../assets/footer-4.jpg'
import footer5 from '../assets/footer-5.jpg'
import footer6 from '../assets/footer-6.jpg'
import footer7 from '../assets/footer-7.jpg'
import footer8 from '../assets/footer-8.jpg'
import footer9 from '../assets/footer-9.jpg'

const inputClass = "border-[#2F4F2F] transition-all duration-300 ease-in-out hover:border-[#1C1C1C] focus:border-[#1C1C1C] focus:ring-2 focus:ring-[#1C1C1C]"

const footerImages = [
  footer1, footer2, footer3, footer4, footer5,
  footer6, footer7, footer8, footer9
]

export function Footer() {
  return (
    <footer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-12">
      <div className="grid grid-cols-3 gap-4 col-span-3">
        {footerImages.map((image, i) => (
          <div key={i} className="aspect-video bg-[#2F4F2F]/20 rounded overflow-hidden">
            <Image
              src={image}
              alt={`Footer image ${i + 1}`}
              className="object-cover w-fit h-fit transition-transform duration-300 hover:scale-105"
            />
          </div>
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
  )
} 