import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-playful animate-gradient opacity-30" />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circles */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-sunny/30 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-sky/30 animate-float-reverse" />
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-grass/20 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-coral/30 animate-float-reverse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-lavender/30 animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Stars and sparkles */}
        <Star className="absolute top-32 right-1/4 w-8 h-8 text-sunny animate-wiggle" fill="currentColor" />
        <Heart className="absolute bottom-1/3 right-1/3 w-6 h-6 text-coral animate-bounce-soft" fill="currentColor" />
        <Sparkles className="absolute top-1/3 left-1/3 w-10 h-10 text-lavender animate-pulse" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg animate-slide-up">
            <span className="text-2xl">🎨</span>
            <span className="font-nunito font-semibold text-muted-foreground">
              Preschool & Day Care
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-fredoka text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up stagger-1" style={{ animationFillMode: "forwards" }}>
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary via-coral to-lavender bg-clip-text text-transparent">
              Little Junior DPS
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-nunito text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up stagger-2" style={{ animationFillMode: "forwards" }}>
            Where every child's journey begins with{" "}
            <span className="text-primary font-semibold">love</span>,{" "}
            <span className="text-accent font-semibold">learning</span>, and{" "}
            <span className="text-coral font-semibold">laughter</span>! 🌈
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-3" style={{ animationFillMode: "forwards" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="gradient-sky text-primary-foreground font-bold text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform shadow-xl animate-pulse-glow"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Enquire Now
            </Button>
            <Button
              onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="font-bold text-lg px-8 py-6 rounded-full border-2 border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all"
            >
              Explore Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto animate-slide-up stagger-4" style={{ animationFillMode: "forwards" }}>
            {[
              { number: "500+", label: "Happy Kids", emoji: "👶" },
              { number: "10+", label: "Years Experience", emoji: "📚" },
              { number: "50+", label: "Caring Staff", emoji: "💝" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <span className="text-3xl mb-2 block">{stat.emoji}</span>
                <div className="font-fredoka text-2xl md:text-3xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="font-nunito text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-card"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
