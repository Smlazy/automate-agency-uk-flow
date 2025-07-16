
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
          
          <div className="mt-12 text-center">
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
