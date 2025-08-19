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
              🪔 One Ganesh Festival 2025 🪔
            </h1>
            <p className="text-xl text-navy-medium mb-8">
              Friday, Sept 5th – Saturday, Sept 6th
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
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <h3 className="font-semibold text-navy-dark mb-2 flex items-center">
                    <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                    Friday, Sept 5th - Cultural Evening
                  </h3>
                  <div className="text-navy-medium space-y-1">
                    <p>🎭 Vibrant Cultural Evening (Kids & Adults Performances)</p>
                    <p>⏰ 6:00 PM – 8:00 PM</p>
                    <p className="text-sm">👉 To register for cultural performances, contact Renuka – (734) 664-8472</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-semibold text-navy-dark mb-2 flex items-center">
                    <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                    Saturday, Sept 6th - Main Festival
                  </h3>
                  <div className="text-navy-medium space-y-2">
                    <p>🙏 Morning Pooja & Sthapana – 10:00 AM – 12:00 PM</p>
                    <p>🛍 Community Fair – 11:00 AM – 5:00 PM</p>
                    <p>🍽 Lunch – 12:30 PM – 2:00 PM</p>
                    <p>📿 Prayers & Mantrochar – 1:00 PM – 3:00 PM</p>
                    <p>🎲 Bingo + Samosa + Chai Fundraiser – 3:00 PM – 4:00 PM</p>
                    <p>🌅 Sandhya Aarti & Visarjan – 4:00 PM – 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-navy-medium mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-dark">Location</h3>
                    <p className="text-navy-medium">21431 Hemingway Dr, Ashburn, Virginia</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-navy-dark mb-2">📢 Vendors & Sponsors Welcome!</h3>
                  <p className="text-navy-medium mb-2">Showcase your products and services at our Community Fair:</p>
                  <ul className="text-sm text-navy-medium space-y-1 ml-4">
                    <li>✨ Affordable vendor spots</li>
                    <li>✨ Direct access to community families</li>
                    <li>✨ Limited availability – reserve soon!</li>
                  </ul>
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

          {/* Registration Section */}
          <div className="bg-navy-very-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-navy-dark mb-6 text-center">✅ Registration Required</h2>
            <p className="text-lg text-navy-medium text-center mb-8">
              Everyone attending must register. Come with family & friends and be part of this beautiful celebration of devotion, culture, and community!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="https://bit.ly/ganesh2025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-dark hover:bg-navy-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block text-center"
              >
                Register Here: bit.ly/ganesh2025
              </a>
              
              <a 
                href="https://bit.ly/ganesh2025fb"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block text-center"
              >
                Facebook Event
              </a>
            </div>
            
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