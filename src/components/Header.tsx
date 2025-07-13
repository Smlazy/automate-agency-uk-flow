
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
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              <span className="text-accent">VANTIVE</span> DIGITAL
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#process" className="text-gray-600 hover:text-primary transition-colors">Process</a>
            <a href="#results" className="text-gray-600 hover:text-primary transition-colors">Results</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <UserMenu />
            ) : (
              <Link to="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
            )}
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#process" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Process</a>
              <a href="#results" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Results</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
