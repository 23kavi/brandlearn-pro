import { useState } from "react";
import CourseCard, { Course } from "./CourseCard";
import EnrollmentModal from "./EnrollmentModal";

const courses: Course[] = [
  {
    id: "1",
    title: "Full Stack Web Development Bootcamp",
    description:
      "Master front-end and back-end technologies to become a complete web developer.",
    duration: "12 weeks",
    students: 1200,
    rating: 4.9,
    price: "₹25,000",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&q=80",
    category: "Development",
  },
  {
    id: "2",
    title: "Digital Marketing Mastery",
    description:
      "Learn SEO, social media marketing, PPC, and content marketing strategies.",
    duration: "8 weeks",
    students: 890,
    rating: 4.8,
    price: "₹15,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    category: "Marketing",
  },
  {
    id: "3",
    title: "Data Science & Analytics",
    description:
      "Dive into data analysis, machine learning, and visualization techniques.",
    duration: "16 weeks",
    students: 650,
    rating: 4.9,
    price: "₹35,000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
    category: "Data Science",
  },
  {
    id: "4",
    title: "UI/UX Design Fundamentals",
    description:
      "Create stunning user interfaces and seamless user experiences.",
    duration: "10 weeks",
    students: 780,
    rating: 4.7,
    price: "₹20,000",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    category: "Design",
  },
  {
    id: "5",
    title: "Business Communication Skills",
    description:
      "Enhance your professional communication and presentation abilities.",
    duration: "6 weeks",
    students: 1500,
    rating: 4.8,
    price: "₹10,000",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&q=80",
    category: "Soft Skills",
  },
  {
    id: "6",
    title: "Cloud Computing with AWS",
    description:
      "Master cloud architecture and services with Amazon Web Services.",
    duration: "10 weeks",
    students: 420,
    rating: 4.9,
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
    category: "Cloud",
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
