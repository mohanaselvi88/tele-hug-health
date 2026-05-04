import { useState } from "react";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Sparkles } from "lucide-react";

const suggestions = [
  "Stay hydrated and rest for the next 24 hours.",
  "Monitor your temperature every 4 hours.",
  "Consider booking a video consultation with a general physician.",
  "Avoid strenuous activity until symptoms improve.",
];

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const analyze = () => {
    if (!symptoms.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setResult(suggestions);
      setLoading(false);
    }, 900);
  };

  return (
    <PageShell title="AI Symptom Checker" subtitle="Describe how you feel — get instant guidance (demo).">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-card border border-border rounded-xl p-6 shadow-card space-y-4">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Bot className="w-5 h-5 text-primary" /> Describe your symptoms
          </label>
          <Textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="e.g. Headache, mild fever, sore throat for 2 days..."
            rows={5}
          />
          <Button onClick={analyze} disabled={loading} className="w-full gradient-primary text-primary-foreground">
            <Sparkles className="w-4 h-4" /> {loading ? "Analyzing..." : "Analyze Symptoms"}
          </Button>
        </div>
        {result && (
          <div className="bg-card border border-border rounded-xl p-6 shadow-card space-y-3">
            <h2 className="font-heading font-semibold text-lg text-foreground">Recommendations</h2>
            <ul className="space-y-2">
              {result.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span> {r}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground italic pt-2">
              This is a demo and not a medical diagnosis. Always consult a licensed doctor.
            </p>
          </div>
        )}
      </div>
    </PageShell>
  );
};

export default SymptomChecker;
