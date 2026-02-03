import Navbar from "@/app/(marketing)/components/navbar/Navbar";
import HeroSection from "@/app/(marketing)/components/hero/HeroSection";
import WhyItWorks from "@/app/(marketing)/components/why-it-works/WhyItWorks";
import HowItWorks from "@/app/(marketing)/components/how-it-works/HowItWorks";
import Footer from "@/app/(marketing)/components/footer/Footer";

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