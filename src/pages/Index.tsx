
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechBackground from "@/components/TechBackground";

const Index = () => {
  return (
    <div className="relative">
      <TechBackground />
      <Header />
      <Hero />
      <Solutions />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
