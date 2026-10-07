import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MapFeaturesSection from "@/components/MapFeaturesSection";
import LiveUpdatesSection from "@/components/LiveUpdatesSection";
import ChangeOfferSection from "@/components/ChangeOfferSection";
import SearchVsLiveSection from "@/components/SearchVsLiveSection";
import GoLiveMapSection from "@/components/GoLiveMapSection";
import FoodTruckSection from "@/components/FoodTruckSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className="min-h-screen bg-black text-white flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          {/* Hero Banner Section */}
          <HeroBanner />

          {/* 2nd Section: A Map That Changes With What’s Happening Around You */}
          <MapFeaturesSection />

          {/* 3rd Section: What’s Happening Around You Is Always Changing */}
          <LiveUpdatesSection />

          {/* 4th Section (1.png): Change Your Offer. Change Your Map Presence */}
          <ChangeOfferSection />

          {/* 5th Section (2.png): Don’t Just Search for Businesses. See What’s Happening Around You */}
          <SearchVsLiveSection />

          {/* 6th Section (3.png): Don’t Just Get Listed. Go LIVE on the Map */}
          <GoLiveMapSection />

          {/* 7th Section (4.png): New Location? Go LIVE on the Map Again */}
          <FoodTruckSection />

          {/* 8th Section (5.png): Niro is a Live Map */}
          <HowItWorksSection />
        </main>

        {/* Footer (6.png) */}
        <Footer />
      </div>
  );
}
