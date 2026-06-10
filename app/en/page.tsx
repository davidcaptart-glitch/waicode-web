import Approach from "@/components/Approach";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomeEN() {
  return (
    <>
      <Navbar />
      <main>
        <Hero locale="en" />
        <Approach locale="en" />
        <Services locale="en" />
        <TechStack locale="en" />
        <Process locale="en" />
        <Projects locale="en" />
        <FAQ locale="en" />
        <FinalCTA locale="en" />
      </main>
      <Footer locale="en" />
      <WhatsAppFloat locale="en" />
    </>
  );
}
