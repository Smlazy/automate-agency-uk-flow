
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0F0F] border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              V<span className="text-emerald-500">A</span>NTIVE D<span className="text-emerald-500">I</span>GITAL
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Specialised automation for growing UK businesses. Transform your operations with intelligent automation that delivers measurable results.
            </p>
            <div className="text-emerald-500 font-semibold text-sm">
              Based in the UK • Serving businesses nationwide
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/solutions/workflow-automation" className="hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link to="/solutions/communication-automation" className="hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                  Communication Automation
                </Link>
              </li>
              <li>
                <Link to="/solutions/lead-generation" className="hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link to="/solutions/crm-integration" className="hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                  CRM Integration
                </Link>
              </li>
              <li>
                <Link to="/solutions/scheduling-booking" className="hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                  Scheduling & Booking
                </Link>
              </li>
              <li>
                <Link to="/solutions/custom-integrations" className="hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                  Custom Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                  Our Process
                </button>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                  Industry Focus
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                  Free Strategy Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Vantive Digital. All rights reserved. • UK Company Registration: [Number] • VAT: [Number]
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:-translate-y-0.5 inline-block">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
