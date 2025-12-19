import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Programs = () => {
  const programs = [
    {
      title: "Playgroup",
      age: "1.5 - 2.5 years",
      emoji: "🧸",
      description: "Introduction to structured play, sensory activities, and social interaction in a safe environment.",
      highlights: ["Sensory Play", "Music & Movement", "Story Time"],
      color: "from-sunny to-coral",
    },
    {
      title: "Nursery",
      age: "2.5 - 3.5 years",
      emoji: "🎨",
      description: "Creative exploration through art, rhymes, and foundational concepts in a fun-filled setting.",
      highlights: ["Art & Craft", "Number Games", "Rhymes & Songs"],
      color: "from-sky to-lavender",
    },
    {
      title: "Junior KG",
      age: "3.5 - 4.5 years",
      emoji: "📖",
      description: "Building literacy and numeracy skills while fostering creativity and critical thinking.",
      highlights: ["Pre-Reading", "Writing Skills", "Basic Math"],
      color: "from-grass to-sky",
    },
    {
      title: "Senior KG",
      age: "4.5 - 5.5 years",
      emoji: "🎓",
      description: "Comprehensive school readiness program preparing children for primary school success.",
      highlights: ["Reading Fluency", "Problem Solving", "Science Basics"],
      color: "from-coral to-pink",
    },
    {
      title: "Day Care",
      age: "1 - 6 years",
      emoji: "🏠",
      description: "Extended care with nutritious meals, rest time, and supervised activities for working parents.",
      highlights: ["Flexible Hours", "Healthy Meals", "Safe Environment"],
      color: "from-lavender to-sunny",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-5 w-24 h-24 rounded-full bg-sunny/20 animate-float" />
      <div className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-grass/20 animate-float-reverse" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-lavender/20 animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-4xl mb-4">📚</span>
          <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-2xl mx-auto">
            Age-appropriate programs designed to nurture every aspect of your child's development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <CardHeader className={`bg-gradient-to-r ${program.color} p-6`}>
                <div className="flex items-center justify-between">
                  <span className="text-5xl group-hover:scale-110 transition-transform">
                    {program.emoji}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white font-nunito font-semibold text-sm">
                    {program.age}
                  </span>
                </div>
                <h3 className="font-fredoka text-2xl font-bold text-white mt-4">
                  {program.title}
                </h3>
              </CardHeader>
              <CardContent className="p-6">
                <p className="font-nunito text-muted-foreground mb-4">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="bg-muted px-3 py-1 rounded-full text-sm font-nunito text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
