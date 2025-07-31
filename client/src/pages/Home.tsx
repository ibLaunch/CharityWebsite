import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { BookOpen, Heart, Users, GraduationCap, Smartphone, DollarSign } from "lucide-react";
import schoolImage from "@assets/Screen Shot 2025-05-19 at 8.18.44 PM.png";
import rotaryImage from "@assets/Screen Shot 2025-05-19 at 8.18.34 PM_1750195463736.png";
import schoolHallImage2 from "@assets/Screen Shot 2025-05-19 at 8.18.59 PM_1750195477402.png";
import girlHeroImage from "@assets/girl-hero-updated.png";

export default function Home() {
  const heroImages = [
    {
      src: schoolImage,
      alt: "Students learning in classroom"
    },
    {
      src: rotaryImage,
      alt: "Community support and engagement"
    },
    {
      src: schoolHallImage2,
      alt: "Children in school hallway"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const challenges = [
    {
      stat: "1 in 5",
      description: "children globally lack access to basic education",
      icon: GraduationCap
    },
    {
      stat: "42%",
      description: "children are engaged in child labor, instead of learning",
      icon: Users
    },
    {
      stat: "36%",
      description: "of children are out of school, and 67% of girls (ages 15+) struggle to read and write",
      icon: BookOpen
    },
    {
      stat: "60%",
      description: "of seniors report feeling isolated or lonely",
      icon: Heart
    },
    {
      stat: "17%",
      description: "of seniors aged 65+ are digitally literate",
      icon: Smartphone
    },
    {
      stat: "25%",
      description: "of seniors live below the poverty line in developing regions",
      icon: DollarSign
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${girlHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-end min-h-screen">
            {/* Text content positioned on right but lines centered */}
            <div className="space-y-8 text-center max-w-lg mr-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Bundele<br />
                  Foundation
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
                  Together, We're Making a Difference
                </p>
              </div>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => window.open("https://www.paypal.com/donate/?hosted_button_id=3MXBUHN8VQGGJ", "_blank")}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Donate Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Building stronger communities—one generation at a time—through youth empowerment, senior care, and intergenerational programs.
            </p>
          </div>
        </div>
      </section>

      {/* Previous carousel section for other content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark">
                  Creating Impact Through Community
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  See how we're making a difference in education and community support across different regions.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImages[currentImageIndex].src}
                  alt={heroImages[currentImageIndex].alt}
                  className="w-full h-[400px] object-cover transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Schools Supported</p>
                    <p className="text-xl font-bold text-slate-900">Since 2022</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-slate-900">100% Direct Impact</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-8 right-4 w-32 h-32 bg-gray-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-8 left-4 w-40 h-40 bg-gray-300 rounded-full opacity-25"></div>
        <div className="absolute top-2/3 right-2 w-24 h-24 bg-gray-200 rounded-full opacity-35"></div>
        <div className="absolute bottom-1/3 left-2 w-28 h-28 bg-gray-100 rounded-full opacity-30"></div>
      </section>

      {/* Learn About What We Do */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-6">Learn about what we do</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="bg-navy-very-light p-8 rounded-lg border border-navy-light h-full flex flex-col">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 flex items-center justify-center mr-4 flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-navy-medium stroke-2" />
                </div>
                <h3 className="text-3xl font-bold text-navy-dark">Supporting education in underserved communities</h3>
              </div>
              <p className="text-lg text-navy-dark leading-relaxed mb-8 flex-grow">
                Bridge the gap between generations through community programs that foster mutual learning and support. By creating mentorship opportunities, where the adults can share their wealth of knowledge and life experiences with young minds, we can cultivate a culture of respect and appreciation.
              </p>
            </div>
            
            <div className="bg-navy-very-light p-8 rounded-lg border border-navy-light h-full flex flex-col">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 flex items-center justify-center mr-4 flex-shrink-0">
                  <Heart className="w-8 h-8 text-navy-medium stroke-2" />
                </div>
                <h3 className="text-3xl font-bold text-navy-dark">Help seniors enhance their quality of life in their golden years</h3>
              </div>
              <p className="text-lg text-navy-dark leading-relaxed flex-grow">
                Additionally, integrating technology workshops can empower older adults to stay connected with the digital world, reducing isolation and opening new avenues for learning and engagement.
              </p>
            </div>
          </div>
        </div>
        
        {/* Background circles for this section */}
        <div className="absolute top-16 left-8 w-20 h-20 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-12 right-12 w-36 h-36 bg-gray-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-4 w-24 h-24 bg-gray-100 rounded-full opacity-30"></div>
      </section>

      <Impact />

      {/* Challenges */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-6">The challenges</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Challenges */}
            <Card className="bg-white border border-navy-light shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-navy-medium rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-dark">Education & Youth</h3>
                </div>
                
                <div className="space-y-6">
                  {challenges.slice(0, 3).map((challenge, index) => {
                    const IconComponent = challenge.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-navy-very-light rounded-lg">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-navy-medium stroke-2" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-navy-medium mb-2">{challenge.stat}</div>
                          <p className="text-navy-dark text-sm leading-relaxed">{challenge.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Senior Care Challenges */}
            <Card className="bg-white border border-navy-light shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-navy-medium rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-dark">Senior Care & Support</h3>
                </div>
                
                <div className="space-y-6">
                  {challenges.slice(3, 6).map((challenge, index) => {
                    const IconComponent = challenge.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-navy-very-light rounded-lg">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-navy-medium stroke-2" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-navy-medium mb-2">{challenge.stat}</div>
                          <p className="text-navy-dark text-sm leading-relaxed">{challenge.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Background circles for this section */}
        <div className="absolute top-12 left-8 w-24 h-24 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-8 w-40 h-40 bg-gray-300 rounded-full opacity-20"></div>
        <div className="absolute top-2/3 right-4 w-28 h-28 bg-gray-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 left-4 w-20 h-20 bg-gray-200 rounded-full opacity-25"></div>
      </section>

      <Footer />
    </div>
  );
}
