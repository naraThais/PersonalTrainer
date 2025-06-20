import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import GallerySection from "@/components/sections/gallery-section";
import PricingSection from "@/components/sections/pricing-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-red-900/20 text-white overflow-x-hidden">
      <Navbar />
      <HeroSection id="hero" />
      <ServicesSection id="services" />
      <GallerySection id="gallery" />
      <PricingSection id="pricing" />
      <ContactSection id="contact" />
      <Footer />
    </main>
  );
}
