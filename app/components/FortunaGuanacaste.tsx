import { Card, CardContent } from "@/components/ui/card"

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

export function FortunaGuanacaste() {
  return (
    <section className="border-b pb-12">
      <h2 className="text-2xl font-bold text-[#2F4F2F] mb-6 text-center">Fortuna Guanacaste</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Sidebar */}
        <aside className="space-y-4 md:col-span-1">
          {businesses.map((business, index) => (
            <Card key={index} className="bg-[#2F4F2F] text-white hover:bg-[#1C1C1C] transition-colors cursor-pointer">
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
  )
} 