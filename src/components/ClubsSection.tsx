import { Cpu, Briefcase, Palette, Medal, Mic } from "lucide-react";
import { motion } from "framer-motion";

const clubs = [
  {
    icon: Cpu,
    title: "Innovation & Technology Club",
    description: "Explore coding, robotics, AI concepts, and tech-driven problem solving through hands-on projects.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurship Club",
    description: "Learn business thinking, startup basics, financial literacy, and how to turn ideas into action.",
  },
  {
    icon: Palette,
    title: "Creative Arts Club",
    description: "Express through visual arts, music, design, filmmaking, and creative storytelling.",
  },
  {
    icon: Medal,
    title: "Sports Leadership Club",
    description: "Develop sportsmanship, teamwork, fitness discipline, and leadership through athletic activities.",
  },
  {
    icon: Mic,
    title: "Public Speaking & Debate Club",
    description: "Build confidence, articulation, critical thinking, and persuasion through speaking and debate.",
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
            UGS <span className="text-gradient-primary">Student Clubs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Interest-based clubs that let students explore, create, and lead.
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
