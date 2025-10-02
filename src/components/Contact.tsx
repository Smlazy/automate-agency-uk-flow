import { useEffect } from 'react';
import SectionBackground from '@/components/SectionBackground';
import ContactInfo from './ContactInfo';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      document.body.appendChild(script);
    }

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <SectionBackground id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book your free strategy consultation and discover how automation can revolutionize your operations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/vantive-info/30min?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=10b981"
              style={{ minWidth: '320px', height: '630px' }}
            ></div>
          </div>
        </div>
      </div>
    </SectionBackground>
  );
};

export default Contact;
