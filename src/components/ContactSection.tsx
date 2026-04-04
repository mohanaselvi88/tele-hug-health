import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-card">
    <div className="container mx-auto px-4 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-lg">Have questions? We'd love to hear from you.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Email Us</h3>
              <p className="text-muted-foreground text-sm">support@smarttelehealth.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Call Us</h3>
              <p className="text-muted-foreground text-sm">+1 (800) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Visit Us</h3>
              <p className="text-muted-foreground text-sm">123 Health Street, Medical City, HC 45678</p>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-xl border border-border p-6 shadow-card space-y-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input placeholder="Your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label>Message</Label>
            <Textarea placeholder="How can we help?" rows={4} />
          </div>
          <Button className="w-full gradient-primary text-primary-foreground hover:opacity-90">Send Message</Button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
