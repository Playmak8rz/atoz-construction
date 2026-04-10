import { Link } from "wouter";
import { Hammer, Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-sm">
                <Hammer className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                A TO Z <span className="text-primary font-black">CONSTRUCTION</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Premier full-service construction company serving all five boroughs of New York City. From ground-up builds to fine interior finishes, we build the city block by block.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-gray-800 hover:bg-primary transition-colors rounded-sm text-white" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-primary transition-colors rounded-sm text-white" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-primary transition-colors rounded-sm text-white" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-primary inline-block"></span> Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Featured Projects</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-primary inline-block"></span> Main Services
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services#general" className="hover:text-primary transition-colors">General Contracting</Link></li>
              <li><Link href="/services#renovations" className="hover:text-primary transition-colors">Gut Renovations</Link></li>
              <li><Link href="/services#concrete" className="hover:text-primary transition-colors">Concrete & Masonry</Link></li>
              <li><Link href="/services#roofing" className="hover:text-primary transition-colors">Roofing Systems</Link></li>
              <li><Link href="/services#interior" className="hover:text-primary transition-colors">Fine Interior Finishes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-primary inline-block"></span> Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">123 Construction Ave, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">(212) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">build@atozconstruction.nyc</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} A to Z Construction NYC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}