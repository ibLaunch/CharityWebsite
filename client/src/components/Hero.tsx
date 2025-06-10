import { Button } from "@/components/ui/button";
import { Heart, UserPlus, Clover } from "lucide-react";
import schoolImage from "@assets/Screen Shot 2025-05-19 at 8.18.44 PM.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${schoolImage})` }}
      ></div>
      
      <div className="relative container-luxury text-center text-white z-10">
        <h1 className="text-serif text-5xl md:text-7xl font-normal mb-8 leading-tight tracking-tight">
          Creating Positive <span className="italic">Change</span> Together
        </h1>
        <p className="text-sans text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light opacity-95">
          Your donations are not only tax-deductible but also <strong className="font-medium">matched by Bundele Foundation for up to $2,000</strong>, doubling your impact.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
          <button
            onClick={() => scrollToSection("yoga")}
            className="luxury-button-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black"
          >
            <Clover className="mr-3 h-4 w-4" />
            Join Yoga Classes
          </button>
          
          <button
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform", "_blank")}
            className="luxury-button bg-black/80 backdrop-blur-sm hover:bg-white hover:text-black"
          >
            <Heart className="mr-3 h-4 w-4" />
            Donate Now
          </button>
          
          <button
            onClick={() => scrollToSection("impact-circle")}
            className="luxury-button-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black"
          >
            <UserPlus className="mr-3 h-4 w-4" />
            Impact Circle
          </button>
        </div>
      </div>
    </section>
  );
}
