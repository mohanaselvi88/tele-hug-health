import { Clock, Smartphone, Ambulance, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Saves Time", desc: "No waiting rooms. Connect with doctors in minutes from anywhere." },
  { icon: Smartphone, title: "Remote Consultation", desc: "Get expert medical advice through video or chat on any device." },
  { icon: Ambulance, title: "Emergency Support", desc: "24/7 emergency assistance with quick ambulance dispatch." },
  { icon: ShieldCheck, title: "Secure & Private", desc: "Your health data is encrypted and fully HIPAA-compliant." },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-card">
    <div className="container mx-auto px-4 text-center space-y-12">
      <div className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
          What is <span className="text-primary">Telehealth</span>?
        </h2>
        <p className="text-muted-foreground text-lg">
          Telehealth uses digital technology to deliver healthcare services remotely. From routine check-ups to specialist consultations, get the care you need without leaving home.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="group p-6 rounded-xl bg-background border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
              <b.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
