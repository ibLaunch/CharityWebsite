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
    <section id="home" className="relative min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-16 sm:py-24 lg:py-32">
          {/* Left side - Text content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="text-xs sm:text-sm font-medium text-navy-medium uppercase tracking-wider">Foundation for Change</div>
              <h1 className="hero-title text-navy-dark">
                Creating Positive<br />
                <span className="italic">Change</span><br />
                Together
              </h1>
              <p className="text-base sm:text-lg text-navy-dark max-w-lg font-light leading-relaxed">
                Your donations are not only tax-deductible but also matched by Bundele Foundation for up to $2,000, doubling your impact in communities that need it most.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform", "_blank")}
                className="bg-navy-dark hover:bg-navy-hover text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-none font-normal text-xs sm:text-sm tracking-wider uppercase transition-colors"
              >
                Start Giving
              </button>
              
              <button
                onClick={() => scrollToSection("impact-circle")}
                className="border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-none font-normal text-xs sm:text-sm tracking-wider uppercase transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="order-first lg:order-last">
            <img 
              src={schoolImage}
              alt="Community education support and mentorship programs"
              className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Small feature highlights */}
      <div className="absolute bottom-8 sm:bottom-16 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-navy-medium uppercase tracking-wider">Programs</div>
              <div className="text-xs sm:text-sm text-navy-dark">Yoga Classes</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-navy-medium uppercase tracking-wider">Impact</div>
              <div className="text-xs sm:text-sm text-navy-dark">Since 2022</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-navy-medium uppercase tracking-wider">Community</div>
              <div className="text-xs sm:text-sm text-navy-dark">Impact Circle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
