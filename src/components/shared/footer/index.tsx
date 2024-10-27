import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin } from "lucide-react"; // Import icons from Lucide
import Link from "next/link";

export function Footer() {
  return (
    <footer className={cn("bg-background py-8 text-center border-t border-border")}>
      <div className="container mx-auto flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
        {/* Brand Section */}
        <div className="text-primary space-y-2 md:text-left">
          <h2 className="text-2xl font-bold">CoffeeShop HRMS</h2>
          <p className="text-sm text-muted">Effortlessly manage your workforce</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-8 md:space-y-0">
          <Link href="/about" className="text-sm hover:text-secondary">About Us</Link>
          <Link href="/contact" className="text-sm hover:text-secondary">Contact</Link>
          <Link href="/faq" className="text-sm hover:text-secondary">FAQ</Link>
        </div>

        {/* Contact Section */}
        <div className="space-y-2 text-muted text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>info@coffeeshop.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>123 Coffee St., Seattle, WA</span>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-6 flex justify-center space-x-4">
        <Link href="https://twitter.com" className="text-secondary hover:text-primary" aria-label="Twitter">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {/* Twitter SVG icon */}
          </svg>
        </Link>
        <Link href="https://facebook.com" className="text-secondary hover:text-primary" aria-label="Facebook">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {/* Facebook SVG icon */}
          </svg>
        </Link>
        <Link href="https://instagram.com" className="text-secondary hover:text-primary" aria-label="Instagram">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            {/* Instagram SVG icon */}
          </svg>
        </Link>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 text-muted text-xs">
        &copy; {new Date().getFullYear()} CoffeeShop HRMS. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
