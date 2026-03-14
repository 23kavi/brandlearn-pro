import { Search, Users, Presentation, Trophy } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "Step 1",
    title: "Student Interest Discovery Survey",
    description: "A structured survey helps identify each student's unique interests and talents.",
  },
  {
    icon: Users,
    step: "Step 2",
    title: "Formation of Interest-Based Clubs",
    description: "Students are grouped into clubs based on their passions and interests.",
  },
  {
    icon: Presentation,
    step: "Step 3",
    title: "Trainer-Led Weekly Activities",
    description: "Expert trainers conduct engaging weekly sessions tailored to each club.",
  },
  {
    icon: Trophy,
    step: "Step 4",
    title: "Projects, Competitions & Showcases",
    description: "Students showcase their growth through projects, competitions, and events.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The UGS{" "}
            <span className="text-gradient-primary">Student Development System</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven, structured approach to unlock every student's potential.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col md:flex-row items-center gap-6 animate-fade-in ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-1">
                  <div className="bg-card p-6 rounded-xl shadow-card border border-border">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mt-2 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-button shrink-0">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
