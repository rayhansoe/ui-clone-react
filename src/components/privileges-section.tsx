import { Card, CardContent } from "@/components/ui/card"

const privileges = [
  {
    title: "SPECIAL FOR PLATINUM MEMBER",
    type: "PLATINUM Member",
    date: "Exp. 31 Dec 2024",
    image: "/placeholder.svg?height=200&width=200&text=Platinum",
  },
  {
    title: "SPECIAL FOR GOLD MEMBER",
    type: "GOLD Member",
    date: "Exp. 31 Dec 2024",
    image: "/placeholder.svg?height=200&width=200&text=Gold",
  },
  {
    title: "BIRTHDAY REWARDS",
    type: "Birthday Reward 🎂",
    date: "Exp. 31 Dec 2024",
    image: "/placeholder.svg?height=200&width=200&text=Birthday",
  },
  {
    title: "REDEEM POINT",
    type: "Redeem Point",
    date: "Exp. 31 Dec 2024",
    image: "/placeholder.svg?height=200&width=200&text=Redeem",
  },
]

export function PrivilegesSection() {
  return (
    <section className="container py-8">
      <h2 className="mb-6 text-lg font-semibold">Privileges</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {privileges.map((privilege) => (
          <Card key={privilege.title}>
            <CardContent className="p-4">
              <img
                src={privilege.image}
                alt={privilege.title}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="mb-2 font-semibold">{privilege.title}</h3>
              <p className="text-sm text-muted-foreground">{privilege.type}</p>
              <p className="text-xs text-muted-foreground">{privilege.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

