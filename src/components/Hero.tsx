
import { Button } from "@/components/ui/button";
import NetworkBackground from "@/components/NetworkBackground";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 overflow-hidden">
      <NetworkBackground />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Automate Your Business,
            <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
              {" "}Amplify Your Success
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transform your operations with intelligent automation that saves time, reduces costs, and scales your business effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105"
            >
              Get Your Free Strategy Call
            </Button>
          </div>
          
          <div className="trusted-by-section mt-12">
            <p className="trusted-by-text text-gray-400 mb-8 text-sm uppercase tracking-wider">
              Trusted by growing businesses across industries
            </p>
            
            <div className="industries-container flex flex-wrap justify-center gap-8 mb-12">
              <div className="industry-group flex flex-col items-center min-w-[160px]">
                <div className="industry-icon w-12 h-12 bg-rgba(30,41,59,0.6) border border-rgba(34,211,238,0.2) rounded-full flex items-center justify-center mb-4 text-emerald-400 transition-all duration-300 hover:bg-rgba(34,211,238,0.1) hover:border-rgba(34,211,238,0.4) hover:-translate-y-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="industry-labels text-center">
                  <div className="industry-primary text-gray-300 font-semibold text-sm mb-1">SaaS Companies</div>
                  <div className="industry-secondary text-gray-500 text-xs leading-tight">Software & Technology</div>
                </div>
              </div>
              
              <div className="industry-group flex flex-col items-center min-w-[160px]">
                <div className="industry-icon w-12 h-12 bg-rgba(30,41,59,0.6) border border-rgba(34,211,238,0.2) rounded-full flex items-center justify-center mb-4 text-emerald-400 transition-all duration-300 hover:bg-rgba(34,211,238,0.1) hover:border-rgba(34,211,238,0.4) hover:-translate-y-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <div className="industry-labels text-center">
                  <div className="industry-primary text-gray-300 font-semibold text-sm mb-1">Property & Real Estate</div>
                  <div className="industry-secondary text-gray-500 text-xs leading-tight">Agencies & Management</div>
                </div>
              </div>
              
              <div className="industry-group flex flex-col items-center min-w-[160px]">
                <div className="industry-icon w-12 h-12 bg-rgba(30,41,59,0.6) border border-rgba(34,211,238,0.2) rounded-full flex items-center justify-center mb-4 text-emerald-400 transition-all duration-300 hover:bg-rgba(34,211,238,0.1) hover:border-rgba(34,211,238,0.4) hover:-translate-y-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <div className="industry-labels text-center">
                  <div className="industry-primary text-gray-300 font-semibold text-sm mb-1">Professional Services</div>
                  <div className="industry-secondary text-gray-500 text-xs leading-tight">Marketing & Recruitment</div>
                </div>
              </div>
              
              <div className="industry-group flex flex-col items-center min-w-[160px]">
                <div className="industry-icon w-12 h-12 bg-rgba(30,41,59,0.6) border border-rgba(34,211,238,0.2) rounded-full flex items-center justify-center mb-4 text-emerald-400 transition-all duration-300 hover:bg-rgba(34,211,238,0.1) hover:border-rgba(34,211,238,0.4) hover:-translate-y-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    <circle cx="12" cy="10" r="2"/>
                    <path d="M12 12v4"/>
                  </svg>
                </div>
                <div className="industry-labels text-center">
                  <div className="industry-primary text-gray-300 font-semibold text-sm mb-1">Education Providers</div>
                  <div className="industry-secondary text-gray-500 text-xs leading-tight">Schools & Training</div>
                </div>
              </div>
              
              <div className="industry-group flex flex-col items-center min-w-[160px]">
                <div className="industry-icon w-12 h-12 bg-rgba(30,41,59,0.6) border border-rgba(34,211,238,0.2) rounded-full flex items-center justify-center mb-4 text-emerald-400 transition-all duration-300 hover:bg-rgba(34,211,238,0.1) hover:border-rgba(34,211,238,0.4) hover:-translate-y-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <div className="industry-labels text-center">
                  <div className="industry-primary text-gray-300 font-semibold text-sm mb-1">Trade Services</div>
                  <div className="industry-secondary text-gray-500 text-xs leading-tight">Skilled Professionals</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Trusted by growing businesses to automate their success</p>
            <div className="flex justify-center items-center space-x-8 opacity-70">
              <div className="text-sm text-gray-500">100+ Automations Delivered</div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="text-sm text-gray-500">50+ Happy Clients</div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="text-sm text-gray-500">95% Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
