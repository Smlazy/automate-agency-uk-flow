
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mouse } from 'lucide-react';

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

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] pt-24 pb-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-[#8B1538]">Intelligent Automation</span> <br />
              for Business Continuity
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We design enterprise-level automation systems that ensure business continuity, operational consistency, and competitive advantage for SAAS companies, agencies, and service professionals worldwide.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-700">
                <div className="text-[#8B1538] text-lg font-semibold mb-2">Most clients save</div>
                <div className="text-gray-300">15-25 hours weekly on administrative tasks</div>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-700">
                <div className="text-[#8B1538] text-lg font-semibold mb-2">Streamlined operations</div>
                <div className="text-gray-300">Typically show results within 30 days</div>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-700">
                <div className="text-[#8B1538] text-lg font-semibold mb-2">Focus on your expertise</div>
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

          <div className="flex justify-center items-center mb-16">
              <Button 
                onClick={scrollToContact}
                className="bg-[#8B1538] hover:bg-[#7A1230] text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                Book Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
          </div>

          {/* Animated Mouse Scroll Indicator */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-gray-400 animate-bounce">
              <Mouse className="w-6 h-6 mb-2" />
              <div className="text-sm">Scroll to explore</div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Before Automation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  60% of time spent on repetitive tasks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Slow response times losing leads
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Manual processes limiting growth
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Team overwhelmed with admin work
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">After Automation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Focus on high-value activities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Instant lead responses & follow-ups
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Scalable operations without hiring
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Team empowered to drive growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
