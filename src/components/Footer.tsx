import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-16 bg-white border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Professional Solutions Column */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Professional Solutions</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://businesstravel.accor.com/en.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Business Travel
                </a>
              </li>
              <li>
                <a 
                  href="https://meetings.accor.com/portal/index.en.shtml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Meetings & Events
                </a>
              </li>
              <li>
                <Link to="/travel-professionals" className="text-muted-foreground hover:text-primary transition-colors">
                  Travel professionals
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://all.accor.com/web-accessibility/index.en.shtml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web accessibility
                </a>
              </li>
              <li>
                <a 
                  href="https://all.accor.com/gb/our-services/index.shtml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  All our services
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://group.accor.com/en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Accor Group
                </a>
              </li>
              <li>
                <a 
                  href="https://group.accor.com/en/brands/Luxury/sofitel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Management & Franchises
                </a>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/sustainable-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Sustainable Development
                </Link>
              </li>
              <li>
                <Link to="/affiliate" className="text-muted-foreground hover:text-primary transition-colors">
                  Affiliate programme
                </Link>
              </li>
              <li>
                <Link to="/residences" className="text-muted-foreground hover:text-primary transition-colors">
                  Residences
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile APP Column */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Mobile APP</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/ios-app" className="text-muted-foreground hover:text-primary transition-colors">
                  iOS app
                </Link>
              </li>
              <li>
                <Link to="/android-app" className="text-muted-foreground hover:text-primary transition-colors">
                  Android app
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Sofitel Frankfurt Opera. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary">
                Impressum
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
