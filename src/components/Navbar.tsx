import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Book Appointment", href: "#booking" },
  { label: "Emergency", href: "#emergency" },
  { label: "Health Tips", href: "#tips" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
          <Heart className="w-6 h-6 fill-primary text-primary-foreground" />
          Smart Telehealth
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm">Login</Button>
          <Button size="sm">Sign Up</Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-4 space-y-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1">Login</Button>
            <Button size="sm" className="flex-1">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
