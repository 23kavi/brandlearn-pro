import { useState } from "react";
import { X, Loader2, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Course } from "./CourseCard";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course | null;
}

const GOOGLE_FORM_URL = "https://forms.gle/u6NW9tWMGFczmoR38";

const EnrollmentModal = ({ isOpen, onClose, course }: EnrollmentModalProps) => {
  const { toast } = useToast();

  if (!isOpen || !course) return null;

  const handleEnrollClick = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    toast({
      title: "Redirecting to Enrollment Form",
      description: `Please fill the form to enroll in ${course.title}`,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-md p-6 animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Enroll in Course
          </h2>
          <p className="text-muted-foreground">{course.title}</p>
          <p className="text-primary font-semibold text-xl mt-2">{course.price}</p>
        </div>

        {/* Course Details */}
        <div className="bg-secondary/50 rounded-xl p-4 mb-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Duration:</span>
            <span className="text-foreground font-medium">{course.duration}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Category:</span>
            <span className="text-foreground font-medium">{course.category}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Format:</span>
            <span className="text-foreground font-medium">Live Online + Projects</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Schedule:</span>
            <span className="text-foreground font-medium">Fri, Sat, Sun (Evening)</span>
          </div>
        </div>

        {/* What You'll Get */}
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Industry-Led Curriculum
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              MNC Expert Trainers
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Hands-on Training & Live Projects
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              100% Placement Support
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <Button
          variant="hero"
          size="lg"
          className="w-full"
          onClick={handleEnrollClick}
        >
          Enroll Now via Google Form
          <ExternalLink size={18} />
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          You'll be redirected to our secure enrollment form
        </p>
      </div>
    </div>
  );
};

export default EnrollmentModal;
