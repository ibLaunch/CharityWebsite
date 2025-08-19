import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, MapPin, DollarSign, Users } from "lucide-react";
import { Link } from "wouter";
import ganeshImage from "@assets/IMG_0931_2_1753388286042.jpg";

export default function OneGaneshForAllPage() {
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
              One Ganesh for All
            </h1>
            <p className="text-xl text-navy-medium mb-8">
              Celebrating Ganesh Chaturthi with Unity and Community Spirit
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Event Image */}
          <div className="mb-16 text-center">
            <img 
              src={ganeshImage}
              alt="One Ganesh for All Celebration"
              className="w-full max-w-2xl mx-auto object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-navy-dark mb-6">Join Our Celebration</h2>
              <p className="text-lg text-navy-dark leading-relaxed mb-8">
                The Bundele Foundation invites you to celebrate Ganesh Chaturthi with culture, unity, and community spirit. 
                This special event brings together people from all backgrounds to honor tradition while supporting our mission 
                of youth empowerment, senior care, and intergenerational programs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 text-navy-medium mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-dark">Date & Time</h3>
                    <div className="text-navy-medium">
                      <p>Friday, Sept 5th from 6pm-8pm</p>
                      <p>Saturday, Sept 6th from 10am-6pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-navy-medium mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-dark">Location</h3>
                    <p className="text-navy-medium">21431 Hemingway Dr, Ashburn, Virginia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-6 h-6 text-navy-medium mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-dark">Registration</h3>
                    <p className="text-navy-medium">$2 registration supports event logistics and our mission</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-navy-medium mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-dark">Community Impact</h3>
                    <p className="text-navy-medium">All proceeds support youth empowerment, senior care, and intergenerational programs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-navy-dark mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div className="bg-navy-very-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-navy-dark mb-3">Cultural Celebrations</h3>
                  <p className="text-navy-medium">Experience traditional Ganesh Chaturthi rituals, prayers, and cultural performances that bring our community together.</p>
                </div>
                
                <div className="bg-navy-very-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-navy-dark mb-3">Community Unity</h3>
                  <p className="text-navy-medium">Connect with neighbors and community members while celebrating our shared values of compassion and service.</p>
                </div>
                
                <div className="bg-navy-very-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-navy-dark mb-3">Mission Support</h3>
                  <p className="text-navy-medium">Your participation directly supports our ongoing programs for youth empowerment and senior care.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Widget */}
          <div className="bg-navy-very-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-navy-dark mb-6 text-center">Register Now</h2>
            <p className="text-lg text-navy-medium text-center mb-8">
              Secure your spot for this meaningful celebration. Your $2 registration helps us create a memorable event while supporting our community mission.
            </p>
            
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <iframe 
                style={{height:"820px", width:"100%", border:"1px solid #dddddd"}} 
                src="https://www.flipcause.com/hosted_widget/hostedWidgetHome/MjM0Mzg5" 
                scrolling="no" 
                allow="payment"
                title="One Ganesh for All Registration">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}