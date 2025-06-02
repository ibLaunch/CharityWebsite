import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ImpactCirclePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-brand-light-gray relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/">
              <Button variant="ghost" className="text-gray-600 hover:text-black mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight">
              <span className="brand-navy">Impact</span> Circle
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our mission to amplify social impact by contributing a minimum of $5 on your birthday, your loved ones' birthdays, anniversaries, or any day that holds special meaning to you.
            </p>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-8 w-32 h-32 bg-brand-beige rounded-full opacity-60"></div>
        <div className="absolute bottom-8 right-12 w-24 h-24 bg-white rounded-lg shadow-lg opacity-80"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">About the Impact Circle</h2>
          
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              Join our mission to amplify social impact by contributing a minimum of $5 on your birthday, your loved ones' birthdays, anniversaries, or any day that holds special meaning to you.
            </p>
            <p>
              For every dollar you donate, Bundele Foundation pledges to match it, doubling the power of your generosity. 100% of your donation is directly channeled to support most pressing project in the world, guaranteeing that your generosity translates into palpable aid.
            </p>
            <p className="text-xl font-semibold text-black text-center">
              Together, we're turning celebrations into acts of kindness!
            </p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-8">Get Started</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Start making a difference today by joining our Impact Circle community and setting up your meaningful giving dates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Button
              onClick={() => window.open("https://chat.whatsapp.com/HTv3KIMTlJlCtBGruoYDTg", "_blank")}
              className="bg-brand-navy text-white py-4 px-8 text-lg hover:opacity-90 transition-opacity"
            >
              Join WhatsApp Group
            </Button>
            
            <Button
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform?usp=header", "_blank")}
              className="bg-black text-white py-4 px-8 text-lg hover:bg-gray-800 transition-colors"
            >
              Set Donation Dates
            </Button>
            
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-brand-navy brand-navy py-4 px-8 text-lg hover:bg-brand-navy hover:text-white transition-colors">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}