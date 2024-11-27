import { Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function ProgressCard() {
	return (
		<div className="container py-8 mx-auto space-y-4 md:space-y-6">
			<Card className="bg-white shadow-sm">
				<CardContent className="p-4 md:p-6">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-2xl font-bold text-gray-800">Your Level</h2>
						<Button variant="link" className="text-orange-500 font-semibold p-0">
							LEARN MORE
						</Button>
					</div>

					<div className="flex items-center justify-between mb-6">
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center relative">
								<Crown className="w-8 h-8 text-gray-400" />
								<div className="absolute -bottom-1 right-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
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
							<span className="mt-2 font-semibold text-sm">Silver</span>
						</div>

						<div className="flex-1 mx-4">
							<Progress value={33} className="h-2" />
						</div>

						<div className="flex flex-col items-center">
							<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
								<Crown className="w-8 h-8 text-yellow-400" />
							</div>
							<span className="mt-2 font-semibold text-sm text-gray-500">Gold</span>
						</div>

						<div className="flex-1 mx-4">
							<Progress value={0} className="h-2" />
						</div>

						<div className="flex flex-col items-center">
							<div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
								<Crown className="w-8 h-8 text-gray-400" />
							</div>
							<span className="mt-2 font-semibold text-sm text-gray-500">
								Platinum
							</span>
						</div>
					</div>

					<p className="text-center text-sm text-gray-600">
						Spend <span className="font-bold">3,500,001</span> by{" "}
						<span className="font-bold">23 Nov 2024</span> to reach{" "}
						<span className="font-bold">Gold</span>
					</p>
				</CardContent>
			</Card>

			<Card className="bg-white shadow-sm">
				<CardContent className="p-4 md:p-6">
					<div className="flex items-center justify-between">
						<div>
							<h3 className="text-lg font-bold text-gray-800 mb-1">Bakmi GM Points</h3>
							<p className="text-sm text-gray-500">
								40 will expire on 22 Feb 2024.{" "}
								<a href="#" className="text-blue-500">
									See Details
								</a>
							</p>
						</div>
						<span className="text-3xl font-bold text-gray-800">40</span>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
