import { Heart, BookOpen, Users, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "A safe, loving space where children feel valued and cared for every day.",
      color: "text-coral",
      bg: "bg-coral/10",
    },
    {
      icon: BookOpen,
      title: "Play-Based Learning",
      description: "Fun activities that spark curiosity and build strong foundations for lifelong learning.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Confidence Building",
      description: "We help children develop self-esteem and social skills through positive interactions.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Shield,
      title: "Safe Infrastructure",
      description: "Child-friendly facilities designed with safety as our top priority.",
      color: "text-lavender",
      bg: "bg-lavender/10",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-sunny/20 animate-float" />
      <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-sky/20 animate-float-reverse" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-4xl mb-4">🏫</span>
          <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-foreground mb-4">
            About{" "}
            <span className="text-primary">Little Junior DPS</span>
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-2xl mx-auto">
            At Little Junior DPS, we believe every child is unique and full of potential. 
            Our mission is to nurture young minds through creative play, loving care, 
            and engaging activities that make learning an adventure!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="font-fredoka text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-nunito text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-sunny/10 to-coral/10 rounded-3xl p-8 md:p-12 text-center">
          <span className="text-5xl mb-4 block">✨</span>
          <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Promise to Parents
          </h3>
          <p className="font-nunito text-lg text-muted-foreground max-w-3xl mx-auto">
            We treat every child as our own, providing personalized attention, 
            a structured yet flexible curriculum, and regular updates on your 
            little one's progress. Your child's happiness and growth are at 
            the heart of everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
