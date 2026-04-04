import { Button } from "@/components/ui/button";
import { Phone, Ambulance, MapPin } from "lucide-react";

const EmergencySection = () => (
  <section id="emergency" className="py-20 bg-destructive/5">
    <div className="container mx-auto px-4 text-center space-y-10">
      <div className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
          🚨 <span className="text-destructive">Emergency</span> Services
        </h2>
        <p className="text-muted-foreground text-lg">Need urgent help? We're here for you 24/7.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div className="bg-card rounded-xl border border-border p-6 shadow-card space-y-3">
          <Phone className="w-10 h-10 text-destructive mx-auto" />
          <h3 className="font-heading font-semibold text-foreground">Quick Call</h3>
          <p className="text-sm text-muted-foreground">Tap to call our emergency helpline instantly.</p>
          <Button variant="destructive" className="w-full gap-2"><Phone className="w-4 h-4" /> Call Now</Button>
        </div>
        <div className="bg-card rounded-xl border border-border p-6 shadow-card space-y-3">
          <Ambulance className="w-10 h-10 text-destructive mx-auto" />
          <h3 className="font-heading font-semibold text-foreground">Ambulance</h3>
          <p className="text-sm text-muted-foreground">Request an ambulance to your location.</p>
          <Button variant="destructive" className="w-full gap-2"><Ambulance className="w-4 h-4" /> Request</Button>
        </div>
        <div className="bg-card rounded-xl border border-border p-6 shadow-card space-y-3">
          <MapPin className="w-10 h-10 text-destructive mx-auto" />
          <h3 className="font-heading font-semibold text-foreground">Nearby Hospitals</h3>
          <p className="text-sm text-muted-foreground">Find hospitals and clinics near you.</p>
          <Button variant="destructive" className="w-full gap-2"><MapPin className="w-4 h-4" /> Find</Button>
        </div>
      </div>
    </div>
  </section>
);

export default EmergencySection;
