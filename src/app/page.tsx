// import Welcome from "@/components/Welcome";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/Testimonials";

export default function Home() {
  return (
  <div className="min-h-screen ">
    <Navbar/>
    <Hero/>
    <About/>
    <WhyUs/>
    <Services/>
    <Process/>
    <TestimonialsSection/>
    <Contact/>
    <Footer/>
  </div>
  );
}
