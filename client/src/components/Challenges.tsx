import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Wrench, BookOpen, Heart, Laptop, DollarSign } from "lucide-react";

export default function Challenges() {
  const challenges = [
    {
      icon: GraduationCap,
      stat: "1 in 5",
      description: "children globally lack access to basic education",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Wrench,
      stat: "42%",
      description: "children are engaged in child labor, instead of learning",
      color: "text-orange-600", 
      bgColor: "bg-orange-100"
    },
    {
      icon: BookOpen,
      stat: "67%",
      description: "of girls (ages 15+) struggle to read and write",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Heart,
      stat: "60%",
      description: "of seniors report feeling isolated or lonely",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Laptop,
      stat: "17%",
      description: "of seniors aged 65+ are digitally literate",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: DollarSign,
      stat: "25%",
      description: "of seniors live below the poverty line in developing regions",
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Challenges We Address</h2>
          <div className="w-24 h-1 bg-brand-mint mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${challenge.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`h-8 w-8 ${challenge.color}`} />
                  </div>
                  <h3 className={`text-3xl font-bold ${challenge.color} mb-2`}>{challenge.stat}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
