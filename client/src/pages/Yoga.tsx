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
      <section className="relative bg-white minimal-section pt-32 overflow-hidden">
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
                <div className="elegant-small text-navy-medium">Wellness & Spirituality</div>
                <h1 className="hero-title text-navy-dark">
                  Bundele<br />
                  <span className="italic">Fit</span>
                </h1>
                <p className="text-2xl font-light text-navy-medium italic">
                  Wellness Within, Change Around
                </p>
                <p className="text-lg text-navy-dark leading-relaxed font-light max-w-lg">
                  Comprehensive wellness program combining traditional yoga, strength training, cardio, and personalized nutrition guidance tailored to your unique lifestyle and fitness goals.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=400&fit=crop&auto=format"
                alt="Peaceful yoga practice"
                className="luxury-image w-full h-[500px] object-cover"
              />
              
              <div className="absolute bottom-8 left-8 bg-navy-very-light/95 backdrop-blur-sm p-6 min-w-[200px] border border-navy-light">
                <div className="space-y-2">
                  <div className="elegant-small text-navy-medium">Starting From</div>
                  <div className="text-3xl font-light text-navy-dark">$65</div>
                  <div className="text-sm text-navy-dark font-light">per class</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background circles for hero section */}
        <div className="absolute top-20 left-8 w-28 h-28 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-16 right-12 w-36 h-36 bg-gray-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-6 w-24 h-24 bg-gray-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 left-12 w-32 h-32 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-1/3 left-4 w-20 h-20 bg-gray-100 rounded-full opacity-30"></div>
      </section>

      {/* About Bundele Fitness Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-dark mb-8">Bundele Fitness</h2>
              <div className="space-y-6 text-lg text-navy-dark leading-relaxed">
                <p>
                  We offer a comprehensive fitness approach that blends traditional yoga with modern strength training, cardiovascular conditioning, and personalized nutrition coaching. Our holistic practice is designed to promote complete physical, mental, and spiritual well-being.
                </p>
                <p>
                  Our programs integrate the foundational principles of Ashtanga Yoga with contemporary fitness methodologies, creating personalized routines that adapt to your individual needs, abilities, and lifestyle. Whether you're seeking flexibility through yoga, power through strength training, endurance through cardio, or balance through proper nutrition, we tailor each experience to help you achieve your unique wellness goals.
                </p>
                <p>
                  Each session is $65, with special package discounts available for committed practitioners ready to embrace a complete lifestyle transformation.
                </p>
              </div>
            </div>
            
            <Card className="bg-gray-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-dark mb-8 text-center">Wellness Foundation Principles</h3>
                <div className="grid grid-cols-2 gap-4">
                  {principles.map((principle, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg text-center">
                      <div className="w-10 h-10 bg-navy-very-light rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-sm font-bold text-navy-dark">{index + 1}</span>
                      </div>
                      <h4 className="font-semibold text-navy-dark text-sm">{principle.name}</h4>
                      <p className="text-xs text-navy-dark mt-1">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Background circles for this section */}
        <div className="absolute top-16 left-8 w-28 h-28 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-12 w-36 h-36 bg-gray-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-4 w-20 h-20 bg-gray-100 rounded-full opacity-35"></div>
      </section>

      {/* Comprehensive Fitness Programs */}
      <section className="relative py-20 bg-navy-very-light overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-dark mb-6">Complete Wellness Programs</h2>
            <p className="text-xl text-navy-medium max-w-3xl mx-auto">
              Personalized fitness routines designed around your lifestyle, abilities, and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-navy-very-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-navy-dark">💪</div>
                </div>
                <h3 className="text-xl font-bold text-navy-dark mb-4">Strength Training</h3>
                <p className="text-navy-medium leading-relaxed">
                  Build functional strength with personalized resistance training programs adapted to your fitness level and objectives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-navy-very-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-navy-dark">❤️</div>
                </div>
                <h3 className="text-xl font-bold text-navy-dark mb-4">Cardio Conditioning</h3>
                <p className="text-navy-medium leading-relaxed">
                  Improve cardiovascular health and endurance through dynamic workouts tailored to your current fitness abilities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-navy-very-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-navy-dark">🥗</div>
                </div>
                <h3 className="text-xl font-bold text-navy-dark mb-4">Nutrition Guidance</h3>
                <p className="text-navy-medium leading-relaxed">
                  Receive personalized nutrition coaching that complements your fitness routine and supports your wellness journey.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy-dark mb-6 text-center">Your Personalized Approach</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-navy-dark mb-3">Lifestyle Integration</h4>
                <p className="text-navy-medium mb-4">
                  We design programs that fit seamlessly into your daily routine, whether you're a busy professional, parent, or student.
                </p>
                <h4 className="text-lg font-semibold text-navy-dark mb-3">Adaptive Training</h4>
                <p className="text-navy-medium">
                  Every routine adjusts to your current abilities, ensuring safe progression while challenging you to reach new milestones.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-navy-dark mb-3">Goal-Oriented</h4>
                <p className="text-navy-medium mb-4">
                  From weight management to athletic performance, we create specific pathways to help you achieve your unique objectives.
                </p>
                <h4 className="text-lg font-semibold text-navy-dark mb-3">Holistic Wellness</h4>
                <p className="text-navy-medium">
                  Combining physical training with mindfulness practices and nutritional support for complete well-being transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background circles */}
        <div className="absolute top-20 right-8 w-32 h-32 bg-gray-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-24 left-12 w-24 h-24 bg-gray-300 rounded-full opacity-25"></div>
      </section>

      {/* Class Packages */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-dark mb-6">Class Packages</h2>
            <p className="text-xl text-navy-dark">Choose the package that fits your practice</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative text-center shadow-lg bg-white border-0 ${
                pkg.isPopular ? "ring-2 ring-navy-dark" : ""
              }`}>
                <CardContent className="p-8">
                  {pkg.isPopular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-navy-dark text-white">
                      <Star className="mr-1 h-3 w-3" />
                      POPULAR
                    </Badge>
                  )}
                  
                  <h3 className="text-xl font-bold text-navy-dark mb-4">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-navy-medium mb-2">{pkg.price}</div>
                  {pkg.originalPrice && (
                    <div className="text-sm text-gray-500 line-through mb-1">{pkg.originalPrice}</div>
                  )}
                  {pkg.savings && (
                    <div className="text-sm text-navy-dark font-semibold mb-4">{pkg.savings}</div>
                  )}
                  <p className="text-navy-dark mb-6">{pkg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdAyE2hC6OAAEKo2Abu477TbnFHcLJCTEAuSuNBChwhJAt14A/viewform?usp=header", "_blank")}
              className="navy-button-primary px-12 py-6 text-lg rounded-none font-normal tracking-wider uppercase flex items-center justify-center"
            >
              <CalendarPlus className="mr-3 h-5 w-5" />
              Sign Up for Classes
            </button>
          </div>
        </div>
        
        {/* Background circles for this section */}
        <div className="absolute top-20 right-8 w-32 h-32 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-16 left-8 w-40 h-40 bg-gray-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-4 w-24 h-24 bg-gray-100 rounded-full opacity-35"></div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-navy-dark text-center mb-16">Why Choose Our Practice?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-navy-light shadow-lg text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-navy-dark mb-4">Complete Fitness</h3>
                <p className="text-navy-dark">
                  Yoga, strength training, cardio conditioning, and nutrition guidance in one comprehensive program.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-navy-light shadow-lg text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-navy-dark mb-4">Personalized Approach</h3>
                <p className="text-navy-dark">
                  Routines adapted to your lifestyle, abilities, and goals for sustainable wellness transformation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-navy-light shadow-lg text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-navy-dark mb-4">Supporting Charity</h3>
                <p className="text-navy-dark">
                  Your participation helps fund community education and support programs worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Subtle background circles */}
        <div className="absolute top-8 right-6 w-32 h-32 bg-gray-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-12 left-6 w-40 h-40 bg-gray-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/3 right-2 w-24 h-24 bg-gray-100 rounded-full opacity-35"></div>
      </section>

      <Footer />
    </div>
  );
}