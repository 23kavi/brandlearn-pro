import { Cpu, Briefcase, Medal, Sparkles, Palette, Video } from "lucide-react";
import { motion } from "framer-motion";

const trainers = [
  { icon: Briefcase, name: "Business & Startup Mentor", specialty: "Entrepreneurship", description: "Industry professionals who instill business acumen and entrepreneurial thinking in young minds." },
  { icon: Cpu, name: "Technology & Innovation Lead", specialty: "STEM & AI", description: "Certified tech educators bringing cutting-edge coding, robotics, and AI concepts to your campus." },
  { icon: Medal, name: "Sports & Leadership Coach", specialty: "Athletics & Character", description: "Professional coaches developing discipline, resilience, and team leadership through competitive sports." },
  { icon: Sparkles, name: "Soft Skills & Personality Coach", specialty: "Communication & Confidence", description: "Seasoned trainers building public speaking, articulation, emotional intelligence, and personal presence in every student." },
  { icon: Palette, name: "Creative Arts Director", specialty: "Arts & Design", description: "Award-winning creatives guiding students through visual arts, design thinking, and storytelling mastery." },
  { icon: Video, name: "Digital Creator & Content Strategist", specialty: "Reels, Video & Personal Branding", description: "Working creators and content professionals mentoring students in short-form video, reel production, scripting, on-camera presence, and building an authentic digital identity." },
];

const TrainersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Handpicked <span className="text-gradient-primary">Industry Mentors</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every UGS mentor is vetted, trained, and passionate — delivering a caliber of instruction your institution can be proud of.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-card p-6 rounded-xl shadow-card border border-border text-center hover:shadow-card-hover hover-glow transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <trainer.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{trainer.name}</h3>
              <p className="text-primary text-sm font-medium mb-2">{trainer.specialty}</p>
              <p className="text-muted-foreground text-sm">{trainer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
