import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarPlus, Star } from "lucide-react";

export default function Yoga() {
  const packages = [
    {
      name: "Single Class",
      price: "$65",
      description: "Perfect for trying out our classes",
      isPopular: false
    },
    {
      name: "3-Class Pack", 
      price: "$175",
      originalPrice: "$195",
      savings: "Save 10%",
      description: "Great for regular practice",
      isPopular: false
    },
    {
      name: "5-Class Pack",
      price: "$292", 
      originalPrice: "$325",
      savings: "Save 10%",
      description: "Best for consistency",
      isPopular: true
    },
    {
      name: "10-Class Pack",
      price: "$585",
      originalPrice: "$650", 
      savings: "Save 10%",
      description: "Maximum value",
      isPopular: false
    }
  ];

  const principles = [
    { name: "Yama", icon: "🙏" },
    { name: "Niyama", icon: "⭐" },
    { name: "Asana", icon: "🏃" },
    { name: "Pranayama", icon: "💨" }
  ];

  return (
    <section id="yoga" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bundele Yoga</h2>
          <p className="text-xl brand-mint font-semibold mb-6">Wellness Within, Change Around!</p>
          <div className="w-24 h-1 bg-brand-mint mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Yoga meditation silhouette at sunset"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold brand-navy mb-6">Bhartiya Yog Sansthan (BYS)</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              BYS offers a holistic yoga practice rooted in traditional Indian philosophy, aiming to promote physical, mental, and spiritual well-being. We follow the Ashtanga Yoga path as outlined by Maharishi Patanjali, encompassing eight limbs of yoga.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {principles.map((principle, index) => (
                <div key={index} className="p-4">
                  <div className="w-12 h-12 bg-brand-mint rounded-full flex items-center justify-center mx-auto mb-2 text-white text-xl">
                    {principle.icon}
                  </div>
                  <p className="text-sm font-medium">{principle.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Card className="bg-gray-50 rounded-2xl border-0">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold brand-navy text-center mb-8">Class Packages</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative text-center shadow-lg ${
                  pkg.isPopular ? "border-2 border-brand-mint" : ""
                }`}>
                  <CardContent className="p-6">
                    {pkg.isPopular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-mint text-white">
                        <Star className="mr-1 h-3 w-3" />
                        POPULAR
                      </Badge>
                    )}
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{pkg.name}</h4>
                    <div className="text-3xl font-bold brand-navy mb-2">{pkg.price}</div>
                    {pkg.savings && (
                      <div className="text-sm text-green-600 font-semibold mb-4">{pkg.savings}</div>
                    )}
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdAyE2hC6OAAEKo2Abu477TbnFHcLJCTEAuSuNBChwhJAt14A/viewform?usp=header", "_blank")}
                className="bg-brand-navy text-white px-8 py-4 text-lg h-auto hover:bg-blue-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <CalendarPlus className="mr-3 h-5 w-5" />
                Sign Up for Classes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
