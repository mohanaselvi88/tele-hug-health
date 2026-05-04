import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const PageShell = ({ title, subtitle, children }: PageShellProps) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">{title}</h1>
          {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
        </header>
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export default PageShell;
