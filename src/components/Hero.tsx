
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Shield, Clock, Zap } from 'lucide-react';

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  
  const headlines = [
    "From 50 to 500 candidate calls per week - with the same team size",
    "Nurture 10x more leads without hiring more staff", 
    "Deliver 5x more campaigns while your team focuses on strategy"
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

  const scrollToServices = () => {
    const element = document.getElementById('solutions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A1A1A] pt-24 pb-16 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEzOSwgMjEsIDU2LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        {/* Animated particles/circuits */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#8B1538] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#8B1538] rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#8B1538] rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#8B1538] rounded-full animate-bounce delay-1000"></div>
        
        {/* Flowing lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B1538]/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#8B1538]/20 to-transparent animate-pulse delay-500"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business<br />
              with <span className="text-[#8B1538]">AI Automation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              UK-based AI automation specialists helping SaaS companies, 
              marketing agencies, real estate firms, and recruitment companies 
              streamline operations and boost efficiency
            </p>

            {/* Trust Elements */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-gray-300">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>UK-Based Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span>Free Consultation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
              <Button 
                onClick={scrollToContact}
                className="bg-[#8B1538] hover:bg-[#7A1230] text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Your Free Automation Audit
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToServices}
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                View Our Services
              </Button>
            </div>
          </div>

          {/* Trust Bar Statistics */}
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 mb-16 border border-white/10">
            <div className="text-gray-400 text-sm mb-4">Trusted by growing businesses across the UK</div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-[#8B1538] text-2xl font-bold">20+</div>
                <div className="text-gray-300 text-sm">businesses automated</div>
              </div>
              <div>
                <div className="text-[#8B1538] text-2xl font-bold">£500K+</div>
                <div className="text-gray-300 text-sm">in time savings</div>
              </div>
              <div>
                <div className="text-[#8B1538] text-2xl font-bold">95%</div>
                <div className="text-gray-300 text-sm">client satisfaction</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-col items-center text-gray-400">
              <div className="text-sm mb-2">Scroll to explore</div>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Before/After Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                Before Automation
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>60% of time spent on repetitive tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Slow response times losing leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Manual processes limiting growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Team overwhelmed with admin work</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                After Automation
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Focus on high-value activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Instant lead responses & follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Scalable operations without hiring</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Team empowered to drive growth</span>
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
