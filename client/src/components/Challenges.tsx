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
    <section className="bg-navy-very-light minimal-section">
      <div className="container-minimal">
        <div className="text-center mb-32">
          <div className="elegant-small mb-8 text-navy-medium">Global Challenges</div>
          <h2 className="text-6xl font-light text-navy-dark mb-12 tracking-tight">
            Why We Exist
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="text-center space-y-4 bg-white p-8 rounded-lg border border-navy-light shadow-sm">
              <h3 className="text-5xl font-light text-navy-medium tracking-tight">{challenge.stat}</h3>
              <p className="text-navy-dark leading-relaxed font-light">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
