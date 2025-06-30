
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Process from '@/components/Process';
import ROICalculator from '@/components/ROICalculator';
import Pricing from '@/components/Pricing';
import Results from '@/components/Results';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Header />
      <Hero />
      <Solutions />
      <Process />
      <ROICalculator />
      <Pricing />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
