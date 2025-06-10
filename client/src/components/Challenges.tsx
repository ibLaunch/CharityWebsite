import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Wrench, BookOpen, Heart, Laptop, DollarSign } from "lucide-react";

export default function Challenges() {
  const challenges = [
    {
      icon: GraduationCap,
      stat: "1 in 5",
      description: "children globally lack access to basic education"
    },
    {
      icon: Wrench,
      stat: "42%",
      description: "children are engaged in child labor, instead of learning"
    },
    {
      icon: BookOpen,
      stat: "67%",
      description: "of girls (ages 15+) struggle to read and write"
    },
    {
      icon: Heart,
      stat: "60%",
      description: "of seniors report feeling isolated or lonely"
    },
    {
      icon: Laptop,
      stat: "17%",
      description: "of seniors aged 65+ are digitally literate"
    },
    {
      icon: DollarSign,
      stat: "25%",
      description: "of seniors live below the poverty line in developing regions"
    }
  ];

  return (
    <section className="section-padding bg-brand-beige">
      <div className="container-luxury">
        <div className="text-center mb-20">
          <h2 className="text-serif text-4xl md:text-5xl font-normal text-black mb-8 tracking-tight">The Challenges We Address</h2>
          <div className="w-16 h-px bg-black mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <div key={index} className="luxury-card hover-lift text-center">
                <div className="p-8">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-serif text-3xl font-medium text-black mb-4">{challenge.stat}</h3>
                  <p className="text-sans text-gray-700 leading-relaxed">{challenge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
