import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-sm z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3558bdbb-2b38-43f9-a2ab-b18deedb6869.png" 
              alt="Sofitel logo" 
              className="h-6 w-6 mr-2"
            />
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
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Profile/Logout Button (Desktop) */}
          {user && (
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut size={16} className="mr-1" />
                Logout
              </Button>
            </div>
          )}

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
                to="/contact" 
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Logout button in mobile menu */}
              {user && (
                <Button 
                  variant="outline"
                  className="mt-2 w-full flex items-center justify-center"
                  onClick={handleLogout}
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </Button>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
