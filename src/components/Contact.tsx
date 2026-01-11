import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const API_URL = import.meta.env.VITE_API_URL || "https://littlejuniordps-backend.onrender.com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProgramChange = (value: string) => {
    setFormData({ ...formData, program: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Use the API_URL constant
    const response = await fetch(`${API_URL}/api/enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        childName: formData.childName,
        childAge: formData.childAge,
        parentName: formData.parentName,
        phone: formData.phone,
        email: formData.email,
        class: formData.program,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Enquiry Submitted! 🎉",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        childName: "",
        childAge: "",
        parentName: "",
        phone: "",
        email: "",
        program: "",
        message: "",
      });
    } else {
      toast({
        title: "Submission Failed",
        description: result.error || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error("Form submission error:", error);
    toast({
      title: "Network Error",
      description: "Could not connect to server. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 9742994570",
      href: "tel:+919742994570",
      color: "bg-grass",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "littlejuniordps@gmail.com",
      href: "mailto:littlejuniordps@gmail.com",
      color: "bg-sky",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Your School Address Here",
      href: "#location",
      color: "bg-coral",
    },
  ];

  const programs = [
    { value: "playgroup", label: "Playgroup (1.5 - 2.5 years)" },
    { value: "nursery", label: "Nursery (2.5 - 3.5 years)" },
    { value: "junior-kg", label: "Junior KG (3.5 - 4.5 years)" },
    { value: "senior-kg", label: "Senior KG (4.5 - 5.5 years)" },
    { value: "daycare", label: "Day Care (1 - 6 years)" },
  ];

  return (
    <section id="contact" className="py-20 bg-card relative overflow-hidden">
      <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-sunny/20 animate-float" />
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-sky/20 animate-float-reverse" />
      <div className="absolute top-1/3 right-5 w-40 h-40 rounded-full bg-coral/10 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-4xl mb-4">📬</span>
          <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you! Send us an enquiry and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-background rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-coral/20 blur-2xl" />
            
            <h3 className="font-fredoka text-2xl font-bold text-foreground mb-6 relative z-10">
              Enquiry Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="childName" className="font-nunito font-semibold">
                    Child's Name <span className="text-coral">*</span>
                  </Label>
                  <Input
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Enter child's name"
                    required
                    className="rounded-xl border-2 border-border/50 focus:border-primary bg-muted/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="childAge" className="font-nunito font-semibold">
                    Child's Age <span className="text-coral">*</span>
                  </Label>
                  <Input
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="Age in years"
                    required
                    className="rounded-xl border-2 border-border/50 focus:border-primary bg-muted/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentName" className="font-nunito font-semibold">
                  Parent's Name <span className="text-coral">*</span>
                </Label>
                <Input
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent's name"
                  required
                  className="rounded-xl border-2 border-border/50 focus:border-primary bg-muted/30"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-nunito font-semibold">
                    Phone Number <span className="text-coral">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="rounded-xl border-2 border-border/50 focus:border-primary bg-muted/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-nunito font-semibold">
                    Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="rounded-xl border-2 border-border/50 focus:border-primary bg-muted/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="program" className="font-nunito font-semibold">
                  Select Class
                </Label>
                <Select value={formData.program} onValueChange={handleProgramChange}>
                  <SelectTrigger className="rounded-xl border-2 border-border/50 focus:border-primary bg-muted/30 h-12">
                    <SelectValue placeholder="Choose a program" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-2 border-border rounded-xl z-50">
                    {programs.map((program) => (
                      <SelectItem
                        key={program.value}
                        value={program.value}
                        className="font-nunito hover:bg-muted cursor-pointer"
                      >
                        {program.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-nunito font-semibold">
                  Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific questions or requirements?"
                  rows={4}
                  className="rounded-xl border-2 border-border/50 focus:border-primary resize-none bg-muted/30"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-coral to-sunny hover:from-coral/90 hover:to-sunny/90 text-white font-bold text-lg py-6 rounded-xl hover:scale-[1.02] transition-transform shadow-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Submit Enquiry
                  </span>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="font-fredoka text-2xl font-bold text-foreground mb-6">
              Contact Information 📞
            </h3>

            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="group flex items-center gap-4 bg-background rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-nunito text-sm text-muted-foreground">
                    {info.label}
                  </div>
                  <div className="font-fredoka text-lg font-bold text-foreground">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            <div className="bg-gradient-to-r from-sunny/20 via-coral/20 to-lavender/20 rounded-3xl p-6 mt-8">
              <h4 className="font-fredoka text-xl font-bold text-foreground mb-3">
                🌟 Quick Response Guaranteed!
              </h4>
              <p className="font-nunito text-muted-foreground">
                We typically respond within 2-4 hours during school hours. 
                For urgent queries, please call us directly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
