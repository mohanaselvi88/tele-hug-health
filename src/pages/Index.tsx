import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DoctorsSection from "@/components/DoctorsSection";
import BookingSection from "@/components/BookingSection";
import EmergencySection from "@/components/EmergencySection";
import HealthTipsSection from "@/components/HealthTipsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <DoctorsSection />
    <BookingSection />
    <EmergencySection />
    <HealthTipsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
