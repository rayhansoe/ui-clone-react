import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const rewards = [
  { name: "Es Teh Manis", points: 45 },
  { name: "Lemon Es Teh", points: 45 },
  { name: "Paw Patrol", points: 150 },
  { name: "Es Teh Manis", points: 45 },
  { name: "Lemon Es Teh", points: 45 },
  { name: "Paw Patrol", points: 150 },
  { name: "Es Teh Manis", points: 45 },
  { name: "Lemon Es Teh", points: 45 },
  { name: "Paw Patrol", points: 150 },
  { name: "Es Teh Manis", points: 45 },
  { name: "Lemon Es Teh", points: 45 },
  { name: "Paw Patrol", points: 150 },
  { name: "Es Teh Manis", points: 45 },
  { name: "Lemon Es Teh", points: 45 },
  { name: "Paw Patrol", points: 150 },
  { name: "Es Teh Manis", points: 45 },
  { name: "Lemon Es Teh", points: 45 },
  { name: "Paw Patrol", points: 150 },
  { name: "Es Teh Manis", points: 45 },
  { name: "Lemon Es Teh", points: 45 },
  { name: "Paw Patrol", points: 150 },
]

export function RewardsSection() {
  return (
    <section className="container py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Redeem Your Rewards</h2>
        <a href="#" className="text-sm text-primary">
          SEE ALL
        </a>
      </div>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-full space-x-4">
          {rewards.map((reward, idx) => (
            <Card key={idx} className="w-[200px] flex-none">
              <CardContent className="p-4">
                <img
                  src="/placeholder.svg"
                  alt={reward.name}
                  className="mb-4 aspect-square w-full rounded-lg object-cover"
                />
                <h3 className="font-medium">{reward.name}</h3>
                <p className="text-sm text-primary">{reward.points} points</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}

