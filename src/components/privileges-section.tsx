import { Card, CardContent } from "@/components/ui/card";

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
	{
		title: "REDEEM POINT",
		type: "Redeem Point",
		date: "Exp. 31 Dec 2024",
		image: "/placeholder.svg?height=200&width=200&text=Redeem",
	},
	{
		title: "REDEEM POINT",
		type: "Redeem Point",
		date: "Exp. 31 Dec 2024",
		image: "/placeholder.svg?height=200&width=200&text=Redeem",
	},
	{
		title: "REDEEM POINT",
		type: "Redeem Point",
		date: "Exp. 31 Dec 2024",
		image: "/placeholder.svg?height=200&width=200&text=Redeem",
	},
];

export function PrivilegesSection() {
	return (
		<section className="container py-2">
			<div className="mb-4">
				<h2 className="font-bold">Privileges</h2>
				<p className="text-2xs text-gray-700 font-semibold">
					Keep discovering our promo and news
				</p>
			</div>
			<div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
				{privileges.map((privilege) => (
					<Card key={privilege.title} className="border-none shadow-md">
						<CardContent className="p-0">
							<img
								src={privilege.image}
								alt={privilege.title}
								className="w-full h-40 object-cover rounded-t-lg"
							/>
							<div className="p-2">
								<h3 className="mb-2 text-xs font-bold">{privilege.title}</h3>
								<p className="text-2xs text-muted-foreground">{privilege.date}</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
