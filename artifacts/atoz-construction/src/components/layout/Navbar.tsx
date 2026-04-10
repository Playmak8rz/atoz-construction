import { Link, useLocation } from "wouter";
import { Menu, X, Hammer, HardHat } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/95 backdrop-blur-sm border-gray-200 shadow-sm py-2" : "bg-black/20 backdrop-blur-sm py-4",
        location !== "/" && !isScrolled && "bg-secondary text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" data-testid="link-logo">
          <div className="bg-primary text-primary-foreground p-2 rounded-sm group-hover:scale-105 transition-transform">
            <Hammer className="h-6 w-6" />
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight transition-colors",
            isScrolled ? "text-gray-900" : "text-white"
          )}>
            A TO Z <span className="text-primary font-black">CONSTRUCTION</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  "text-sm font-semibold tracking-wide hover:text-primary transition-colors uppercase",
                  location === link.path ? "text-primary" : (isScrolled ? "text-gray-700" : "text-gray-200")
                )}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-sm uppercase tracking-wide px-6">
            <Link href="/contact" data-testid="btn-nav-quote">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2", isScrolled ? "text-gray-900" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="btn-mobile-menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={cn(
                "p-4 border-b border-gray-100 font-bold uppercase text-gray-800",
                location === link.path && "text-primary"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="mt-4 bg-primary hover:bg-primary/90 rounded-sm font-bold uppercase w-full">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
          </Button>
        </div>
      )}
    </header>
  );
}