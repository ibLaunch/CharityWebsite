import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, DollarSign, Zap, Target, Heart, Users, Gift, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ImpactCirclePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Visual Impact Illustration */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-navy-very-light via-white to-navy-very-light flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <Link href="/">
                <button className="mb-8 inline-flex items-center px-6 py-3 border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white transition-colors rounded-md">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </button>
              </Link>
              
              <div className="space-y-6">
                <div className="text-navy-medium text-lg font-medium tracking-wide uppercase">
                  Community Giving
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-navy-dark leading-tight">
                  Impact<br />
                  <span className="italic text-navy-medium">Circle</span>
                </h1>
                <p className="text-xl text-navy-dark leading-relaxed font-light">
                  Transform your special moments into acts of kindness. Join our mission to amplify social impact by contributing just $5 on meaningful dates in your life.
                </p>
                <p className="text-lg text-navy-medium italic font-light">
                  "Turning celebrations into acts of kindness"
                </p>
              </div>
            </div>

            {/* Visual Impact Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-navy-dark to-navy-medium rounded-3xl p-12 shadow-2xl">
                {/* Central celebration icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Gift className="w-10 h-10 text-navy-dark" />
                  </div>
                </div>
                
                {/* Ripple effect visualization */}
                <div className="relative flex justify-center items-center">
                  <div className="absolute w-32 h-32 border-4 border-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute w-48 h-48 border-2 border-white/20 rounded-full animate-pulse delay-75"></div>
                  <div className="absolute w-64 h-64 border-2 border-white/10 rounded-full animate-pulse delay-150"></div>
                  
                  {/* Impact icons around the circle */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Users className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-yellow-500" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Target className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-white text-lg font-light">
                    Your celebration creates ripples of positive change
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-dark mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-navy-medium mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* $5 Minimum */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-green-600 mb-2">$5</div>
                <div className="text-lg font-semibold text-navy-dark mb-3">Minimum Contribution</div>
                <p className="text-navy-dark/80 leading-relaxed">Start making a difference with just $5 on your special dates</p>
              </CardContent>
              <div className="absolute top-4 right-4 w-24 h-24 bg-green-200/30 rounded-full opacity-50"></div>
            </Card>

            {/* 2x Matching */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-blue-600 mb-2">2x</div>
                <div className="text-lg font-semibold text-navy-dark mb-3">Donation Matching</div>
                <p className="text-navy-dark/80 leading-relaxed">We double every contribution you make for maximum impact</p>
              </CardContent>
              <div className="absolute top-4 right-4 w-24 h-24 bg-blue-200/30 rounded-full opacity-50"></div>
            </Card>

            {/* 100% Direct Impact */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-lg font-semibold text-navy-dark mb-3">Direct Impact</div>
                <p className="text-navy-dark/80 leading-relaxed">All funds go directly to projects that need them most</p>
              </CardContent>
              <div className="absolute top-4 right-4 w-24 h-24 bg-purple-200/30 rounded-full opacity-50"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 bg-navy-very-light overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <h2 className="text-4xl font-bold text-navy-dark mb-6">About the Circle</h2>
            <div className="w-24 h-1 bg-navy-medium mx-auto mb-8"></div>
            
            <div className="max-w-4xl mx-auto space-y-8 text-lg text-navy-dark leading-relaxed">
              <p>
                Join our mission to amplify social impact by contributing a minimum of $5 on your birthday, your loved ones' birthdays, anniversaries, or any day that holds special meaning to you.
              </p>
              <p>
                For every dollar you donate, Bundele Foundation pledges to match it, doubling the power of your generosity. 100% of your donation is directly channeled to support the most pressing projects in the world, guaranteeing that your generosity translates into tangible aid.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-navy-medium">
                <p className="text-xl text-navy-dark italic font-medium">
                  "Together, we're turning celebrations into acts of kindness."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-8 w-32 h-32 bg-navy-light/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-16 right-12 w-28 h-28 bg-navy-medium/20 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 right-6 w-24 h-24 bg-navy-dark/20 rounded-full opacity-25"></div>
      </section>

      {/* Join Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-navy-dark mb-6">Get Started</h2>
            <div className="w-24 h-1 bg-navy-medium mx-auto mb-8"></div>
            <p className="text-xl text-navy-dark max-w-3xl mx-auto leading-relaxed">
              Start making a difference today by joining our Impact Circle community and setting up your meaningful giving dates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-4xl mx-auto">
              <button
                onClick={() => window.open("https://chat.whatsapp.com/HTv3KIMTlJlCtBGruoYDTg", "_blank")}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Users className="mr-3 h-5 w-5" />
                Join WhatsApp Group
              </button>
              
              <button
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform?usp=header", "_blank")}
                className="bg-navy-dark hover:bg-navy-hover text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Gift className="mr-3 h-5 w-5" />
                Set Donation Dates
              </button>
              
              <Link href="/contact">
                <button className="border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors flex items-center justify-center">
                  <Heart className="mr-3 h-5 w-5" />
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-16 right-8 w-40 h-40 bg-navy-light/10 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-8 w-24 h-24 bg-navy-medium/10 rounded-full opacity-60"></div>
        <div className="absolute top-1/3 left-6 w-32 h-32 bg-navy-dark/10 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 right-4 w-28 h-28 bg-navy-light/10 rounded-full opacity-50"></div>
      </section>

      <Footer />
    </div>
  );
}