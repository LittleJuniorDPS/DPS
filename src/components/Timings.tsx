import { Clock, Sun, Moon } from "lucide-react";

const Timings = () => {
  const schedule = [
    {
      type: "Preschool",
      icon: Sun,
      times: "9:00 AM – 2:00 PM",
      days: "Monday – Friday",
      color: "from-sunny to-coral",
      description: "Regular preschool sessions with structured learning activities",
    },
    {
      type: "Day Care",
      icon: Clock,
      times: "8:00 AM – 7:00 PM",
      days: "Monday – Friday",
      color: "from-sky to-lavender",
      description: "Extended care with meals, rest time, and supervised activities",
    },
    {
      type: "Saturday Special",
      icon: Moon,
      times: "9:00 AM – 7:00 PM",
      days: "Saturday",
      color: "from-grass to-sky",
      description: "Fun activities and special programs for weekend learning",
    },
  ];

  return (
    <section id="timings" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-sunny/20 animate-float" />
      <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full bg-lavender/20 animate-float-reverse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-4xl mb-4">🕐</span>
          <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-foreground mb-4">
            School <span className="text-primary">Timings</span>
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible schedules designed to accommodate busy families
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${item.color} p-6 text-center`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-fredoka text-2xl font-bold text-white">
                  {item.type}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <div className="bg-muted rounded-2xl p-4 mb-4">
                  <div className="font-fredoka text-2xl font-bold text-foreground">
                    {item.times}
                  </div>
                  <div className="font-nunito text-muted-foreground">
                    {item.days}
                  </div>
                </div>
                <p className="font-nunito text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-sunny/20 px-6 py-3 rounded-full">
            <span className="text-xl">💡</span>
            <span className="font-nunito text-muted-foreground">
              Contact us for custom timing arrangements
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timings;
