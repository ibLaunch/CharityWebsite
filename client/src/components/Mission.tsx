import { Card, CardContent } from "@/components/ui/card";
import schoolVisitImage from "@assets/Screen Shot 2025-05-19 at 8.18.34 PM.png";

export default function Mission() {
  return (
    <section className="bg-navy-very-light minimal-section">
      <div className="container-minimal">
        <div className="text-center mb-32">
          <div className="elegant-small mb-8 text-navy-medium">Our Mission</div>
          <h2 className="text-6xl font-light text-navy-dark mb-12 tracking-tight">
            What We Do
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <img 
              src={schoolVisitImage}
              alt="Community education support and mentorship programs"
              className="luxury-image w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-light text-navy-dark mb-6 tracking-tight">Supporting Education in Underserved Communities</h3>
              <p className="text-navy-dark leading-relaxed font-light">
                Bridge the gap between generations through community programs that foster mutual learning and support. By creating mentorship opportunities, where adults can share their wealth of knowledge and life experiences with young minds, we cultivate a culture of respect and appreciation.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-navy-dark mb-6 tracking-tight">Enhancing Quality of Life for Seniors</h3>
              <p className="text-navy-dark leading-relaxed font-light">
                Help seniors enhance their quality of life in their golden years. Additionally, integrating technology workshops can empower older adults to stay connected with the digital world, reducing isolation and opening new avenues for learning and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
