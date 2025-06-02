import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Clover } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import schoolImage from "@assets/Screen Shot 2025-05-19 at 8.18.44 PM.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 geometric-bg min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Geometric shapes */}
            <div className="geometric-shape w-32 h-32 top-0 right-20 opacity-40"></div>
            <div className="geometric-shape w-20 h-20 top-40 left-10 opacity-30"></div>
            <div className="geometric-shape w-28 h-28 bottom-20 right-40 opacity-20"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 leading-tight tracking-tight">
                  Bundele<br />
                  <span className="brand-mint">Foundation</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-lg">
                  Creating positive change through education support and community building. Your donations are matched up to $2,000, doubling your impact.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform", "_blank")}
                    className="bg-black text-white px-8 py-4 text-lg h-auto hover:bg-gray-800 transition-colors rounded-lg"
                  >
                    <Heart className="mr-3 h-5 w-5" />
                    Donate Now
                  </Button>
                  
                  <Link href="/contact">
                    <Button variant="outline" className="px-8 py-4 text-lg h-auto border-2 border-black text-black hover:bg-black hover:text-white transition-colors rounded-lg">
                      Learn More
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={schoolImage}
                  alt="Students in classroom learning environment"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                  <p className="text-sm font-semibold text-gray-600 mb-1">IMPACT SINCE 2022</p>
                  <p className="text-2xl font-bold text-black">3 Schools</p>
                  <p className="text-sm text-gray-600">Supported in India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on supporting education in underserved communities and enhancing quality of life for seniors through targeted programs and community building.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-brand-gray border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Education Support</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bridge the gap between generations through community programs that foster mutual learning and support in underserved communities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-gray border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">👴</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Senior Care</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Help seniors enhance their quality of life through technology workshops and community engagement programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Programs</h2>
            <p className="text-xl text-gray-600">
              Join our community-driven initiatives that create lasting impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg group hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 brand-mint mr-3" />
                  <h3 className="text-2xl font-bold text-black">Impact Circle</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Join our mission to amplify social impact by contributing on meaningful dates. Every dollar is matched by our foundation.
                </p>
                <Link href="/impact-circle">
                  <Button className="bg-emerald-500 text-white hover:bg-emerald-600 transition-colors rounded-lg">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg group hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Clover className="h-8 w-8 brand-mint mr-3" />
                  <h3 className="text-2xl font-bold text-black">Yoga Classes</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Traditional yoga practice following Ashtanga principles. Wellness within, change around - supporting charity through mindful practice.
                </p>
                <Link href="/yoga">
                  <Button className="bg-black text-white hover:bg-gray-800 transition-colors rounded-lg">
                    View Classes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
