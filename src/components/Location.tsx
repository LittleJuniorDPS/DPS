import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const openGoogleMaps = () => {
    // Replace with your actual school coordinates
    window.open(
      "https://www.google.com/maps/search/Little+Junior+DPS+Preschool",
      "_blank"
    );
  };

  return (
    <section id="location" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-coral/20 animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-grass/20 animate-float-reverse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-4xl mb-4">📍</span>
          <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find <span className="text-primary">Us</span>
          </h2>
          <p className="font-nunito text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our beautiful campus and see why families trust us with their little ones!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden shadow-2xl">
            {/* Map Placeholder */}
            <div className="relative h-80 bg-gradient-to-br from-sky/20 to-grass/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-soft shadow-xl">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <p className="font-fredoka text-xl font-bold text-foreground mb-2">
                  Little Junior DPS
                </p>
                <p className="font-nunito text-muted-foreground mb-4">
                  Your School Address Here<br />
                  City, State - PIN Code
                </p>
                <Button
                  onClick={openGoogleMaps}
                  className="gradient-sky text-primary-foreground font-semibold rounded-full px-6 hover:scale-105 transition-transform shadow-lg"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </Button>
              </div>
            </div>

            {/* Address Bar */}
            <div className="p-6 bg-gradient-to-r from-sunny/10 via-sky/10 to-coral/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-coral/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <div className="font-fredoka font-bold text-foreground">
                      Our Campus
                    </div>
                    <div className="font-nunito text-sm text-muted-foreground">
                      Your Full School Address Here
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-xl">🚗</span>
                  <span className="font-nunito text-sm">Easy parking available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
