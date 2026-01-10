import { Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  image: string;
  category: string;
}

interface CourseCardProps {
  course: Course;
  onEnroll: (course: Course) => void;
}

const CourseCard = ({ course, onEnroll }: CourseCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{course.students}+</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-accent fill-accent" />
            <span>{course.rating}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <p className="text-xl font-bold text-primary">{course.price}</p>
          <Button variant="default" size="sm" onClick={() => onEnroll(course)}>
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
