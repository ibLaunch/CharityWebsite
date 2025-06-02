import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Impact Since 2022</h2>
          <div className="w-24 h-1 bg-brand-mint mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {impactStories.map((story, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <img 
                  src={story.image}
                  alt={story.title}
                  className="rounded-lg w-full h-48 object-cover mb-6"
                />
                <h3 className="text-xl font-bold brand-navy mb-4">{story.year} - {story.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {story.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
