import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarPlus, Star, ArrowLeft, Dumbbell, Heart, Apple, Flower, Activity, Zap, Brain } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import bWellnessImage from "@assets/b-wellness_1750106432114.png";

export default function YogaPage() {
  const packages = [
    {
      name: "Single Class",
      price: "$65",
      description: "Perfect for trying out our classes",
      isPopular: false
    },
    {
      name: "3-Class Pack", 
      price: "$175",
      originalPrice: "$195",
      savings: "Save 10%",
      description: "Great for regular practice",
      isPopular: false
    },
    {
      name: "5-Class Pack",
      price: "$292", 
      originalPrice: "$325",
      savings: "Save 10%",
      description: "Best for consistency",
      isPopular: true
    },
    {
      name: "10-Class Pack",
      price: "$585",
      originalPrice: "$650", 
      savings: "Save 10%",
      description: "Maximum value",
      isPopular: false
    }
  ];

  const principles = [
    { name: "Yama", description: "Ethical restraints" },
    { name: "Niyama", description: "Personal observances" },
    { name: "Asana", description: "Postures" },
    { name: "Pranayama", description: "Breath control" },
    { name: "Pratyahara", description: "Withdrawal of senses" },
    { name: "Dharana", description: "Concentration" },
    { name: "Dhyana", description: "Meditation" },
    { name: "Samadhi", description: "Absorption" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Wellness Image */}
      <section 
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${bWellnessImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Hero Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 w-full py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link href="/">
                <button className="mb-6 sm:mb-8 inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-white/70 text-white hover:bg-white/10 transition-colors rounded-md text-sm sm:text-base">
                  <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Back to Home
                </button>
              </Link>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="text-navy-light text-sm sm:text-base lg:text-lg font-medium tracking-wide uppercase">
                  Holistic Well-being Programs
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Bundele<br />
                  <span className="italic text-navy-light">Wellness</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-light text-navy-very-light italic leading-relaxed">
                  Cultivating Holistic Well-being, Transforming Lives
                </p>
                
                {/* Pricing Highlight */}
                <div className="inline-block bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-medium text-navy-medium uppercase tracking-wide mb-1 sm:mb-2">
                      Starting From
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-dark mb-1">$65</div>
                    <div className="text-xs sm:text-sm text-navy-medium">per session</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <button 
                    onClick={() => window.scrollTo({ top: document.getElementById('pricing')?.offsetTop || 0, behavior: 'smooth' })}
                    className="bg-navy-dark hover:bg-navy-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold transition-colors"
                  >
                    Explore Our Programs
                  </button>
                  <Link href="/contact">
                    <button className="border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold transition-colors">
                      Start Your Journey
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Introduction Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-dark mb-8">
              Bundele Wellness: Cultivating Holistic Well-being, Transforming Lives
            </h2>
            <div className="w-24 h-1 bg-navy-medium mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-navy-dark leading-relaxed space-y-8">
            <p className="text-xl text-center max-w-4xl mx-auto">
              At Bundele Wellness, we believe that true well-being extends beyond physical fitness; it encompasses a harmonious balance of mind, body, and spirit. We are proud to present a comprehensive wellness solution, meticulously designed to guide you on a transformative journey towards optimal health and inner peace.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
              <div className="space-y-6">
                <p>
                  Our unique approach seamlessly integrates four essential pillars, each carefully crafted to honor timeless wellness wisdom while embracing the latest advancements in modern fitness science. We understand that every individual's wellness journey is distinct, which is why our programs are not one-size-fits-all solutions, but rather personalized experiences tailored to your unique needs, goals, and lifestyle.
                </p>
                <p>
                  Whether you are just beginning your wellness journey or seeking to deepen an existing practice, Bundele Wellness offers a sanctuary where you can explore, grow, and transform in a supportive and nurturing environment. Our holistic methodology ensures that every aspect of your well-being is addressed, creating a foundation for lasting health and happiness.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-navy-very-light to-navy-light border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy-dark mb-6 text-center">Our Wellness Philosophy</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-navy-medium rounded-full"></div>
                      <span className="text-navy-dark font-medium">Mind-Body-Spirit Integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-navy-medium rounded-full"></div>
                      <span className="text-navy-dark font-medium">Personalized Transformation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-navy-medium rounded-full"></div>
                      <span className="text-navy-dark font-medium">Sustainable Wellness Practices</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-navy-medium rounded-full"></div>
                      <span className="text-navy-dark font-medium">Community Impact & Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-8 w-32 h-32 bg-navy-very-light rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-12 w-24 h-24 bg-navy-light rounded-full opacity-25"></div>
      </section>

      {/* Four Pillars of Transformation */}
      <section id="programs" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-navy-very-light to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-dark mb-4 sm:mb-6">The Four Pillars of Your Transformation</h2>
            <p className="text-base sm:text-lg lg:text-xl text-navy-medium max-w-3xl mx-auto">
              A comprehensive approach that honors ancient wisdom while embracing modern science
            </p>
          </div>
          
          {/* Four Pillars - Improved Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Pillar 1: Mindful Yoga Practice */}
            <Card className="bg-white border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-navy-dark to-navy-medium rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 shadow-lg">
                    <Flower className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-navy-light drop-shadow-sm stroke-2" style={{ stroke: 'currentColor', fill: 'none' }} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-navy-dark">Mindful Yoga Practice</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-navy-medium italic font-light">Awaken Your Inner Harmony</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-navy-dark leading-relaxed mb-4">
                  Immerse yourself in the ancient art of yoga, where every pose, breath, and meditation is an invitation to connect with your deepest self. Our mindful yoga practices are designed to enhance flexibility, build core strength, and cultivate a profound sense of calm and mental clarity.
                </p>
                <div className="text-center">
                  <span className="text-xs sm:text-sm font-medium text-navy-dark bg-navy-very-light px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                    Flexibility • Balance • Mindfulness
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 2: Functional Strength Training */}
            <Card className="bg-white border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-dark to-navy-medium rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Dumbbell className="w-10 h-10 text-navy-light drop-shadow-sm stroke-2" style={{ stroke: 'currentColor', fill: 'none' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-dark">Functional Strength Training</h3>
                    <p className="text-lg text-navy-medium italic font-light">Build Resilience, Unleash Potential</p>
                  </div>
                </div>
                <p className="text-navy-dark leading-relaxed mb-4">
                  Beyond aesthetics, our functional strength training programs are engineered to build a resilient body capable of navigating the demands of everyday life with ease and confidence. We focus on movements that mimic natural human actions, strengthening your muscles and improving balance.
                </p>
                <div className="text-center">
                  <span className="text-sm font-medium text-navy-dark bg-navy-very-light px-4 py-2 rounded-full">
                    Power • Resilience • Confidence
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 3: Cardiovascular Conditioning */}
            <Card className="bg-white border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-medium to-navy-hover rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Activity className="w-10 h-10 text-navy-light drop-shadow-sm stroke-2" style={{ stroke: 'currentColor', fill: 'none' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-dark">Cardiovascular Conditioning</h3>
                    <p className="text-lg text-navy-medium italic font-light">Energize Your Core, Elevate Your Spirit</p>
                  </div>
                </div>
                <p className="text-navy-dark leading-relaxed mb-4">
                  Ignite your cardiovascular system with dynamic and engaging conditioning routines that boost your endurance, enhance heart health, and elevate your energy levels. Our programs incorporate a variety of effective techniques, from invigorating aerobic exercises to high-intensity interval training.
                </p>
                <div className="text-center">
                  <span className="text-sm font-medium text-navy-dark bg-navy-very-light px-4 py-2 rounded-full">
                    Endurance • Energy • Vitality
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 4: Personalized Nutrition Guidance */}
            <Card className="bg-white border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-hover to-navy-dark rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Apple className="w-10 h-10 text-navy-light drop-shadow-sm stroke-2" style={{ stroke: 'currentColor', fill: 'none' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-dark">Personalized Nutrition Guidance</h3>
                    <p className="text-lg text-navy-medium italic font-light">Nourish Your Body, Fuel Your Journey</p>
                  </div>
                </div>
                <p className="text-navy-dark leading-relaxed mb-4">
                  Understand that true wellness begins from within, and nutrition plays a pivotal role in your overall health. Our personalized nutrition guidance goes beyond restrictive diets, focusing instead on sustainable, wholesome eating habits that nourish your body and fuel your journey.
                </p>
                <div className="text-center">
                  <span className="text-sm font-medium text-navy-dark bg-navy-very-light px-4 py-2 rounded-full">
                    Nourishment • Balance • Sustainability
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-navy-dark mb-6">Your Journey, Uniquely Crafted</h3>
              <div className="w-24 h-1 bg-navy-medium mx-auto"></div>
            </div>
            
            <div className="space-y-8 text-lg text-navy-dark leading-relaxed">
              <p className="text-center text-xl">
                We understand that every individual's wellness journey is distinct. That's why every program at Bundele Wellness is uniquely crafted for you.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p>
                    We begin with a comprehensive assessment of your current fitness level, lifestyle demands, and personal goals. This personalized approach ensures that whether you are new to wellness or looking to elevate your existing routine, our integrated methodology delivers sustainable, transformative results that seamlessly fit into your life.
                  </p>
                  <p>
                    We are committed to meeting you where you are and guiding you to where you want to be, making your wellness journey both achievable and enjoyable.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-navy-very-light to-navy-light rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-navy-dark mb-6 text-center">Your Wellness Blueprint</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-navy-medium text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <span className="font-medium">Comprehensive Assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-navy-medium text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <span className="font-medium">Personalized Program Design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-navy-medium text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <span className="font-medium">Progressive Adaptation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-navy-medium text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <span className="font-medium">Ongoing Support & Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background circles */}
        <div className="absolute top-20 right-8 w-32 h-32 bg-gray-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-24 left-12 w-24 h-24 bg-gray-300 rounded-full opacity-25"></div>
      </section>

      {/* Investment & Impact Section */}
      <section id="pricing" className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-dark mb-6">Invest in Your Transformation, Impact the World</h2>
            <div className="w-24 h-1 bg-navy-medium mx-auto mb-8"></div>
            <p className="text-xl text-navy-medium max-w-3xl mx-auto">
              Your wellness journey creates ripples of positive change that extend far beyond yourself
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-navy-very-light to-white border-0 shadow-2xl">
                <CardContent className="p-10 text-center">
                  <div className="mb-6">
                    <div className="text-6xl font-bold text-navy-dark">$65</div>
                    <div className="text-xl text-navy-medium">per session</div>
                  </div>
                  <p className="text-lg leading-relaxed text-navy-dark">
                    Sessions are priced at $65 each, with attractive package discounts available for committed members ready to invest in their complete transformation.
                  </p>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-navy-very-light border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold text-navy-dark mb-2">3-Session Pack</h4>
                    <div className="text-xl font-bold text-navy-medium">$175</div>
                    <div className="text-sm text-gray-500 line-through">$195</div>
                    <div className="text-sm font-semibold text-navy-dark">Save 10%</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-navy-very-light border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold text-navy-dark mb-2">5-Session Pack</h4>
                    <div className="text-xl font-bold text-navy-medium">$292</div>
                    <div className="text-sm text-gray-500 line-through">$325</div>
                    <div className="text-sm font-semibold text-navy-dark">Save 10%</div>
                  </CardContent>
                </Card>

                <Card className="bg-navy-very-light border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-bold text-navy-dark mb-2">10-Session Pack</h4>
                    <div className="text-xl font-bold text-navy-medium">$585</div>
                    <div className="text-sm text-gray-500 line-through">$650</div>
                    <div className="text-sm font-semibold text-navy-dark">Save 10%</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-navy-dark to-navy-medium text-white border-0 shadow-2xl">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-6 text-center">Your Impact Beyond Wellness</h3>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                      By choosing Bundele Wellness, you are not only investing in your own health and well-being but also contributing to a greater cause. Your participation directly helps fund community education and support programs worldwide through the Bundele Foundation.
                    </p>
                    <p>
                      This means that every step you take towards your personal wellness journey with us simultaneously supports educational initiatives and empowers communities in need.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-navy-very-light rounded-2xl p-8">
                <h4 className="text-xl font-bold text-navy-dark mb-4 text-center">Community Impact</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy-medium">Education</div>
                    <div className="text-sm text-navy-medium">Supporting schools worldwide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy-medium">Seniors</div>
                    <div className="text-sm text-navy-medium">Technology & wellness programs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-light text-navy-dark mb-8 italic">
              "Join Bundele Wellness today and embark on a holistic wellness journey that benefits you, and the world."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdAyE2hC6OAAEKo2Abu477TbnFHcLJCTEAuSuNBChwhJAt14A/viewform?usp=header", "_blank")}
                className="bg-navy-dark hover:bg-navy-hover text-white px-12 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <CalendarPlus className="mr-3 h-5 w-5" />
                Begin Your Wellness Journey
              </button>
              
              <button 
                onClick={() => window.open("https://www.paypal.com/donate/?hosted_button_id=3MXBUHN8VQGGJ", "_blank")}
                className="border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white px-12 py-4 rounded-md text-lg font-semibold transition-colors"
              >
                Support Our Mission
              </button>
            </div>
          </div>
        </div>
        
        {/* Background circles for this section */}
        <div className="absolute top-20 right-8 w-32 h-32 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-16 left-8 w-40 h-40 bg-gray-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-4 w-24 h-24 bg-gray-100 rounded-full opacity-35"></div>
      </section>

      <Footer />
    </div>
  );
}