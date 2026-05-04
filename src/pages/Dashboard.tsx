import PageShell from "@/components/PageShell";
import { CalendarDays, FileText, Pill, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: CalendarDays, label: "Upcoming Appointments", value: "2" },
  { icon: FileText, label: "Medical Records", value: "8" },
  { icon: Pill, label: "Active Prescriptions", value: "3" },
  { icon: Activity, label: "Health Score", value: "92%" },
];

const upcoming = [
  { doctor: "Dr. Sarah Johnson", spec: "Cardiologist", when: "Tomorrow, 10:00 AM", type: "Video" },
  { doctor: "Dr. Priya Sharma", spec: "Pediatrician", when: "Fri, 2:00 PM", type: "Audio" },
];

const Dashboard = () => (
  <PageShell title="Patient Dashboard" subtitle="Your health, all in one place.">
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-5 shadow-card">
            <s.icon className="w-6 h-6 text-primary mb-3" />
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-card border border-border rounded-xl p-6 shadow-card space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-semibold text-lg text-foreground">Upcoming Appointments</h2>
          <Button asChild size="sm" variant="outline"><Link to="/booking">Book New</Link></Button>
        </div>
        <ul className="divide-y divide-border">
          {upcoming.map((a) => (
            <li key={a.doctor} className="py-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">{a.doctor}</p>
                <p className="text-sm text-muted-foreground">{a.spec} • {a.when}</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{a.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </PageShell>
);

export default Dashboard;
