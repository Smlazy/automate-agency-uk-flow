
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            AutomateUK
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('solutions')} className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-white transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('results')} className="text-gray-300 hover:text-white transition-colors">
              Results
            </button>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#8B1538] hover:bg-[#7A1230] text-white px-6 py-2"
            >
              Get Free Automation Audit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('solutions')} className="text-gray-300 hover:text-white transition-colors text-left">
                Solutions
              </button>
              <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-white transition-colors text-left">
                Process
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors text-left">
                Pricing
              </button>
              <button onClick={() => scrollToSection('results')} className="text-gray-300 hover:text-white transition-colors text-left">
                Results
              </button>
              <Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-left" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-left">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#8B1538] hover:bg-[#7A1230] text-white w-full mt-4"
              >
                Get Free Automation Audit
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
