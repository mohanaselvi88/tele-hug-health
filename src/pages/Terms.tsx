import PageShell from "@/components/PageShell";

const Terms = () => (
  <PageShell title="Terms of Service" subtitle="Last updated May 2026">
    <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground space-y-4">
      <p>By using Smart Telehealth you agree to these terms. This is a demo document.</p>
      <h2 className="text-foreground font-semibold text-lg">Use of Service</h2>
      <p>Our service is for non-emergency consultations. For emergencies call your local emergency number.</p>
      <h2 className="text-foreground font-semibold text-lg">Accounts</h2>
      <p>You are responsible for maintaining the confidentiality of your login credentials.</p>
      <h2 className="text-foreground font-semibold text-lg">Liability</h2>
      <p>The platform provides a tool for telehealth and is not liable for medical outcomes.</p>
    </div>
  </PageShell>
);

export default Terms;
