import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PayPalButton from "@/components/PayPalButton";
import { Link } from "wouter";
import schoolImage from "@assets/Screen Shot 2025-05-19 at 8.18.44 PM.png";
import furnitureImage from "@assets/image_1749228397347.png";
import cabinetImage from "@assets/image_1749228404698.png";
import schoolHallImage from "@assets/image_1749228409980.png";

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
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-brand-cream pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-warm-white to-brand-cream"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight">
                  <span className="text-brand-charcoal font-extralight">Bundele</span>
                  <br />
                  <span className="text-brand-charcoal font-light">Foundation</span>
                </h1>
                <p className="text-lg text-brand-charcoal/70 leading-relaxed max-w-lg font-light">
                  Your donations are not only tax-deductible but also matched by Bundele Foundation for up to $2,000, doubling your impact.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-brand-charcoal text-white px-8 py-4 text-lg hover:bg-brand-charcoal/90 transition-colors rounded-sm">
                  <PayPalButton amount="50.00" currency="USD" intent="CAPTURE" />
                </div>
                
                <Link href="/impact-circle">
                  <Button variant="outline" className="border border-brand-charcoal text-brand-charcoal px-8 py-4 text-lg hover:bg-brand-charcoal hover:text-white transition-colors rounded-sm font-light">
                    Join Impact Circle
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden shadow-lg">
                <img 
                  src={schoolImage}
                  alt="Students learning in classroom"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-brand-warm-white p-6 rounded-sm shadow-lg border border-brand-beige">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-brand-charcoal rounded-sm flex items-center justify-center">
                    <span className="text-white text-2xl font-light">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-light text-brand-charcoal/60 uppercase tracking-wider">Schools Supported</p>
                    <p className="text-xl font-light text-brand-charcoal">Since 2022</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 bg-brand-warm-white/95 backdrop-blur-sm p-4 rounded-sm shadow-sm border border-brand-beige/50">
                <p className="text-sm font-light text-brand-charcoal">100% Direct Impact</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/4 left-8 w-32 h-32 bg-brand-beige/40 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/4 right-8 w-24 h-24 bg-brand-accent/30 rounded-sm opacity-40"></div>
      </section>

      {/* Learn About What We Do */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-brand-charcoal mb-6 tracking-wide">Learn about what we do</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h3 className="text-2xl font-light text-brand-charcoal mb-8 leading-relaxed">Supporting education in underserved communities</h3>
              <p className="text-base text-brand-charcoal/70 leading-relaxed mb-8 font-light">
                Bridge the gap between generations through community programs that foster mutual learning and support. By creating mentorship opportunities, where the adults can share their wealth of knowledge and life experiences with young minds, we can cultivate a culture of respect and appreciation.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-brand-charcoal mb-8 leading-relaxed">Help seniors enhance their quality of life in their golden years</h3>
              <p className="text-base text-brand-charcoal/70 leading-relaxed font-light">
                Additionally, integrating technology workshops can empower older adults to stay connected with the digital world, reducing isolation and opening new avenues for learning and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Since 2022 */}
      <section className="py-24 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-brand-charcoal mb-6 tracking-wide">OUR IMPACT SINCE 2022</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {impactStories.map((story, index) => (
              <Card key={index} className="bg-white border border-brand-beige/30 shadow-sm rounded-sm overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-lg font-light text-brand-charcoal mb-4 leading-relaxed">{story.year} - {story.title}</h3>
                    <p className="text-brand-charcoal/70 text-sm leading-relaxed font-light">
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
      <section className="py-24 bg-brand-dark-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">The challenges</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-brand-charcoal border border-brand-accent/20 shadow-sm text-center rounded-sm">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-light text-white mb-6">{challenge.stat}</h3>
                  <p className="text-white/70 leading-relaxed font-light">{challenge.description}</p>
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
