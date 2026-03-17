import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

// Lazy-load below-the-fold sections for faster initial paint
const ProblemSection = lazy(() => import("@/components/ProblemSection"));
const SolutionSection = lazy(() => import("@/components/SolutionSection"));
const ClubsSection = lazy(() => import("@/components/ClubsSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const ProgramStructureSection = lazy(() => import("@/components/ProgramStructureSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const ImpactSection = lazy(() => import("@/components/ImpactSection"));
const FreeTrialSection = lazy(() => import("@/components/FreeTrialSection"));
const TrainersSection = lazy(() => import("@/components/TrainersSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const PilotSection = lazy(() => import("@/components/PilotSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <ProblemSection />
          <SolutionSection />
          <ClubsSection />
          <HowItWorksSection />
          <ProgramStructureSection />
          <BenefitsSection />
          <ImpactSection />
          <FreeTrialSection />
          <TrainersSection />
          <TestimonialsSection />
          <PilotSection />
          <AboutSection />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
