import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, CheckCircle2, Video, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const consultationTypes = [
  { id: "video", label: "Video", icon: Video },
  { id: "audio", label: "Audio", icon: Phone },
  { id: "in-person", label: "In-person", icon: MapPin },
] as const;

type ConsultationTypeId = typeof consultationTypes[number]["id"];

const doctors = [
  "Dr. Sarah Johnson - Cardiologist",
  "Dr. Michael Chen - Dermatologist",
  "Dr. Priya Sharma - Pediatrician",
  "Dr. James Wilson - Neurologist",
  "Dr. Emily Davis - Dentist",
  "Dr. Ravi Patel - Orthopedic",
];

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

const BookingSection = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [booked, setBooked] = useState(false);

  if (booked) {
    return (
      <section id="booking" className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-lg text-center space-y-6">
          <CheckCircle2 className="w-20 h-20 text-accent mx-auto" />
          <h2 className="text-3xl font-heading font-bold text-foreground">Appointment Confirmed!</h2>
          <p className="text-muted-foreground">We've sent the details to your email. See you soon!</p>
          <Button onClick={() => setBooked(false)} variant="outline">Book Another</Button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-card">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            <CalendarDays className="inline w-8 h-8 text-primary mr-2" />
            Book an <span className="text-primary">Appointment</span>
          </h2>
          <p className="text-muted-foreground text-lg">Select your doctor, pick a date & time, and you're all set.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Calendar */}
          <div className="bg-background rounded-xl border border-border p-6 shadow-card flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => d < new Date()}
              className={cn("p-3 pointer-events-auto")}
            />
          </div>
          {/* Form */}
          <div className="bg-background rounded-xl border border-border p-6 shadow-card space-y-5">
            <div className="space-y-2">
              <Label>Select Doctor</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Choose a doctor" /></SelectTrigger>
                <SelectContent>
                  {doctors.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Select Time</Label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium border transition-all",
                      time === t
                        ? "gradient-primary text-primary-foreground border-transparent"
                        : "bg-background text-muted-foreground border-border hover:border-primary"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Patient Name</Label>
              <Input placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input placeholder="Enter phone number" type="tel" />
            </div>
            <Button className="w-full gradient-primary text-primary-foreground hover:opacity-90" size="lg" onClick={() => setBooked(true)}>
              Confirm Booking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
