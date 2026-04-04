import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 font-heading font-bold text-lg">
          <Heart className="w-5 h-5" />
          Smart Telehealth
        </a>
        <p className="text-sm opacity-70">© 2026 Smart Telehealth Portal. All rights reserved.</p>
        <div className="flex gap-4 text-sm opacity-70">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-100 transition-opacity">FAQ</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
