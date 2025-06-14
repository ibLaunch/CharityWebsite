import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Wrench, BookOpen, Heart, Laptop, DollarSign } from "lucide-react";

export default function Challenges() {
  const challenges = [
    {
      stat: "1 in 5",
      description: "children globally lack access to basic education"
    },
    {
      stat: "42%",
      description: "children are engaged in child labor, instead of learning"
    },
    {
      stat: "67%",
      description: "of girls (ages 15+) struggle to read and write"
    },
    {
      stat: "60%",
      description: "of seniors report feeling isolated or lonely"
    },
    {
      stat: "17%",
      description: "of seniors aged 65+ are digitally literate"
    },
    {
      stat: "25%",
      description: "of seniors live below the poverty line in developing regions"
    }
  ];

  return (
    <section className="bg-brand-cream minimal-section">
      <div className="container-minimal">
        <div className="text-center mb-32">
          <div className="elegant-small mb-8">Global Challenges</div>
          <h2 className="text-6xl font-light text-black mb-12 tracking-tight">
            Why We Exist
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="text-center space-y-4">
              <h3 className="text-5xl font-light text-accent-gold tracking-tight">{challenge.stat}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
