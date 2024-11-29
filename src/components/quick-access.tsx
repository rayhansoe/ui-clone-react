import {
	Ticket,
	Calendar,
	MessageCircle,
	ShoppingBasket,
	Crown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const quickLinks = [
	{ icon: ShoppingBasket, label: "Order" },
	{ icon: Ticket, label: "Redeem" },
	{ icon: Ticket, label: "My Vouchers" },
	{ icon: Crown, label: "Privilege" },
	{ icon: Calendar, label: "History" },
	{ icon: MessageCircle, label: "Contact Us" },
];

export function QuickAccess() {
	return (
		<section className="container py-3">
			<div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
				{quickLinks.map(({ icon: Icon, label }) => (
					<Card key={label} className="border-none bg-gray-50">
						<CardContent className="flex flex-col items-center p-2">
							<Icon className="mb-3 h-7 w-7" />
							<span className="text-2xs font-medium">{label}</span>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
