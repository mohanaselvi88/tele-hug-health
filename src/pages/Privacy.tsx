import PageShell from "@/components/PageShell";

const Privacy = () => (
  <PageShell title="Privacy Policy" subtitle="Last updated May 2026">
    <div className="max-w-3xl mx-auto prose prose-sm text-muted-foreground space-y-4">
      <p>We respect your privacy. This demo policy outlines how Smart Telehealth handles your information.</p>
      <h2 className="text-foreground font-semibold text-lg">Information We Collect</h2>
      <p>Account details, appointment history, and health information you choose to share with your provider.</p>
      <h2 className="text-foreground font-semibold text-lg">How We Use It</h2>
      <p>To facilitate consultations, send appointment reminders, and improve our service.</p>
      <h2 className="text-foreground font-semibold text-lg">Your Rights</h2>
      <p>You can request access, correction, or deletion of your data at any time via support.</p>
    </div>
  </PageShell>
);

export default Privacy;
