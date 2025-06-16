import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Heart, GraduationCap, Users } from "lucide-react";
import hemantBundelePhoto from "@assets/Hemant_Bundele_1750101113518.jpg";

export default function FoundersMessagePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Link href="/">
                <button className="luxury-button-outline mb-8">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </button>
              </Link>
              
              <div className="space-y-6">
                <div className="elegant-small text-navy-medium">Leadership & Vision</div>
                <h1 className="hero-title text-navy-dark">
                  A Message from<br />
                  Our <span className="italic">Founder</span>
                </h1>
                <p className="text-xl text-navy-medium leading-relaxed">
                  Hemant Bundele - Visionary Leader of the Bundele Foundation
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Discover the inspiring journey and unwavering commitment behind our mission to transform lives through education and senior empowerment.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <img 
                  src={hemantBundelePhoto}
                  alt="Hemant Bundele, Founder of Bundele Foundation"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-navy-dark text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">2022</div>
                    <div className="text-sm">Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-8 w-28 h-28 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-16 right-12 w-36 h-36 bg-gray-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-6 w-24 h-24 bg-gray-100 rounded-full opacity-30"></div>
      </section>

      {/* Main Message Content */}
      <main className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-navy-dark mb-6">Our Vision: Small Steps, Monumental Impact</h2>
              <div className="w-24 h-1 bg-navy-medium mx-auto"></div>
            </div>

            <div className="text-lg text-navy-dark leading-relaxed space-y-8">
              <p className="text-xl font-light italic text-navy-medium mb-8">
                "Dear Friends, Supporters, and Fellow Advocates,"
              </p>

              <p>
                It is with immense gratitude and a profound sense of purpose that I share with you the vision guiding the Bundele Foundation. When we embarked on this journey, our aim was clear: to create positive, lasting change in the lives of those who need it most. We understood that true transformation often begins with small, deliberate steps, but we also held an unwavering belief in the potential for these steps to lead to monumental impact.
              </p>

              <p>
                Our foundation is built on the fundamental principle that every individual deserves the opportunity to thrive, regardless of their circumstances. We have identified two critical areas where our efforts can make the most significant difference: supporting education in underserved communities and enhancing the quality of life for seniors in their golden years. These are not merely causes; they are deeply personal commitments rooted in the belief that a society flourishes when its most vulnerable members are supported and empowered.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <section className="mt-20 mb-16">
            <div className="bg-navy-very-light rounded-2xl p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-navy-dark rounded-full flex items-center justify-center mr-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-navy-dark">Empowering the Next Generation Through Education</h3>
              </div>
              
              <div className="space-y-6 text-lg text-navy-dark leading-relaxed">
                <p>
                  In the realm of education, we are acutely aware of the challenges that many children face. The statistics are stark: one in five children globally lacks access to basic education, and far too many are engaged in child labor instead of learning. The Bundele Foundation is dedicated to bridging this gap. Our initiatives, such as providing essential furniture to schools like Madhyamik Vidyalaya and ensuring hygienic meal settings at Mahalunge Vidyalaya, are designed to create environments where children can learn, grow, and reach their full potential.
                </p>

                <p>
                  Our vision extends beyond mere infrastructure. We aim to cultivate a culture of respect and appreciation by fostering mentorship opportunities. We envision a future where young minds are nurtured by the wisdom and life experiences of older generations, creating a symbiotic relationship that benefits all. This intergenerational exchange is vital for building strong, resilient communities.
                </p>
              </div>
            </div>
          </section>

          {/* Seniors Section */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-navy-medium rounded-full flex items-center justify-center mr-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-navy-dark">Enriching the Lives of Our Seniors</h3>
              </div>
              
              <div className="space-y-6 text-lg text-navy-dark leading-relaxed">
                <p>
                  Simultaneously, we are deeply committed to addressing the challenges faced by our senior population. The loneliness and isolation experienced by many, coupled with the digital divide, are issues that demand our attention. Our programs, including technology workshops, are designed to empower older adults, enabling them to stay connected with the digital world. This is crucial for reducing isolation, opening new avenues for learning, and ensuring they remain active and engaged members of our communities.
                </p>
              </div>
            </div>
          </section>

          {/* Impact Journey Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-navy-dark mb-6">Our Journey Towards a Huge Impact</h3>
              <div className="w-24 h-1 bg-navy-medium mx-auto"></div>
            </div>

            <div className="space-y-6 text-lg text-navy-dark leading-relaxed">
              <p>
                While our journey began with focused, deliberate actions, our aspirations are boundless. We started by addressing immediate needs, recognizing that even the smallest interventions can spark significant change. Each piece of furniture donated, every meal setting improved, and every classroom painted represents a step forward in our mission. These initial successes, though seemingly modest, are the bedrock upon which we will build a future of profound impact.
              </p>

              <p>
                We envision a future where every child has access to quality education, where every senior lives with dignity and connection, and where communities are strengthened through mutual support and understanding. This is a long-term commitment, one that requires sustained effort, unwavering dedication, and the collective support of individuals like you.
              </p>

              <p>
                We are marching towards a huge impact, one that will resonate across generations and transform lives. We invite you to join us on this incredible journey. Your support, whether through volunteering, donations, or simply spreading awareness, is invaluable. Together, we can turn our vision into a tangible reality, creating a world where positive change is not just a hope, but a lived experience for all.
              </p>
            </div>
          </section>

          {/* Closing */}
          <div className="text-center mt-16">
            <p className="text-xl font-light italic text-navy-medium mb-8">
              "With heartfelt thanks,"
            </p>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-navy-dark">Hemant Bundele</div>
              <div className="text-lg text-navy-medium">Founder, Bundele Foundation</div>
            </div>
          </div>
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-navy-very-light overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-12 h-12 text-navy-dark mr-4" />
            <h2 className="text-4xl font-bold text-navy-dark">Join Us on This Journey</h2>
          </div>
          
          <p className="text-xl text-navy-medium mb-12 max-w-3xl mx-auto">
            Support our mission of education and senior empowerment. Together, we can create lasting change and transform lives in our communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open("https://www.paypal.com/donate/?hosted_button_id=3MXBUHN8VQGGJ", "_blank")}
              className="navy-button-primary text-lg px-10 py-4 rounded-md"
            >
              Donate Now
            </button>
            
            <Link href="/contact">
              <button className="border-2 border-navy-medium text-navy-medium text-lg px-10 py-4 rounded-md hover:bg-navy-medium hover:text-white transition-colors">
                Get Involved
              </button>
            </Link>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-16 left-8 w-32 h-32 bg-gray-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-12 w-24 h-24 bg-gray-300 rounded-full opacity-25"></div>
      </section>

      <Footer />
    </div>
  );
}