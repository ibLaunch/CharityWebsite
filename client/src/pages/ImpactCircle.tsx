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
      <section className="relative bg-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <Link href="/">
              <Button variant="ghost" className="text-slate-600 hover:text-slate-900 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="text-slate-900">Impact</span>
                <br />
                <span className="text-slate-700">Circle</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join our mission to amplify social impact by contributing a minimum of $5 on meaningful dates in your life.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">$5</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Minimum Contribution</h3>
                <p className="text-sm text-gray-600">Start with just $5 on special dates</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">2x</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Donation Matching</h3>
                <p className="text-sm text-gray-600">We double every contribution you make</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">100%</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Direct Impact</h3>
                <p className="text-sm text-gray-600">All funds go directly to projects</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/4 left-8 w-32 h-32 bg-slate-100 rounded-full opacity-60"></div>
        <div className="absolute bottom-8 right-12 w-24 h-24 bg-slate-200 rounded-lg opacity-40"></div>
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
              className="bg-slate-900 text-white py-4 px-8 text-lg hover:bg-slate-800 transition-colors"
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
              <Button variant="outline" className="border-2 border-slate-900 text-slate-900 py-4 px-8 text-lg hover:bg-slate-900 hover:text-white transition-colors">
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