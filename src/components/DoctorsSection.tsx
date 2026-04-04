import { Button } from "@/components/ui/button";
import { Star, Video } from "lucide-react";

const doctors = [
  { name: "Dr. Sarah Johnson", spec: "Cardiologist", exp: "12 years", rating: 4.9, avatar: "👩‍⚕️" },
  { name: "Dr. Michael Chen", spec: "Dermatologist", exp: "8 years", rating: 4.8, avatar: "👨‍⚕️" },
  { name: "Dr. Priya Sharma", spec: "Pediatrician", exp: "15 years", rating: 4.9, avatar: "👩‍⚕️" },
  { name: "Dr. James Wilson", spec: "Neurologist", exp: "10 years", rating: 4.7, avatar: "👨‍⚕️" },
  { name: "Dr. Emily Davis", spec: "Dentist", exp: "6 years", rating: 4.8, avatar: "👩‍⚕️" },
  { name: "Dr. Ravi Patel", spec: "Orthopedic", exp: "14 years", rating: 4.9, avatar: "👨‍⚕️" },
];

const DoctorsSection = () => (
  <section id="doctors" className="py-20 bg-background">
    <div className="container mx-auto px-4 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
          Our <span className="text-primary">Expert Doctors</span>
        </h2>
        <p className="text-muted-foreground text-lg">Consult with top-rated specialists from the comfort of your home.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((d) => (
          <div key={d.name} className="bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 p-6 flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-4xl">
              {d.avatar}
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground">{d.name}</h3>
              <p className="text-sm text-primary font-medium">{d.spec}</p>
              <p className="text-xs text-muted-foreground mt-1">{d.exp} experience</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-foreground">{d.rating}</span>
            </div>
            <Button className="w-full gradient-primary text-primary-foreground gap-2 hover:opacity-90 transition-opacity">
              <Video className="w-4 h-4" /> Consult Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;
