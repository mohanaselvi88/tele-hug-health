import { Button } from "@/components/ui/button";
import { CalendarDays, Video } from "lucide-react";
import heroImg from "@/assets/hero-telehealth.jpg";

const HeroSection = () => (
  <section id="home" className="gradient-hero pt-24 pb-16 lg:pt-32 lg:pb-24">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 text-center lg:text-left animate-fade-in">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
          #1 Telehealth Platform
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-foreground">
          Healthcare <br />
          <span className="text-primary">Anytime, Anywhere</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
          Connect with top doctors instantly through video consultations, manage appointments, and access your health records — all from the comfort of your home.
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <Button size="lg" className="gradient-primary text-primary-foreground gap-2 shadow-elevated hover:opacity-90 transition-opacity">
            <CalendarDays className="w-5 h-5" /> Book Appointment
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-secondary">
            <Video className="w-5 h-5" /> Consult Now
          </Button>
        </div>
        <div className="flex items-center gap-6 justify-center lg:justify-start pt-2">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">500+</p>
            <p className="text-xs text-muted-foreground">Doctors</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">50K+</p>
            <p className="text-xs text-muted-foreground">Patients</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">4.9⭐</p>
            <p className="text-xs text-muted-foreground">Rating</p>
          </div>
        </div>
      </div>
      <div className="flex-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <img src={heroImg} alt="Doctor and patient in an online telehealth consultation" width={1280} height={720} className="rounded-2xl shadow-elevated w-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;
