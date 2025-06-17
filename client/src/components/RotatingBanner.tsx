import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import seniorCareImage from '@assets/Screen Shot 2025-05-19 at 8.18.34 PM_1750186069303.png';
import educationImage from '@assets/Screen Shot 2025-05-19 at 8.18.44 PM_1750186089754.png';
import communityImage from '@assets/Screen Shot 2025-05-19 at 2.23.13 PM_1750186107372.png';

const bannerSlides = [
  {
    id: 1,
    title: "Empowering Education",
    subtitle: "Building brighter futures through learning",
    description: "Supporting underserved schools with furniture, infrastructure, and educational resources to create better learning environments for children.",
    image: educationImage,
    icon: GraduationCap,
    color: "bg-blue-600",
    stats: "3 Schools Supported",
    pillar: "Education"
  },
  {
    id: 2,
    title: "Senior Care & Dignity",
    subtitle: "Honoring our elders with compassion",
    description: "Enhancing quality of life for seniors through technology workshops, community programs, and initiatives that reduce isolation.",
    image: seniorCareImage,
    icon: Heart,
    color: "bg-rose-600",
    stats: "Digital Literacy Programs",
    pillar: "Senior Care"
  },
  {
    id: 3,
    title: "Community Building",
    subtitle: "Connecting generations, strengthening bonds",
    description: "Creating mentorship opportunities and intergenerational programs that bridge the gap between young minds and experienced wisdom.",
    image: communityImage,
    icon: Users,
    color: "bg-green-600",
    stats: "Multi-generational Impact",
    pillar: "Community"
  }
];

export default function RotatingBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentBanner = bannerSlides[currentSlide];
  const IconComponent = currentBanner.icon;

  return (
    <section className="relative h-[600px] overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={currentBanner.image}
          alt={currentBanner.title}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-6">
              {/* Pillar Badge */}
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-full ${currentBanner.color}`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                  {currentBanner.pillar}
                </span>
              </div>

              {/* Main Content */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  {currentBanner.title}
                </h1>
                <p className="text-xl text-gray-200 font-light">
                  {currentBanner.subtitle}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  {currentBanner.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-white">
                    {currentBanner.stats}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform", "_blank")}
                  className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Supporting
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById('learn-more');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className={`h-full ${currentBanner.color} transition-all duration-5000 ease-linear`}
          style={{
            width: isAutoPlaying ? '100%' : '0%',
            animation: isAutoPlaying ? 'progress 5s linear infinite' : 'none',
          }}
        />
      </div>


    </section>
  );
}