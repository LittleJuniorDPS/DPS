import { Phone, MessageCircle, MapPin } from "lucide-react";

const FloatingButtons = () => {
  const phoneNumber = "9742994750";

  const buttons = [
    {
      icon: Phone,
      label: "Call",
      color: "bg-grass hover:bg-grass/90",
      href: `tel:+91${phoneNumber}`,
      delay: "0s",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      color: "bg-[#25D366] hover:bg-[#25D366]/90",
      href: `https://wa.me/91${phoneNumber}?text=Hi! I'm interested in Little Junior DPS preschool.`,
      delay: "0.1s",
    },
    {
      icon: MapPin,
      label: "Map",
      color: "bg-coral hover:bg-coral/90",
      href: "https://www.google.com/maps/search/Little+Junior+DPS+Preschool",
      delay: "0.2s",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {buttons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          target={button.href.startsWith("http") ? "_blank" : undefined}
          rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`group w-14 h-14 ${button.color} rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-slide-in-right`}
          style={{ animationDelay: button.delay, animationFillMode: "backwards" }}
          aria-label={button.label}
        >
          <button.icon className="w-6 h-6 text-white" />
          
          {/* Tooltip */}
          <span className="absolute right-16 bg-foreground text-background px-3 py-1 rounded-lg text-sm font-nunito font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            {button.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingButtons;
