import { ClipboardList, Settings, CalendarCheck, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pilotFeatures = [
  { icon: ClipboardList, text: "Student interest survey" },
  { icon: Settings, text: "Club setup and management" },
  { icon: CalendarCheck, text: "Weekly trainer-led sessions" },
  { icon: Award, text: "Student showcase event" },
];

const PilotSection = () => {
  return (
    <section id="pilot" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-cta rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Start With a 3-Month Pilot Program
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              Schools can test the UGS program before long-term implementation. Experience the impact risk-free.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {pilotFeatures.map((feature) => (
                <div key={feature.text} className="text-center">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground/90 text-sm font-medium">{feature.text}</p>
                </div>
              ))}
            </div>

            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold shadow-lg"
              asChild
            >
              <a href="#contact">
                Apply for Pilot Program
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotSection;
