
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/auth/UserMenu";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="bg-[#0F0F0F] border-b border-[#1A1A1A] sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white tracking-tight hover:opacity-90 transition-opacity duration-200">
              V<span className="text-[#8B1538]">A</span>NT<span className="text-[#8B1538]">I</span>VE DIGITAL
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#process" className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium relative group">
              Process
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#results" className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium relative group">
              Results
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <Link to="/blog" className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <a href="#contact" className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B1538] transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <UserMenu />
            ) : (
              <Link to="/auth">
                <Button className="bg-[#8B1538] hover:bg-[#A01B42] text-white px-6 py-2.5 rounded-md font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#8B1538]/20 transform hover:scale-105">
                  Sign In
                </Button>
              </Link>
            )}
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden text-[#C0C0C0] hover:text-white hover:bg-[#1A1A1A] transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0F0F0F] border-b border-[#1A1A1A] shadow-xl">
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#services" 
                  className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium py-2 border-l-2 border-transparent hover:border-[#8B1538] pl-4 hover:pl-6 transition-all" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#process" 
                  className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium py-2 border-l-2 border-transparent hover:border-[#8B1538] pl-4 hover:pl-6 transition-all" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Process
                </a>
                <a 
                  href="#results" 
                  className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium py-2 border-l-2 border-transparent hover:border-[#8B1538] pl-4 hover:pl-6 transition-all" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Results
                </a>
                <a 
                  href="#pricing" 
                  className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium py-2 border-l-2 border-transparent hover:border-[#8B1538] pl-4 hover:pl-6 transition-all" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <Link 
                  to="/blog" 
                  className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium py-2 border-l-2 border-transparent hover:border-[#8B1538] pl-4 hover:pl-6 transition-all" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <a 
                  href="#contact" 
                  className="text-[#C0C0C0] hover:text-white transition-colors duration-200 font-medium py-2 border-l-2 border-transparent hover:border-[#8B1538] pl-4 hover:pl-6 transition-all" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
