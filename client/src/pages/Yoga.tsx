import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarPlus, Star, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function YogaPage() {
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
    { name: "Yama", description: "Ethical restraints" },
    { name: "Niyama", description: "Personal observances" },
    { name: "Asana", description: "Postures" },
    { name: "Pranayama", description: "Breath control" },
    { name: "Pratyahara", description: "Withdrawal of senses" },
    { name: "Dharana", description: "Concentration" },
    { name: "Dhyana", description: "Meditation" },
    { name: "Samadhi", description: "Absorption" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white minimal-section pt-32">
        <div className="container-minimal">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <Link href="/">
                <button className="luxury-button-outline mb-16">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </button>
              </Link>
              
              <div className="space-y-8">
                <div className="elegant-small">Wellness & Spirituality</div>
                <h1 className="hero-title text-black">
                  Bundele<br />
                  <span className="italic">Yoga</span>
                </h1>
                <p className="text-2xl font-light text-gray-800 italic">
                  Wellness Within, Change Around
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light max-w-lg">
                  Traditional yoga practice rooted in ancient Indian philosophy, promoting physical, mental, and spiritual well-being.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=400&fit=crop&auto=format"
                alt="Peaceful yoga practice"
                className="luxury-image w-full h-[500px] object-cover"
              />
              
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 min-w-[200px]">
                <div className="space-y-2">
                  <div className="elegant-small">Starting From</div>
                  <div className="text-3xl font-light text-black">$65</div>
                  <div className="text-sm text-gray-600 font-light">per class</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About BYS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">Bhartiya Yog Sansthan (BYS)</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  BYS offers a holistic yoga practice rooted in traditional Indian philosophy, aiming to promote physical, mental, and spiritual well-being.
                </p>
                <p>
                  We follow the Ashtanga Yoga path as outlined by Maharishi Patanjali, encompassing eight limbs of yoga that create a comprehensive approach to wellness and self-discovery.
                </p>
                <p>
                  Each class will be $65, with special class pack discounts available for committed practitioners.
                </p>
              </div>
            </div>
            
            <Card className="bg-gray-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-8 text-center">Eight Limbs of Yoga</h3>
                <div className="grid grid-cols-2 gap-4">
                  {principles.map((principle, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg text-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-sm font-bold text-emerald-600">{index + 1}</span>
                      </div>
                      <h4 className="font-semibold text-black text-sm">{principle.name}</h4>
                      <p className="text-xs text-gray-600 mt-1">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Class Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Class Packages</h2>
            <p className="text-xl text-gray-600">Choose the package that fits your practice</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative text-center shadow-lg bg-white border-0 ${
                pkg.isPopular ? "ring-2 ring-emerald-500" : ""
              }`}>
                <CardContent className="p-8">
                  {pkg.isPopular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white">
                      <Star className="mr-1 h-3 w-3" />
                      POPULAR
                    </Badge>
                  )}
                  
                  <h3 className="text-xl font-bold text-black mb-4">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-black mb-2">{pkg.price}</div>
                  {pkg.originalPrice && (
                    <div className="text-sm text-gray-500 line-through mb-1">{pkg.originalPrice}</div>
                  )}
                  {pkg.savings && (
                    <div className="text-sm text-emerald-600 font-semibold mb-4">{pkg.savings}</div>
                  )}
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdAyE2hC6OAAEKo2Abu477TbnFHcLJCTEAuSuNBChwhJAt14A/viewform?usp=header", "_blank")}
              className="bg-black text-white px-12 py-6 text-lg h-auto hover:bg-gray-800 transition-colors rounded-lg"
            >
              <CalendarPlus className="mr-3 h-5 w-5" />
              Sign Up for Classes
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Why Choose Our Yoga Practice?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 shadow-lg text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-black mb-4">Traditional Practice</h3>
                <p className="text-gray-600">
                  Authentic yoga following the classical Ashtanga path as outlined by Maharishi Patanjali.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-lg text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-black mb-4">Holistic Wellness</h3>
                <p className="text-gray-600">
                  Promote physical, mental, and spiritual well-being through comprehensive yoga practice.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-lg text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-black mb-4">Supporting Charity</h3>
                <p className="text-gray-600">
                  Your participation helps fund community education and support programs worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Subtle background circles */}
        <div className="absolute top-8 right-6 w-32 h-32 bg-gray-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-12 left-6 w-40 h-40 bg-gray-300 rounded-full opacity-15"></div>
        <div className="absolute top-1/3 right-2 w-24 h-24 bg-gray-100 rounded-full opacity-25"></div>
      </section>

      <Footer />
    </div>
  );
}