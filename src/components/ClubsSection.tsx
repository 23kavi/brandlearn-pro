import { Cpu, Briefcase, Palette, Medal, Mic } from "lucide-react";
import { motion } from "framer-motion";

const clubs = [
  {
    icon: Cpu,
    title: "Innovation & Technology",
    description: "From coding and robotics to AI fundamentals — students build the technical fluency that defines tomorrow's leaders.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurship & Business",
    description: "Startup thinking, financial literacy, and real-world problem solving — cultivating the entrepreneurial mindset from day one.",
  },
  {
    icon: Palette,
    title: "Creative Arts & Design",
    description: "Visual arts, filmmaking, design thinking, and storytelling — nurturing the creative confidence every student deserves.",
  },
  {
    icon: Medal,
    title: "Sports & Leadership",
    description: "Sportsmanship, team strategy, and fitness discipline — developing resilient leaders through competitive athletics.",
  },
  {
    icon: Mic,
    title: "Public Speaking & Debate",
    description: "Articulation, critical reasoning, and persuasion — giving students the voice and confidence to stand out anywhere.",
  },
];

const ClubsSection = () => {
  return (
    <section id="clubs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            World-Class <span className="text-gradient-primary">Student Clubs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Five expertly designed verticals that transform your school into a hub of holistic excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clubs.map((club, index) => (
            <motion.div
              key={club.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <club.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {club.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {club.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
