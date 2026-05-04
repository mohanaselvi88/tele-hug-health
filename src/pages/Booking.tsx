import PageShell from "@/components/PageShell";
import BookingSection from "@/components/BookingSection";

const Booking = () => (
  <PageShell title="Book an Appointment" subtitle="Pick your doctor, date, time and consultation type.">
    <BookingSection />
  </PageShell>
);

export default Booking;
