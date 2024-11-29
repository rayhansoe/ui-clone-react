import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
];

export function RewardsSection() {
	return (
		<section className="container pt-10 pb-2">
			<div className="mb-4 flex items-center justify-between">
				<div>
					<h2 className=" font-bold">Redeem Your Rewards</h2>
					<p className="text-2xs font-semibold text-gray-600">
						Earn more to get your rewards
					</p>
				</div>
				<a href="#" className="text-2xs text-orange-500 font-extrabold">
					SEE ALL
				</a>
			</div>
			<ScrollArea className="w-full whitespace-nowrap">
				<div className="flex w-full gap-1 ">
					{rewards.map((reward, idx) => (
						<Card key={idx} className="w-[142px] border-none flex-none">
							<CardContent className="p-1">
								<img
									src="/placeholder.svg"
									alt={reward.name}
									className="mb-4 aspect-square shadow-md w-full rounded-lg object-cover"
								/>
								<div className="ml-1">
									<h3 className="text-xs font-bold">{reward.name}</h3>
									<p className="text-2xs text-orange-500 font-bold">
										{reward.points} Pts
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</section>
	);
}
