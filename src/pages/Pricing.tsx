import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  { name: "Basic", price: "Free", features: ["1 consultation/month", "Health tips access", "Symptom checker"], cta: "Get Started" },
  { name: "Plus", price: "$9/mo", features: ["Unlimited chat consults", "5 video consults/mo", "Prescription history", "24/7 support"], featured: true, cta: "Start Plus" },
  { name: "Family", price: "$19/mo", features: ["Up to 5 members", "Unlimited video consults", "Specialist access", "Priority booking"], cta: "Choose Family" },
];

const Pricing = () => (
  <PageShell title="Simple, Transparent Pricing" subtitle="Choose the plan that fits your care needs.">
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {plans.map((p) => (
        <div key={p.name} className={`rounded-xl border p-6 shadow-card flex flex-col gap-4 ${p.featured ? "border-primary bg-card ring-2 ring-primary/20" : "border-border bg-card"}`}>
          {p.featured && <span className="text-xs font-semibold text-primary uppercase">Most Popular</span>}
          <h2 className="font-heading text-xl font-bold text-foreground">{p.name}</h2>
          <p className="text-3xl font-bold text-foreground">{p.price}</p>
          <ul className="space-y-2 flex-1">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-accent" /> {f}
              </li>
            ))}
          </ul>
          <Button asChild className={p.featured ? "gradient-primary text-primary-foreground" : ""} variant={p.featured ? "default" : "outline"}>
            <Link to="/signup">{p.cta}</Link>
          </Button>
        </div>
      ))}
    </div>
  </PageShell>
);

export default Pricing;
