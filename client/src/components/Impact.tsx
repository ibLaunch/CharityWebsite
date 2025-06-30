import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import furnitureImage from "@assets/Screen Shot 2025-05-19 at 6.42.57 PM.png";
import cabinetImage from "@assets/Screen Shot 2025-05-19 at 6.43.18 PM.png";
import schoolHallImage from "@assets/Screen Shot 2025-05-19 at 8.18.59 PM.png";

export default function Impact() {
  const impactStories = [
    {
      year: "2022",
      title: "Furniture for Madhyamik Vidyalaya",
      image: furnitureImage,
      description: "Donated 12 pieces of furniture to Madhyamik Vidyalaya in Pune, a government-aided rural school. Students previously sat on the floor, leading to discomfort and health issues. Our donation created a safer, cleaner, and more focused learning environment."
    },
    {
      year: "2022", 
      title: "Dining Chairs for Mahalunge Vidyalaya",
      image: cabinetImage,
      description: "Donated 10 dining table chairs to Mahalunge Vidyalaya, helping improve the school's mealtime setting by providing students with a more comfortable and hygienic space to eat."
    },
    {
      year: "2023",
      title: "Painting Project at Nutan Balvikas Mandir", 
      image: schoolHallImage,
      description: "The classrooms hadn't been painted in over 30 years. Bundele Foundation donated ₹2 lakhs, working with Rotary Clubs and a CSR partner to transform the learning environment with fresh paint."
    }
  ];

  return (
    <section className="bg-white minimal-section">
      <div className="container-minimal">
        <div className="text-center mb-32">
          <div className="elegant-small mb-8 text-navy-medium">Our Impact</div>
          <h2 className="text-6xl font-light text-navy-dark mb-12 tracking-tight">
            Since 2022
          </h2>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {impactStories.map((story, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3">
                  <div className="bg-white border border-navy-light rounded-lg shadow-sm hover:shadow-lg transition-shadow p-8 h-full">
                    <img 
                      src={story.image}
                      alt={story.title}
                      className="w-full h-72 object-cover mb-8 rounded-lg"
                    />
                    <div className="space-y-4">
                      <div className="elegant-small text-navy-medium">{story.year}</div>
                      <h3 className="text-xl font-light text-navy-dark leading-tight">{story.title}</h3>
                      <p className="text-navy-dark leading-relaxed font-light text-sm">
                        {story.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-navy-light text-navy-dark hover:bg-navy-light hover:text-white transition-colors" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-navy-light text-navy-dark hover:bg-navy-light hover:text-white transition-colors" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
