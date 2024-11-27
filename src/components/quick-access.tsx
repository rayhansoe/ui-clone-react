import { ShoppingBag, Gift, Ticket, Clock, Calendar, MessageCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const quickLinks = [
  { icon: ShoppingBag, label: "Order" },
  { icon: Gift, label: "Redeem" },
  { icon: Ticket, label: "Vouchers" },
  { icon: Clock, label: "History" },
  { icon: Calendar, label: "Events" },
  { icon: MessageCircle, label: "Contact Us" },
]

export function QuickAccess() {
  return (
    <section className="container py-8">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
        {quickLinks.map(({ icon: Icon, label }) => (
          <Card key={label} className="border-none bg-gray-50">
            <CardContent className="flex flex-col items-center p-4">
              <Icon className="mb-2 h-6 w-6" />
              <span className="text-xs font-medium">{label}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

