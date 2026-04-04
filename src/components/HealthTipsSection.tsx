import { Badge } from "@/components/ui/badge";

const tips = [
  { tag: "Wellness", title: "10 Tips to Boost Your Immunity Naturally", desc: "Discover simple daily habits that strengthen your immune system and keep you healthy year-round.", date: "Apr 2, 2026" },
  { tag: "Nutrition", title: "The Power of a Balanced Diet", desc: "Learn how proper nutrition can prevent chronic diseases and improve your energy levels.", date: "Mar 28, 2026" },
  { tag: "Mental Health", title: "Managing Stress in a Digital World", desc: "Practical techniques to reduce stress and improve mental clarity in our always-connected lives.", date: "Mar 22, 2026" },
];

const HealthTipsSection = () => (
  <section id="tips" className="py-20 bg-background">
    <div className="container mx-auto px-4 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
          Health <span className="text-primary">Tips & Blog</span>
        </h2>
        <p className="text-muted-foreground text-lg">Stay informed with the latest health insights and expert advice.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((t) => (
          <article key={t.title} className="bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group cursor-pointer">
            <div className="h-40 gradient-primary flex items-center justify-center text-5xl opacity-80 group-hover:opacity-100 transition-opacity">
              📖
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{t.tag}</Badge>
                <span className="text-xs text-muted-foreground">{t.date}</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{t.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{t.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default HealthTipsSection;
