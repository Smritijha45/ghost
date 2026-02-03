import Navbar from "@/app/components/navbar/Navbar";
import HeroSection from "@/app/components/hero/HeroSection";
import WhyItWorks from "@/app/components/why-it-works/WhyItWorks";
import HowItWorks from "@/app/components/how-it-works/HowItWorks";
import Footer from "@/app/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyItWorks />
      <HowItWorks />
      <Footer />
    </>
  );
}