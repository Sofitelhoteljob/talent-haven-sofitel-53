
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
                <a 
                  href="https://all.accor.com/a/en/sustainability.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sustainable Development
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile APP Column */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Mobile APP</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://apps.apple.com/fr/app/accorhotels-reservation-dhotels/id489472613?mat_click_id=e049ba62d2de4110bf75f6dc18cf287e-20220412-14012&referrer=mat_click_id%3De049ba62d2de4110bf75f6dc18cf287e-20220412-14012%26link_click_id%3D1042332667187820012" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  iOS app
                </a>
              </li>
              <li>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.accor.appli.hybrid&hl=fr&referrer=mat_click_id%3Dca6a7d28948a4be0a58f9e7135eb3b82-20220412-14012%26link_click_id%3D1042332595720954781&mat_click_id=ca6a7d28948a4be0a58f9e7135eb3b82-20220412-14012" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Android app
                </a>
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
