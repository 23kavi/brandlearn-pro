import { Handshake, ClipboardList, Users, CalendarCheck, Award } from "lucide-react";

const steps = [
  { icon: Handshake, title: "School Partners with UGS", description: "Establish a partnership agreement and define program goals." },
  { icon: ClipboardList, title: "Interest Discovery Survey", description: "Students complete a survey to identify their passions and strengths." },
  { icon: Users, title: "Clubs Are Formed", description: "Students are grouped into interest-based clubs with matched trainers." },
  { icon: CalendarCheck, title: "Weekly Activities Begin", description: "UGS trainers conduct engaging weekly sessions for each club." },
  { icon: Award, title: "Student Showcase Events", description: "Students present projects and achievements in showcase events." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple <span className="text-gradient-primary">Partnership Model</span> for Schools
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-button">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="absolute top-8 left-[60%] right-0 h-0.5 bg-border hidden md:block last:hidden" 
                  style={{ display: index === steps.length - 1 ? 'none' : undefined }} />
                <h3 className="text-sm font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
