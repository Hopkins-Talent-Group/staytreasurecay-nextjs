import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import DestinationSection from "@/components/DestinationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import IslandLifeSection from "@/components/IslandLifeSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StaysSection from "@/components/StaysSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <StaysSection />
        <IslandLifeSection />
        <ExperienceSection />
        <DestinationSection />
        <BookingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
