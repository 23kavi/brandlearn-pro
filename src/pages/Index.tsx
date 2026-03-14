import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ClubsSection from "@/components/ClubsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProgramStructureSection from "@/components/ProgramStructureSection";
import ImpactSection from "@/components/ImpactSection";
import TrainersSection from "@/components/TrainersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PilotSection from "@/components/PilotSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ClubsSection />
        <HowItWorksSection />
        <ProgramStructureSection />
        <ImpactSection />
        <TrainersSection />
        <TestimonialsSection />
        <PilotSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
