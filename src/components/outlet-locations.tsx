import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const locations = [
	{
		name: "City Quarter 6",
		address: "Jl. Boulevard Raya Blok J4 & K4 Summarecon City, Jakarta Utara",
    distance: 4.2
	},
	{
		name: "Emporium Mall",
		address: "Ground Floor, Emporium Mall, Jakarta Selatan",
    distance: 4.2
	},
	{
		name: "Puri Indah Mall",
		address: "Bakmi GM Puri Indah Mall, Mall Puri Indah Lt. I Unit 103 Jl. Puri Agung Kembangan, Jakarta Barat",
    distance: 4.2
	},
	{
		name: "Lippo Mall Puri",
		address: "Bakmi GM Lippo Mall Puri, Mall Puri Indah Lt. I Unit 103 Jl. Puri Agung Kembangan, Jakarta Barat",
    distance: 4.2
	},
	{
		name: "Terminal 3 Ultimate",
		address: "Level 1, Puri Indah Mall,  Mall Puri Indah Lt. I Unit 103 Jl. Puri Agung Kembangan, Jakarta Barat",
    distance: 4.2
	},
];

export function OutletLocations() {
	return (
		<section className="container py-7">
			<div className="mb-1">
				<h2 className="font-bold">Outlet Location</h2>
				<p className="text-2xs text-gray-700 font-semibold">Explore your options</p>
			</div>
			<div className="">
				{locations.map((location) => (
					<Card key={location.name} className="rounded-none border-b border-x-0 border-t-0 border-gray-200  w-full">
						<CardContent className="flex items-start py-2 px-0">
							<div className="flex flex-col gap-1">
								<h3 className="text-xs">{location.name}</h3>
								<p className="text-2xs text-muted-foreground">{location.address}</p>
                <div className="flex items-center gap-3">
								<MapPin className="h-3 w-3 flex-none text-muted-foreground" />
                <p className="text-2xs text-muted-foreground">{location.distance} km</p>
                </div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
			<div className="mt-6 h-16">
				<a href="#" className="text-2xs text-orange-500 font-extrabold">
					SEE ALL
				</a>
			</div>
		</section>
	);
}
