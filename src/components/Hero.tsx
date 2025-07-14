
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mouse } from 'lucide-react';
import NetworkBackground from './NetworkBackground';

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  
  const headlines = [
    "Focus on product development while automation handles user onboarding and support workflows",
    "Deliver exceptional client results while automation manages project coordination and reporting",
    "Spend time on jobs, not paperwork - let automation handle scheduling and admin"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToResults = () => {
    const element = document.getElementById('results');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] pt-24 pb-16 relative overflow-hidden">
      {/* Network Background */}
      <NetworkBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-emerald-500">Intelligent Automation</span> <br />
              for Business Continuity
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We design enterprise-level automation systems that ensure business continuity, operational consistency, and competitive advantage for SAAS companies, agencies, and service professionals worldwide.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-700">
                <div className="text-emerald-500 text-lg font-semibold mb-2">Most clients save</div>
                <div className="text-gray-300">15-25 hours weekly on administrative tasks</div>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-700">
                <div className="text-emerald-500 text-lg font-semibold mb-2">Streamlined operations</div>
                <div className="text-gray-300">Typically show results within 30 days</div>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-700">
                <div className="text-emerald-500 text-lg font-semibold mb-2">Focus on your expertise</div>
                <div className="text-gray-300">While automation handles operational details</div>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-700 mb-12">
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-2">Industry-Specific Solutions:</div>
              <div className="text-2xl md:text-3xl font-semibold text-white min-h-[80px] flex items-center justify-center transition-all duration-500">
                {headlines[currentHeadline]}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Button 
              onClick={scrollToContact}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-600/20"
            >
              Book Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              onClick={scrollToResults}
              variant="outline"
              className="bg-transparent border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/20"
            >
              View Case Studies
            </Button>
          </div>

          {/* Animated Mouse Scroll Indicator */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-gray-400 animate-bounce">
              <Mouse className="w-6 h-6 mb-2" />
              <div className="text-sm">Scroll to explore</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
