import { Navbar } from "@/components/navbar";
import { QuickAccess } from "@/components/quick-access"
import { RewardsSection } from "@/components/rewards-section";
import { PrivilegesSection } from "@/components/privileges-section"
import { OutletLocations } from "@/components/outlet-locations";
import { BigImageCarousel } from "./components/carousel";
import ReferralCard from "./components/referral-card";
import ProgressCard from "./components/progress-card";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<BigImageCarousel />
        <ProgressCard />
        <QuickAccess />
        <ReferralCard />
				<RewardsSection />
				<PrivilegesSection />
				<OutletLocations />
			</main>
		</>
	);
}
