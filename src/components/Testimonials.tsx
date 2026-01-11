import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of Aryan, 4 years",
      content: "Little Junior DPS has been a blessing for our family. My son has blossomed into a confident, curious learner. The teachers are incredibly caring and patient.",
      rating: 5,
      avatar: "👩",
    },
    {
      name: "Rajesh Kumar",
      role: "Father of Ananya, 3 years",
      content: "The play-based curriculum is fantastic! My daughter looks forward to school every day. The safety measures and cleanliness are top-notch.",
      rating: 5,
      avatar: "👨",
    },
    {
      name: "Meera Patel",
      role: "Mother of Vivaan, 5 years",
      content: "We've seen remarkable growth in our son's communication and social skills. The daycare facility is a lifesaver for working parents like us!",
      rating: 5,
      avatar: "👩",
    },
    {
      name: "Suresh Reddy",
      role: "Father of Diya, 2.5 years",
      content: "The small class sizes mean personalized attention for every child. The staff truly treats each kid as their own. Highly recommend!",
      rating: 5,
      avatar: "👨",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-sunny/20 animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-lavender/20 animate-float-reverse" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-coral/20 animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-4xl mb-4">💬</span>
          <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-foreground mb-4">
            What <span className="text-primary">Parents</span> Say
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from the families who trust us with their little ones!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-sunny fill-sunny" />
                ))}
              </div>

              {/* Content */}
              <p className="font-nunito text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-coral/20 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-fredoka font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="font-nunito text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              {["👶", "👧", "👦", "👶"].map((emoji, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-sunny/30 to-coral/30 flex items-center justify-center text-sm border-2 border-card">
                  {emoji}
                </div>
              ))}
            </div>
            <span className="font-nunito text-muted-foreground">
              <span className="font-bold text-foreground">500+</span> Happy Families Trust Us
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
