import { useState } from "react";
import CourseCard, { Course } from "./CourseCard";
import EnrollmentModal from "./EnrollmentModal";

const courses: Course[] = [
  {
    id: "1",
    title: "DSA with Java",
    description:
      "Master Data Structures & Algorithms with Java Programming, OOP concepts, Recursion, Dynamic Programming, Trees, Graphs, and SQL fundamentals.",
    duration: "4 months",
    students: 500,
    rating: 4.9,
    price: "₹9,999",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&q=80",
    category: "Development",
  },
  {
    id: "2",
    title: "Python & AI",
    description:
      "Learn Python programming, OOP, Machine Learning concepts, Neural Networks, Deep Learning basics, and build real-world AI applications.",
    duration: "4 months",
    students: 650,
    rating: 4.8,
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80",
    category: "AI/ML",
  },
  {
    id: "3",
    title: "Computer Course",
    description:
      "Complete MS Office Suite, Google Workspace, Canva for Design, LinkedIn networking, Job Portals, Freelancing Platforms, and Digital Etiquette.",
    duration: "4 months",
    students: 1200,
    rating: 4.7,
    price: "₹999",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
    category: "Basics",
  },
  {
    id: "4",
    title: "Business Development",
    description:
      "Master Sales Process, Lead Generation, CRM, Digital Marketing, SEO, Social Media, Public Speaking, Negotiation, and Strategic Partnerships.",
    duration: "4 months",
    students: 450,
    rating: 4.8,
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    category: "Business",
  },
];

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-primary">Popular Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of courses designed to help you
            succeed in today's competitive world. Each course is crafted with
            care by industry experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard course={course} onEnroll={handleEnroll} />
            </div>
          ))}
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={selectedCourse}
      />
    </section>
  );
};

export default CoursesSection;
