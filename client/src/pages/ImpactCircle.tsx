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
      <section className="relative bg-white minimal-section pt-32 overflow-hidden">
        <div className="container-minimal">
          <div className="text-center space-y-12">
            <Link href="/">
              <button className="luxury-button-outline mb-16">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </button>
            </Link>
            
            <div className="space-y-8">
              <div className="elegant-small text-navy-medium">Community Giving</div>
              <h1 className="hero-title text-navy-dark">
                Impact<br />
                <span className="italic">Circle</span>
              </h1>
              <p className="text-lg text-navy-dark max-w-2xl mx-auto leading-relaxed font-light">
                Join our mission to amplify social impact by contributing a minimum of $5 on meaningful dates in your life.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-16 max-w-4xl mx-auto mt-24">
              <div className="text-center space-y-4 bg-navy-very-light p-8 rounded-lg border border-navy-light">
                <div className="text-4xl font-light text-navy-medium">$5</div>
                <div className="elegant-small text-navy-medium">Minimum Contribution</div>
                <p className="text-navy-dark font-light">Start with just $5 on special dates</p>
              </div>
              
              <div className="text-center space-y-4 bg-navy-very-light p-8 rounded-lg border border-navy-light">
                <div className="text-4xl font-light text-navy-medium">2x</div>
                <div className="elegant-small text-navy-medium">Donation Matching</div>
                <p className="text-navy-dark font-light">We double every contribution you make</p>
              </div>
              
              <div className="text-center space-y-4 bg-navy-very-light p-8 rounded-lg border border-navy-light">
                <div className="text-4xl font-light text-navy-medium">100%</div>
                <div className="elegant-small text-navy-medium">Direct Impact</div>
                <p className="text-navy-dark font-light">All funds go directly to projects</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background circles for hero section */}
        <div className="absolute top-16 right-12 w-32 h-32 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 left-8 w-40 h-40 bg-gray-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 left-6 w-24 h-24 bg-gray-100 rounded-full opacity-30"></div>
        <div className="absolute top-2/3 right-6 w-28 h-28 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-1/3 right-16 w-20 h-20 bg-gray-100 rounded-full opacity-30"></div>
      </section>

      {/* About Section */}
      <section className="relative bg-brand-cream minimal-section overflow-hidden">
        <div className="container-minimal">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-6xl font-light text-navy-dark tracking-tight">About the Circle</h2>
            
            <div className="space-y-8 text-lg text-navy-dark leading-relaxed font-light">
              <p>
                Join our mission to amplify social impact by contributing a minimum of $5 on your birthday, your loved ones' birthdays, anniversaries, or any day that holds special meaning to you.
              </p>
              <p>
                For every dollar you donate, Bundele Foundation pledges to match it, doubling the power of your generosity. 100% of your donation is directly channeled to support most pressing project in the world, guaranteeing that your generosity translates into palpable aid.
              </p>
              <p className="text-xl font-light text-navy-dark italic">
                Together, we're turning celebrations into acts of kindness.
              </p>
            </div>
          </div>
        </div>
        
        {/* Background circles for this section */}
        <div className="absolute top-20 left-8 w-32 h-32 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-16 right-12 w-28 h-28 bg-gray-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-6 w-24 h-24 bg-gray-100 rounded-full opacity-35"></div>
      </section>

      {/* Join Section */}
      <section className="relative bg-white minimal-section overflow-hidden">
        <div className="container-minimal text-center">
          <div className="space-y-12">
            <h2 className="text-6xl font-light text-navy-dark tracking-tight">Get Started</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Start making a difference today by joining our Impact Circle community and setting up your meaningful giving dates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-3xl mx-auto">
              <button
                onClick={() => window.open("https://chat.whatsapp.com/HTv3KIMTlJlCtBGruoYDTg", "_blank")}
                className="navy-button-secondary px-10 py-4 rounded-none font-normal text-sm tracking-wider uppercase"
              >
                Join WhatsApp Group
              </button>
              
              <button
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform?usp=header", "_blank")}
                className="navy-button-primary px-10 py-4 rounded-none font-normal text-sm tracking-wider uppercase"
              >
                Set Donation Dates
              </button>
              
              <Link href="/contact">
                <button className="navy-button-secondary px-10 py-4 rounded-none font-normal text-sm tracking-wider uppercase">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background circles for this section */}
        <div className="absolute top-16 right-8 w-40 h-40 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 left-8 w-24 h-24 bg-gray-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 left-6 w-32 h-32 bg-gray-100 rounded-full opacity-35"></div>
        <div className="absolute bottom-1/3 right-4 w-28 h-28 bg-gray-200 rounded-full opacity-25"></div>
      </section>

      <Footer />
    </div>
  );
}