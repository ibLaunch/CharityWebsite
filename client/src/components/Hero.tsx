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
      <div className="container-minimal">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
          {/* Left side - Text content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="elegant-small text-navy-medium">Foundation for Change</div>
              <h1 className="hero-title text-navy-dark">
                Creating Positive<br />
                <span className="italic">Change</span><br />
                Together
              </h1>
              <p className="text-lg text-navy-dark max-w-lg font-light leading-relaxed">
                Your donations are not only tax-deductible but also matched by Bundele Foundation for up to $2,000, doubling your impact in communities that need it most.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform", "_blank")}
                className="navy-button-primary px-10 py-4 rounded-none font-normal text-sm tracking-wider uppercase"
              >
                Start Giving
              </button>
              
              <button
                onClick={() => scrollToSection("impact-circle")}
                className="navy-button-secondary px-10 py-4 rounded-none font-normal text-sm tracking-wider uppercase"
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
              className="luxury-image w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Small feature highlights */}
      <div className="absolute bottom-16 left-0 right-0">
        <div className="container-minimal">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="elegant-small mb-2 text-navy-medium">Programs</div>
              <div className="text-sm text-navy-dark">Yoga Classes</div>
            </div>
            <div>
              <div className="elegant-small mb-2 text-navy-medium">Impact</div>
              <div className="text-sm text-navy-dark">Since 2022</div>
            </div>
            <div>
              <div className="elegant-small mb-2 text-navy-medium">Community</div>
              <div className="text-sm text-navy-dark">Impact Circle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
