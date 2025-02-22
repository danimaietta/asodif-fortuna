import Image from "next/image"
import logo from '../assets/logo.png'
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
import { useState } from "react"

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <div className="relative">
          <p className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#2F4F2F] font-medium text-sm z-10">
            Discover the beauty and culture of Fortuna Guanacaste through our local microenterprises
          </p>
          <Image 
              className="h-12 w-48 mx-auto bg-[#2F4F2F] rounded relative"
              src={logo} 
              alt="logo" 
              width={250}
              height={100} 
          />
        </div>
        <h2 className="text-2xl font-bold text-[#2F4F2F]">Microempresa Fortuna Guanacaste</h2>
        <p className="max-w-3xl mx-auto text-[#1C1C1C]">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Condimentum nisl tincidunt nam tincidunt sem. Dis risus ut suspendisse mus ullamcorper. Ultricies aliquet mus euismod felis vitae. Dis ultricies consequat class sociosqu; sem ultrices phasellus quam litora. Cursus tellus nascetur malesuada viverra pharetra. Cras eleifend auctor ante malesuada fringilla volutpat lacinia senectus augue. Litora pharetra natoque cras, elementum vestibulum iaculis.

Faucibus at rutrum maecenas iaculis molestie eros tortor. Maximus eros sociosqu curae conubia imperdiet pellentesque laoreet a nunc. Ultrices pretium maecenas augue aenean hendrerit. Eget eget semper placerat egestas nam scelerisque dignissim ante. Parturient habitasse consectetur fermentum dui eu scelerisque est. Ad tortor malesuada euismod quis per massa velit fames consectetur. Tristique odio vivamus ac laoreet varius facilisi facilisis. Magna feugiat convallis congue magna duis non fermentum. Dis platea integer molestie litora leo elit erat et curabitur?
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
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
              </div>
              <Image
                src={images[currentImageIndex]}
                alt="Modal view"
                fill
                className="object-contain"
                onLoadingComplete={(img) => {
                  img.classList.remove('opacity-0');
                  img.classList.add('opacity-100');
                }}
                loading="eager"
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
    </section>
  )
} 