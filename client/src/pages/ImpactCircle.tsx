import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Sparkles, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ImpactCirclePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 geometric-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Geometric shapes */}
            <div className="geometric-shape w-32 h-32 top-10 right-10 opacity-50"></div>
            <div className="geometric-shape w-20 h-20 top-40 left-20 opacity-30"></div>
            
            <div className="text-center relative z-10">
              <Link href="/">
                <Button variant="ghost" className="text-gray-600 hover:text-black mb-8">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight">
                Impact Circle
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join our mission to amplify social impact by contributing a minimum of $5 on meaningful dates in your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">About the Impact Circle</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Join our mission to amplify social impact by contributing a minimum of $5 on your birthday, your loved ones' birthdays, anniversaries, or any day that holds special meaning to you.
                </p>
                <p>
                  For every dollar you donate, Bundele Foundation pledges to match it, doubling the power of your generosity. 100% of your donation is directly channeled to support the most pressing projects in the world, guaranteeing that your generosity translates into palpable aid.
                </p>
                <p className="text-xl font-semibold text-black">
                  Together, we're turning celebrations into acts of kindness!
                </p>
              </div>
            </div>
            
            <Card className="bg-brand-gray border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Sparkles className="h-8 w-8 brand-mint mr-3" />
                  <h3 className="text-2xl font-bold text-black">Donation Matching</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Every dollar you contribute is matched by Bundele Foundation, instantly doubling your impact. Your $5 becomes $10, your $50 becomes $100.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-500">
                  <p className="text-sm font-semibold text-emerald-600 mb-2">GUARANTEED IMPACT</p>
                  <p className="text-gray-700">
                    100% of donations go directly to our most pressing projects worldwide
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Choose Your Dates</h3>
                <p className="text-gray-600">
                  Select meaningful dates - birthdays, anniversaries, or any special occasions when you'd like to make an impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Set Your Amount</h3>
                <p className="text-gray-600">
                  Commit to a minimum of $5 per occasion. Every dollar will be matched by Bundele Foundation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Create Impact</h3>
                <p className="text-gray-600">
                  Watch your contribution get doubled and go directly to education and community support projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-8">Ready to Join?</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Start making a difference today by joining our Impact Circle community and setting up your meaningful giving dates.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button
              onClick={() => window.open("https://chat.whatsapp.com/HTv3KIMTlJlCtBGruoYDTg", "_blank")}
              className="bg-emerald-500 text-white py-6 px-8 text-lg h-auto hover:bg-emerald-600 transition-colors rounded-lg"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Join WhatsApp Group
            </Button>
            
            <Button
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform?usp=header", "_blank")}
              className="bg-black text-white py-6 px-8 text-lg h-auto hover:bg-gray-800 transition-colors rounded-lg"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Set Donation Dates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}