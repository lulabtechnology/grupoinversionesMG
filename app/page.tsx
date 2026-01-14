import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import Services from "@/components/sections/Services";
import Sectors from "@/components/sections/Sectors";
import Technology from "@/components/sections/Technology";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProps />
      <Services />
      <Sectors />
      <Technology />
      <Process />
      <Faq />
      <FinalCta />
      <Contact />
      <Footer />
    </main>
  );
}
