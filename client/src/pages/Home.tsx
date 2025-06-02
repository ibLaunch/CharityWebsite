import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import schoolImage from "@assets/Screen Shot 2025-05-19 at 8.18.44 PM.png";
import furnitureImage from "@assets/Screen Shot 2025-05-19 at 2.01.54 PM.png";
import cabinetImage from "@assets/Screen Shot 2025-05-19 at 2.03.57 PM.png";
import schoolHallImage from "@assets/Screen Shot 2025-05-19 at 8.18.59 PM.png";

export default function Home() {
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
      stat: "36%",
      description: "of children are out of school, and 67% of girls (ages 15+) struggle to read and write"
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

  const impactStories = [
    {
      year: "2022",
      title: "Donated 12 pieces of furniture to Madhyamik Vidyalaya",
      image: furnitureImage,
      description: "Madhyamik Vidyalaya in Pune is a government-aided rural school. Until recently, students sat on the floor due to a lack of furniture, leading to discomfort and health issues. The donation has helped create a safer, cleaner, and more focused learning environment."
    },
    {
      year: "2022", 
      title: "Donated 10 dining table chairs to Mahalunge Vidyalaya",
      image: cabinetImage,
      description: "Helped improve the school's mealtime setting by providing students with a more comfortable and hygienic space to eat."
    },
    {
      year: "2023",
      title: "The Painting Project at Nutan Balvikas Mandir, Pune", 
      image: schoolHallImage,
      description: "The classrooms hadn't been painted in over 30 years. The Bundele Foundation donated ₹2 lakhs to help, along with Rotary Clubs and a CSR partner for Paints. The project focused on painting the classrooms first, then the outside walls."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-32 bg-brand-light-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
                Welcome to
                <span className="brand-navy block">Bundele Foundation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your donations are not only tax-deductible but also matched by Bundele Foundation for up to $2,000, doubling your impact. Together, we are creating a significant positive change!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/yoga">
                  <Button className="bg-brand-navy text-white px-8 py-4 text-lg hover:opacity-90 transition-opacity">
                    Join Yoga Classes
                  </Button>
                </Link>
                
                <Button
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform", "_blank")}
                  className="bg-black text-white px-8 py-4 text-lg hover:bg-gray-800 transition-colors"
                >
                  Donate Now
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={schoolImage}
                alt="Students and educators in classroom"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">SCHOOLS SUPPORTED</p>
                    <p className="text-lg font-bold text-black">Since 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn About What We Do */}
      <section className="py-20 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Learn about what we do</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Supporting education in underserved communities</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Bridge the gap between generations through community programs that foster mutual learning and support. By creating mentorship opportunities, where the adults can share their wealth of knowledge and life experiences with young minds, we can cultivate a culture of respect and appreciation.
              </p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Help seniors enhance their quality of life in their golden years</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Additionally, integrating technology workshops can empower older adults to stay connected with the digital world, reducing isolation and opening new avenues for learning and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Since 2022 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">OUR IMPACT SINCE 2022</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-lg">
                <CardContent className="p-0">
                  <img 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-black mb-3">{story.year}- {story.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-brand-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">The challenges</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-lg text-center">
                <CardContent className="p-8">
                  <h3 className="text-4xl font-bold text-black mb-4">{challenge.stat}</h3>
                  <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
