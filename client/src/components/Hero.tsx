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
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 gradient-overlay"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${schoolImage})` }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Creating Positive <span className="brand-mint">Change</span> Together
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Your donations are not only tax-deductible but also <strong>matched by Bundele Foundation for up to $2,000</strong>, doubling your impact.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <Button
            onClick={() => scrollToSection("yoga")}
            className="bg-white text-blue-600 px-8 py-4 text-lg h-auto hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Clover className="mr-3 h-5 w-5" />
            Join Yoga Classes
          </Button>
          
          <Button
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform", "_blank")}
            className="bg-brand-mint text-white px-8 py-4 text-lg h-auto hover:bg-emerald-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Heart className="mr-3 h-5 w-5" />
            Donate Now
          </Button>
          
          <Button
            onClick={() => scrollToSection("impact-circle")}
            className="bg-brand-orange text-white px-8 py-4 text-lg h-auto hover:bg-amber-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <UserPlus className="mr-3 h-5 w-5" />
            Impact Circle
          </Button>
        </div>
      </div>
    </section>
  );
}
