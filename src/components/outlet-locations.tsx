import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from 'lucide-react'

const locations = [
  {
    name: "City Quarter 6",
    address: "Jl. Boulevard Raya Blok J4 & K4 Summarecon City, Jakarta Utara",
  },
  {
    name: "Emporium Mall",
    address: "Ground Floor, Emporium Mall, Jakarta Selatan",
  },
  {
    name: "Puri Indah Mall",
    address: "Level 1, Puri Indah Mall, Jakarta Barat",
  },
]

export function OutletLocations() {
  return (
    <section className="container py-8">
      <h2 className="mb-6 text-lg font-semibold">Outlet Location</h2>
      <div className="space-y-4">
        {locations.map((location) => (
          <Card key={location.name}>
            <CardContent className="flex items-start space-x-4 p-4">
              <MapPin className="h-5 w-5 flex-none text-primary" />
              <div>
                <h3 className="font-medium">{location.name}</h3>
                <p className="text-sm text-muted-foreground">{location.address}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a href="#" className="text-sm text-primary">
          SEE ALL
        </a>
      </div>
    </section>
  )
}

