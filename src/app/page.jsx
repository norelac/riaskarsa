import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import AboutSection from "@/components/sections/AboutSection";
import DirectorySection from "@/components/sections/DirectorySection";
import OpenCallSection from "@/components/sections/OpenCallSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import GallerySection from "@/components/sections/GallerySection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <RoadmapSection />
        <AboutSection />
        <DirectorySection />
        <OpenCallSection />
        <ComparisonSection />
        <GallerySection />
        <StatsSection />
        <TestimonialSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
