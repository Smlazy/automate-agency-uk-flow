
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/auth/UserMenu";
import { useAuth } from "@/hooks/useAuth";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
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

  const navigateToContact = () => {
    if (location.pathname !== '/') {
      window.location.href = '/';
      setTimeout(() => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <header className="bg-[#0F0F0F] border-b border-[#1A1A1A] sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Mobile hamburger menu */}
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-[#C0C0C0] hover:text-white hover:bg-[#1A1A1A] transition-colors duration-200 mr-4 p-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="h-7 w-7 transition-transform duration-300" />
              )}
            </Button>
          </div>

          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white tracking-tight hover:opacity-90 transition-opacity duration-200">
              V<span className="text-emerald-500">A</span>NT<span className="text-emerald-500">I</span>VE DIGITAL
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-[#C0C0C0] hover:text-white transition-all duration-300 font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-[#C0C0C0] hover:text-white transition-all duration-300 font-medium relative group"
            >
              Process
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-[#C0C0C0] hover:text-white transition-all duration-300 font-medium relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <Link to="/blog" className="text-[#C0C0C0] hover:text-white transition-all duration-300 font-medium relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <button 
              onClick={navigateToContact}
              className="text-[#C0C0C0] hover:text-white transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            {user ? (
              <UserMenu />
            ) : (
              <div className="flex items-center space-x-2 md:space-x-3">
                <button
                  onClick={navigateToContact}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 md:px-6 md:py-2.5 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/20 hover:-translate-y-1 text-sm md:text-base"
                >
                  Book Free Consultation
                </button>
                <Link to="/auth">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 md:px-6 md:py-2.5 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/20 hover:-translate-y-1 text-sm md:text-base">
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            <div className="fixed top-0 left-0 h-full w-80 bg-[#0F0F0F] border-r border-[#1A1A1A] shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
              <div className="p-6">
                <div className="flex justify-end mb-8">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-[#C0C0C0] hover:text-white hover:bg-[#1A1A1A]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="flex flex-col space-y-6">
                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="text-[#C0C0C0] hover:text-white transition-all duration-300 font-medium py-3 border-l-2 border-transparent hover:border-emerald-500 pl-4 hover:pl-6 text-left min-h-[44px] flex items-center" 
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('process')}
                    className="text-[#C0C0C0] hover:text-white transition-all duration-300 font-medium py-3 border-l-2 border-transparent hover:border-emerald-500 pl-4 hover:pl-6 text-left min-h-[44px] flex items-center" 
                  >
                    Process
                  </button>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="text-[#C0C0C0] hover:text-white transition-all duration-300 font-medium py-3 border-l-2 border-transparent hover:border-emerald-500 pl-4 hover:pl-6 text-left min-h-[44px] flex items-center" 
                  >
                    Pricing
                  </button>
                  <Link 
                    to="/blog" 
                    className="text-[#C0C0C0] hover:text-white transition-all duration-300 font-medium py-3 border-l-2 border-transparent hover:border-emerald-500 pl-4 hover:pl-6 min-h-[44px] flex items-center" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <button 
                    onClick={navigateToContact}
                    className="text-[#C0C0C0] hover:text-white transition-all duration-300 font-medium py-3 border-l-2 border-transparent hover:border-emerald-500 pl-4 hover:pl-6 text-left min-h-[44px] flex items-center" 
                  >
                    Contact
                  </button>
                </nav>

                <div className="mt-8 space-y-4">
                  <button
                    onClick={navigateToContact}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 min-h-[44px] hover:-translate-y-1"
                  >
                    Book Free Consultation
                  </button>
                  <Link 
                    to="/auth" 
                    className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 min-h-[44px] flex items-center justify-center hover:-translate-y-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navigation;
