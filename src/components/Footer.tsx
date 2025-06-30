
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0F0F] border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">AutomateUK</div>
            <p className="text-gray-300 text-sm mb-4">
              Specialized automation for growing UK agencies. Transform your operations with intelligent automation that delivers measurable results.
            </p>
            <div className="text-[#8B1538] font-semibold text-sm">
              Based in the UK • Serving businesses nationwide
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <button onClick={() => scrollToSection('solutions')} className="hover:text-white transition-colors">
                  Recruitment Automation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solutions')} className="hover:text-white transition-colors">
                  Real Estate Automation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solutions')} className="hover:text-white transition-colors">
                  Marketing Automation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">
                  Custom Solutions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors">
                  Our Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('results')} className="hover:text-white transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                  Free Strategy Call
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                  Automation Audit
                </button>
              </li>
              <li>Phone: 0800 XXX XXXX</li>
              <li>Email: hello@automateuk.co.uk</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AutomateUK. All rights reserved. • UK Company Registration: [Number] • VAT: [Number]
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
