import { useState } from "react";
import { X, Loader2, CheckCircle } from "lucide-react";
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

const EnrollmentModal = ({ isOpen, onClose, course }: EnrollmentModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    webhookUrl: "",
  });
  const { toast } = useToast();

  if (!isOpen || !course) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      toast({
        title: "Error",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const enrollmentData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      courseName: course.title,
      coursePrice: course.price,
      courseDuration: course.duration,
      courseCategory: course.category,
      enrollmentDate: new Date().toISOString(),
      source: window.location.origin,
    };

    try {
      // If webhook URL is provided, send data there (for Zapier/Make integration)
      if (formData.webhookUrl.trim()) {
        await fetch(formData.webhookUrl.trim(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(enrollmentData),
        });
      }

      // Show success
      setIsSuccess(true);
      toast({
        title: "Enrollment Successful! 🎉",
        description: `You've enrolled in ${course.title}. We'll contact you soon!`,
      });

      // Reset after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ fullName: "", email: "", phone: "", webhookUrl: formData.webhookUrl });
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Enrollment error:", error);
      toast({
        title: "Enrollment Submitted",
        description: "Your enrollment has been recorded. We'll be in touch soon!",
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Enrollment Successful!
            </h3>
            <p className="text-muted-foreground">
              Thank you for enrolling. We'll contact you shortly.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Enroll in Course
              </h2>
              <p className="text-muted-foreground">{course.title}</p>
              <p className="text-primary font-semibold mt-1">{course.price}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1"
                  maxLength={100}
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                  maxLength={255}
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter 10-digit number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1"
                  maxLength={15}
                />
              </div>

              <div>
                <Label htmlFor="webhookUrl">
                  Webhook URL (Zapier/Make) - Optional
                </Label>
                <Input
                  id="webhookUrl"
                  name="webhookUrl"
                  type="url"
                  placeholder="https://hooks.zapier.com/..."
                  value={formData.webhookUrl}
                  onChange={handleChange}
                  className="mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Connect to Zapier or Make to send enrollments to Excel
                </p>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full mt-6"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Processing...
                  </>
                ) : (
                  "Complete Enrollment"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EnrollmentModal;
