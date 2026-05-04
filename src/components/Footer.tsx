import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-10 bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-lg">
          <Heart className="w-5 h-5" />
          Smart Telehealth
        </Link>
        <p className="text-sm opacity-70">© 2026 Smart Telehealth Portal. All rights reserved.</p>
        <div className="flex gap-4 text-sm opacity-70">
          <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy</Link>
          <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms</Link>
          <Link to="/contact" className="hover:opacity-100 transition-opacity">Support</Link>
          <Link to="/dashboard" className="hover:opacity-100 transition-opacity">Dashboard</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
