
export const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Sofitel Frankfurt Opera. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/impressum" className="text-sm text-muted-foreground hover:text-primary">
              Impressum
            </a>
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
