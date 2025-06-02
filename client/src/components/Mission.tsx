import { Card, CardContent } from "@/components/ui/card";
import schoolVisitImage from "@assets/Screen Shot 2025-05-19 at 8.18.34 PM.png";

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Learn About What We Do</h2>
          <div className="w-24 h-1 bg-brand-mint mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={schoolVisitImage}
              alt="Community education support and mentorship programs"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-8">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold brand-navy mb-4">Supporting Education in Underserved Communities</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bridge the gap between generations through community programs that foster mutual learning and support. By creating mentorship opportunities, where adults can share their wealth of knowledge and life experiences with young minds, we cultivate a culture of respect and appreciation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold brand-navy mb-4">Enhancing Quality of Life for Seniors</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Help seniors enhance their quality of life in their golden years. Additionally, integrating technology workshops can empower older adults to stay connected with the digital world, reducing isolation and opening new avenues for learning and engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
