import { Shield, Heart, BookOpen, Clock, Users, Award } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "CCTV surveillance, secure entry, and child-proofed premises",
      color: "bg-sky",
    },
    {
      icon: Heart,
      title: "Caring Teachers",
      description: "Trained, loving staff who treat every child as their own",
      color: "bg-coral",
    },
    {
      icon: BookOpen,
      title: "Play-Based Curriculum",
      description: "Learning through fun activities, games, and creative play",
      color: "bg-grass",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Extended daycare hours to support working parents",
      color: "bg-lavender",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with optimal student-teacher ratio",
      color: "bg-sunny",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "10+ years of nurturing successful, confident children",
      color: "bg-pink",
    },
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-sunny/20 to-coral/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-sky/20 to-lavender/20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-4xl mb-4">⭐</span>
          <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Us</span>?
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-2xl mx-auto">
            We go above and beyond to ensure your child's happiness, safety, and growth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${reason.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-fredoka text-xl font-bold text-foreground mb-1">
                  {reason.title}
                </h3>
                <p className="font-nunito text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
