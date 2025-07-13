
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
    <header className="bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VANTIVE DIGITAL
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="#process" className="text-muted-foreground hover:text-primary transition-colors font-medium">Process</a>
            <a href="#results" className="text-muted-foreground hover:text-primary transition-colors font-medium">Results</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium">Pricing</a>
            <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors font-medium">Blog</Link>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <UserMenu />
            ) : (
              <Link to="/auth">
                <Button variant="outline" className="border-primary/20 hover:border-primary/40">Sign In</Button>
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
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#process" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Process</a>
              <a href="#results" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Results</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
