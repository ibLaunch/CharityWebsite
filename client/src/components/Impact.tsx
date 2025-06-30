import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookOpen, Users, Palette, Calendar, MapPin } from "lucide-react";
import furnitureImage from "@assets/Screen Shot 2025-05-19 at 6.42.57 PM.png";
import cabinetImage from "@assets/Screen Shot 2025-05-19 at 6.43.18 PM.png";
import schoolHallImage from "@assets/Screen Shot 2025-05-19 at 8.18.59 PM.png";
import cookingCompetitionImage from "@assets/Screen Shot 2025-06-30 at 2.46.19 PM_1751311288309.png";

export default function Impact() {
  const impactStories = [
    {
      year: "2024",
      title: "Master Chef of Farmwell",
      image: cookingCompetitionImage,
      description: "Bundele Foundation hosted a vibrant community cooking competition that brought neighbors together to celebrate food, connection, and giving back. Attendees donated on-site, signed up for Impact Circle, and joined wellness classes.",
      icon: Calendar,
      location: "Virginia",
      hasReadMore: true
    },
    {
      year: "2023",
      title: "Painting Project at Nutan Balvikas Mandir", 
      image: schoolHallImage,
      description: "The classrooms hadn't been painted in over 30 years. Bundele Foundation donated ₹2 lakhs, working with Rotary Clubs and a CSR partner to transform the learning environment with fresh paint.",
      icon: Palette,
      location: "Pune"
    },
    {
      year: "2022",
      title: "Furniture for Madhyamik Vidyalaya",
      image: furnitureImage,
      description: "Donated 12 pieces of furniture to Madhyamik Vidyalaya in Pune, a government-aided rural school. Students previously sat on the floor, leading to discomfort and health issues. Our donation created a safer, cleaner, and more focused learning environment.",
      icon: BookOpen,
      location: "Pune"
    },
    {
      year: "2022", 
      title: "Dining Chairs for Mahalunge Vidyalaya",
      image: cabinetImage,
      description: "Donated 10 dining table chairs to Mahalunge Vidyalaya, helping improve the school's mealtime setting by providing students with a more comfortable and hygienic space to eat.",
      icon: Users,
      location: "Mahalunge"
    }
  ];

  return (
    <section className="relative py-20 bg-navy-very-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-navy-dark mb-6 tracking-tight leading-tight">
            <span className="text-5xl">OUR IMPACT SINCE </span>
            <span className="text-[4.2rem]">2022</span>
          </h2>
        </div>
        
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-1 md:-ml-4">
              {impactStories.map((story, index) => (
                <CarouselItem key={index} className="pl-1 md:pl-4 md:basis-1/3 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-white border border-navy-light shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src={story.image}
                            alt={story.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <story.icon className="w-6 h-6 text-navy-medium stroke-2" />
                          </div>
                          <div className="absolute bottom-3 left-3 bg-navy-dark/60 backdrop-blur-lg px-3 py-1 rounded-md">
                            <span className="text-2xl font-bold text-white">{story.year}</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-bold text-navy-dark leading-tight flex-1">{story.title}</h3>
                          </div>
                          <div className="flex items-center mb-3">
                            <MapPin className="w-4 h-4 text-navy-medium mr-2" />
                            <span className="text-sm font-medium text-navy-medium">{story.location}</span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {story.description}
                          </p>
                          {story.hasReadMore && (
                            <button className="mt-4 px-4 py-2 bg-navy-medium text-white rounded-md hover:bg-navy-dark transition-colors text-sm font-light">
                              Read More
                            </button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 h-12 w-12 border-2 border-navy-medium bg-white text-navy-dark hover:bg-navy-medium hover:text-white" />
            <CarouselNext className="-right-6 h-12 w-12 border-2 border-navy-medium bg-white text-navy-dark hover:bg-navy-medium hover:text-white" />
          </Carousel>
        </div>
      </div>
      
      {/* Background circles for this section */}
      <div className="absolute top-20 right-8 w-28 h-28 bg-gray-100 rounded-full opacity-25"></div>
      <div className="absolute bottom-16 left-12 w-32 h-32 bg-gray-200 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 left-6 w-20 h-20 bg-gray-300 rounded-full opacity-30"></div>
      <div className="absolute top-12 left-20 w-24 h-24 bg-gray-200 rounded-full opacity-25"></div>
      <div className="absolute bottom-20 right-16 w-36 h-36 bg-gray-100 rounded-full opacity-20"></div>
      <div className="absolute top-2/3 right-4 w-20 h-20 bg-gray-300 rounded-full opacity-25"></div>
    </section>
  );
}
