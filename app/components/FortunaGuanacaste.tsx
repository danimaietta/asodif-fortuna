import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import empresa1 from '../assets/empresa-1.png'
import empresa2 from '../assets/empresa-2.png'
import empresa3 from '../assets/empresa-3.png'
import empresa4 from '../assets/empresa-4.png'
import empresa5 from '../assets/empresa-5.png'
import empresa6 from '../assets/empresa-6.png'
import empresa7 from '../assets/empresa-7.png'
import empresa8 from '../assets/empresa-8.png'
import fortuna1 from '../assets/fortuna-1.jpg'
import fortuna2 from '../assets/fortuna-2.jpg'
import fortuna3 from '../assets/fortuna-3.jpg'
import fortuna4 from '../assets/fortuna-4.jpg'


const businesses = [
  { name: "Empresa 1", phone: "1234-5555", image: empresa1 },
  { name: "Empresa 2", phone: "1234-5555", image: empresa2 },
  { name: "Empresa 3", phone: "1234-5555", image: empresa3 },
  { name: "Empresa 4", phone: "1234-5555", image: empresa4 },
  { name: "Empresa 5", phone: "1234-5555", image: empresa5 },
  { name: "Empresa 6", phone: "1234-5555", image: empresa6 },
  { name: "Empresa 7", phone: "1234-5555", image: empresa7 },
  { name: "Empresa 8", phone: "1234-5555", image: empresa8 },
]

const fortunaImages = [
  fortuna1, fortuna2, fortuna3, fortuna4
]

export function FortunaGuanacaste() {
  return (
    <section className="border-b pb-12">
      <h2 className="text-2xl font-bold text-[#2F4F2F] mb-6 text-center">Fortuna Guanacaste</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Sidebar */}
        <aside className="space-y-4 md:col-span-1">
          {businesses.map((business, index) => (
            <Card key={index} className="bg-[#2F4F2F] text-white hover:bg-[#1C1C1C] transition-colors cursor-pointer w-2/3">
              <CardContent className="flex items-center gap-3 p-3">
                <Image 
                  className="h-9 w-9 rounded-full bg-white/20" 
                  src={business.image} 
                  alt={business.name} 
                  width={36} 
                  height={36} 
                />
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
          {fortunaImages.map((fortunaImage, i) => (
            <Image 
              key={i} 
              className="aspect-square bg-[#1C1C1C]/10 rounded-lg" 
              src={fortunaImage} 
              alt={"fortuna1"} 
            />
          ))}
        </div>
      </div>
    </section>
  )
} 