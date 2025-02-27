
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-sm z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-playfair text-xl font-bold text-primary">Sofitel Frankfurt Opera</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Home
            </Link>
            <Link to="/development-program" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Development Program
            </Link>
            <a 
              href="https://sofitel.accor.com/en/discover-sofitel.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              About Us
            </a>
            <Link to="#" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Apply Button */}
          <div className="hidden md:block">
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/development-program" 
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Development Program
              </Link>
              <a 
                href="https://sofitel.accor.com/en/discover-sofitel.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <Link 
                to="#" 
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-white w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
