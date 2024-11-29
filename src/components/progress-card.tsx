import { Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

export default function ProgressCard() {
	return (
		<div className="container py-2 mx-auto space-y-4 md:space-y-6">
			<Card className="bg-white border-none shadow-md pt-1">
				<CardContent className="px-4 pb-4 md:p-6">
					<div className="flex items-center justify-between mb-2">
						<h2 className="text-xs md:text-2xl font-extrabold text-gray-800">
							Your Level
						</h2>
						<Button
							variant="link"
							className="text-orange-500 text-2xs font-extrabold p-0"
						>
							LEARN MORE
						</Button>
					</div>

					<div className="max-sm:w-48 max-sm:mx-auto flex items-center justify-between mb-3">
						<div className="flex flex-col items-center">
							<div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center relative">
								<Crown className="w-3 h-3 text-gray-400" />
								<div className="absolute -bottom-[1px] right-0 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
									<svg
										className="w-4 h-4 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
							</div>
							<span className="mt-1 font-semibold text-xs">Silver</span>
						</div>

						<div className="flex-1 mx-2 pb-3">
							<Separator className="bg-slate-950" />
						</div>

						<div className="flex flex-col items-center">
							<div className="w-7 h-7 bg-yellow-100 rounded-full flex items-center justify-center">
								<Crown className="w-3 h-3 text-yellow-400" />
							</div>
							<span className="mt-1 font-semibold text-xs text-gray-500">Gold</span>
						</div>

						<div className="flex-1 mx-2 pb-3">
							<Separator className="bg-slate-950" />
						</div>

						<div className="flex flex-col items-center">
							<div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
								<Crown className="w-3 h-3 text-gray-400" />
							</div>
							<span className="mt-1 font-semibold text-xs text-gray-500">
								Platinum
							</span>
						</div>
					</div>

					<div className="flex-1 pb-3">
						<Progress value={38} className="h-1.5" />
					</div>

					<p className="text-xs text-gray-600">
						Spend <span className="font-bold text-gray-950">3,500,001</span> by{" "}
						<span className="font-bold text-gray-950">23 Nov 2024</span> to reach{" "}
						<span className="font-bold text-gray-950">Gold</span>
					</p>
				</CardContent>
			</Card>

			<Card className="bg-white border-none shadow-md">
				<CardContent className="px-4 py-2 md:p-6">
					<div className="flex items-center justify-between">
						<div>
							<h3 className="text-xs mb-1 md:text-lg font-extrabold text-gray-800">
								Bakmi GM Points
							</h3>
							<p className="text-2xs text-gray-500">
								<span className="font-bold">40</span> will expire on{" "}
								<span className="font-bold">22 Feb 2024</span>.{" "}
								<a href="#" className="text-sky-600 font-extrabold underline">
									See Details
								</a>
							</p>
						</div>
						<span className="text-xs md:text-3xl font-extrabold text-gray-800">
							40
						</span>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
