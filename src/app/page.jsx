import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import KegiatanRiasKarsa from "@/components/sections/KegiatanRiasKarsa";
import WorkshopTable from "@/components/sections/WorkshopTable";
import DirectorySection from "@/components/sections/DirectorySection";
import GallerySection from "@/components/sections/GallerySection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <KegiatanRiasKarsa />
        <WorkshopTable />
        <DirectorySection />
        <GallerySection />
        <StatsSection />
        <ComparisonSection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
