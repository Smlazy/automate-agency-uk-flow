
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
    <header className="bg-card/95 backdrop-blur-md border-b border-border shadow-lg relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              VANTIVE DIGITAL
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4">Services</a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4">Process</a>
            <a href="#results" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4">Results</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4">Pricing</a>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4">Blog</Link>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <UserMenu />
            ) : (
              <Link to="/auth">
                <Button variant="outline" className="border-border hover:border-primary hover:bg-primary/10 text-foreground">Sign In</Button>
              </Link>
            )}
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-4 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#process" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>Process</a>
              <a href="#results" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>Results</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium hover:underline underline-offset-4" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
