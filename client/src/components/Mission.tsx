import { Card, CardContent } from "@/components/ui/card";
import schoolVisitImage from "@assets/Screen Shot 2025-05-19 at 8.18.34 PM.png";

export default function Mission() {
  return (
    <section className="section-padding bg-brand-beige">
      <div className="container-luxury">
        <div className="text-center mb-20">
          <h2 className="text-serif text-4xl md:text-5xl font-normal text-black mb-8 tracking-tight">Learn About What We Do</h2>
          <div className="w-16 h-px bg-black mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={schoolVisitImage}
              alt="Community education support and mentorship programs"
              className="rounded-lg w-full h-auto hover-lift"
            />
          </div>
          
          <div className="space-y-12 order-1 lg:order-2">
            <div>
              <h3 className="text-serif text-2xl font-medium text-black mb-6 tracking-tight">Supporting Education in Underserved Communities</h3>
              <p className="text-sans text-gray-700 leading-relaxed">
                Bridge the gap between generations through community programs that foster mutual learning and support. By creating mentorship opportunities, where adults can share their wealth of knowledge and life experiences with young minds, we cultivate a culture of respect and appreciation.
              </p>
            </div>
            
            <div>
              <h3 className="text-serif text-2xl font-medium text-black mb-6 tracking-tight">Enhancing Quality of Life for Seniors</h3>
              <p className="text-sans text-gray-700 leading-relaxed">
                Help seniors enhance their quality of life in their golden years. Additionally, integrating technology workshops can empower older adults to stay connected with the digital world, reducing isolation and opening new avenues for learning and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
