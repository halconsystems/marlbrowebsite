import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PromotionBanner from "@/components/PromotionBanner";
import OurServices from "@/components/Service";
import IndustriesWeServe from "@/components/IndustriesWeServe";


export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <OurServices/>
    <IndustriesWeServe/>
    <PromotionBanner/>
    <Footer/>
    </>
  );
}
