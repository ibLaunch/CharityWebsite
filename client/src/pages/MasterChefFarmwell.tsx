import { openDonate } from "@/lib/donate";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import masterChefFlyer from "@assets/masterchef-farmwell-flyer.jpg";

export default function MasterChefFarmwellPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-navy-very-light pt-32 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/" className="inline-flex items-center text-navy-medium hover:text-navy-dark transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold text-navy-dark mb-6 tracking-tight leading-tight">
              Master Chef of Farmwell
            </h1>
            <p className="text-xl text-navy-medium mb-8">
              A Community Cooking Competition
            </p>
          </div>
        </div>
        
        {/* Background circles */}
        <div className="absolute top-20 right-8 w-28 h-28 bg-gray-100 rounded-full opacity-25"></div>
        <div className="absolute bottom-16 left-12 w-32 h-32 bg-gray-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 left-6 w-20 h-20 bg-gray-300 rounded-full opacity-30"></div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Flyer */}
          <div className="mb-16">
            <img 
              src={masterChefFlyer}
              alt="Master Chef of Farmwell Event Flyer"
              className="w-full max-w-lg mx-auto object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg text-navy-dark leading-relaxed mb-8">
              The Bundele Foundation recently hosted "Master Chef of Farmwell," a vibrant community cooking competition that brought neighbors together through the joy of culinary creativity. This engaging event seamlessly blended entertainment with education, creating the perfect atmosphere for participants to showcase their cooking skills while learning about our foundation's mission and impact.
            </p>
          </div>

          {/* Community Connection Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-dark mb-6">Community Connection in Action</h2>
            <p className="text-lg text-navy-dark leading-relaxed">
              The competition fostered genuine connections as community members cheered on their neighbors and discovered shared passions for food and giving back. During the event, attendees had the opportunity to make immediate contributions to our cause through on-site donation stations, with many choosing to support our initiatives right on the spot.
            </p>
          </div>

          {/* Direct Engagement Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-dark mb-6">Direct Engagement Opportunities</h2>
            <p className="text-lg text-navy-dark leading-relaxed">
              The event's interactive format allowed community members to take meaningful action beyond just learning about our work. Participants actively signed up for Impact Circle membership, becoming part of our committed group of ongoing supporters. Additionally, many attendees registered for our wellness classes on-site, taking advantage of the convenient enrollment process while their enthusiasm was at its peak.
            </p>
          </div>

          {/* Transparency Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-dark mb-6">Transparency and Impact</h2>
            <p className="text-lg text-navy-dark leading-relaxed mb-8">
              Throughout the festivities, we shared clear information about how every dollar donated directly serves our community, giving attendees confidence in their decision to contribute. This transparency helped build trust and encouraged deeper involvement in our programs.
            </p>
            <p className="text-lg text-navy-dark leading-relaxed">
              We extend our heartfelt gratitude to our Event, Gold, and Silver Sponsors, as well as our Bronze Sponsors, whose generous support made this community gathering possible.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-navy-very-light p-8 rounded-lg border border-navy-light">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-navy-dark mb-4">Get Involved</h3>
              <p className="text-navy-dark mb-6">
                Interested in joining our community events or supporting our mission?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/impact-circle">
                  <button className="navy-button-primary px-6 py-3 rounded-md">
                    Join Impact Circle
                  </button>
                </Link>
                <button 
                  onClick={() => openDonate()}
                  className="bg-white border-2 border-navy-medium text-navy-medium px-6 py-3 rounded-md hover:bg-navy-medium hover:text-white transition-colors"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>

        </div>
        
        {/* Background circles */}
        <div className="absolute top-1/4 right-4 w-24 h-24 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 left-8 w-36 h-36 bg-gray-100 rounded-full opacity-20"></div>
        <div className="absolute top-2/3 right-12 w-20 h-20 bg-gray-300 rounded-full opacity-25"></div>
      </section>

      <Footer />
    </div>
  );
}