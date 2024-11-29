import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ReferralCard() {
	return (
		<div className="container py-2 mx-auto">
			<Card className="relative w-full overflow-hidden bg-slate-100">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-slate-100 opacity-50" />
					<div className="absolute top-0 right-0 w-2/3 h-2/3 bg-slate-200 rounded-bl-full opacity-50" />
					<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate-200 rounded-tr-full opacity-50" />
				</div>
				<div className="relative flex items-center justify-between px-4 py-7 md:p-12">
					<div className="flex-shrink-0 w-1/4 md:w-1/4">
						<img
							src="/placeholder.svg?height=200&width=200"
							width={200}
							height={200}
							alt="Referral illustration"
							className="w-full h-auto"
						/>
					</div>
					<div className="flex flex-col items-end gap-4 ml-4 max-sm:h-3/4">
						<h2 className="text-xs md:text-3xl font-extrabold text-slate-900 text-right">
							Dapatkan 5 poin dengan mengajak teman kamu
						</h2>
						<Button
							size="lg"
							variant="secondary"
							className="text-xs bg-white text-slate-950 hover:bg-white/90 font-bold px-5"
						>
							REFER NOW
						</Button>
					</div>
				</div>
			</Card>
		</div>
	);
}
