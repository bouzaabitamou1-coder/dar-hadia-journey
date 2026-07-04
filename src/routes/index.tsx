import { createFileRoute } from "@tanstack/react-router";

import Loader from "@/components/site/Loader";
import SmoothScroll from "@/components/site/SmoothScroll";
import LanternCursor from "@/components/site/LanternCursor";
import SiteNav from "@/components/site/SiteNav";
import Hero from "@/components/site/Hero";
import StoryOfHadia from "@/components/site/StoryOfHadia";
import RiadExperience from "@/components/site/RiadExperience";
import LuxurySuites from "@/components/site/LuxurySuites";
import Gastronomy from "@/components/site/Gastronomy";
import Rooftop from "@/components/site/Rooftop";
import CookingClasses from "@/components/site/CookingClasses";
import Awards from "@/components/site/Awards";
import Testimonials from "@/components/site/Testimonials";
import InteractiveGallery from "@/components/site/InteractiveGallery";
import ExploreFez from "@/components/site/ExploreFez";
import ReservationCTA from "@/components/site/ReservationCTA";
import ContactFooter from "@/components/site/ContactFooter";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import EnquiryDrawer from "@/components/site/EnquiryDrawer";

export const Route = createFileRoute("/")({
  component: DarHadiaHome,
});

function DarHadiaHome() {
  return (
    <div className="relative bg-ebony text-cream">
      <Loader />
      <SmoothScroll />
      <LanternCursor />
      <SiteNav />

      <main>
        <Hero />
        <StoryOfHadia />
        <RiadExperience />
        <LuxurySuites />
        <Gastronomy />
        <Rooftop />
        <CookingClasses />
        <Awards />
        <Testimonials />
        <InteractiveGallery />
        <ExploreFez />
        <ReservationCTA />
      </main>

      <ContactFooter />
      <WhatsAppFloat />
      <EnquiryDrawer />
    </div>
  );
}
