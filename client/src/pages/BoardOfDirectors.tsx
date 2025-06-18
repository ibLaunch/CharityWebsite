import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function BoardOfDirectorsPage() {
  const boardMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Board Chair",
      bio: "With over 20 years of experience in nonprofit management and community development, Dr. Johnson brings invaluable leadership to our mission of intergenerational wellness.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Michael Chen",
      title: "Vice Chair",
      bio: "A seasoned business executive with expertise in strategic planning and organizational growth, Michael has dedicated his career to supporting community-focused initiatives.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Maria Rodriguez",
      title: "Secretary",
      bio: "An advocate for youth empowerment and senior care, Maria brings grassroots organizing experience and deep community connections to the board.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "James Thompson",
      title: "Treasurer",
      bio: "With extensive experience in financial management and nonprofit accounting, James ensures our resources are effectively allocated to maximize community impact.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Dr. Angela Kim",
      title: "Board Member",
      bio: "A healthcare professional specializing in geriatric care, Dr. Kim provides critical insights into wellness programming for our senior community members.",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Robert Williams",
      title: "Board Member",
      bio: "An education administrator with a passion for intergenerational learning, Robert helps design programs that bridge generational gaps through shared experiences.",
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-very-light overflow-hidden">
        <div className="container-luxury">
          <div className="text-center">
            <Link href="/">
              <button className="luxury-button-outline mb-12">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </button>
            </Link>
            <h1 className="text-serif text-5xl md:text-7xl font-normal text-navy-dark mb-8 tracking-tight">
              Board of Directors
            </h1>
            <p className="text-sans text-lg text-navy-dark max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated leaders who guide our mission of building stronger communities through youth empowerment, senior care, and intergenerational programs.
            </p>
          </div>
        </div>
        
        {/* Background circles */}
        <div className="absolute top-16 left-8 w-28 h-28 bg-gray-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-12 right-12 w-36 h-36 bg-gray-300 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-6 w-20 h-20 bg-gray-100 rounded-full opacity-35"></div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 bg-white">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {boardMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo Coming Soon</span>
                  </div>
                </div>
                <h3 className="text-serif text-2xl font-normal text-navy-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-mint font-medium mb-4 uppercase tracking-wider text-sm">
                  {member.title}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-navy-very-light">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-serif text-4xl md:text-5xl font-normal text-navy-dark mb-8">
              Our Commitment
            </h2>
            <p className="text-sans text-lg text-navy-dark leading-relaxed mb-8">
              Our Board of Directors is committed to transparent governance, strategic oversight, and ensuring that every decision we make serves our mission of creating meaningful connections across generations. Together, we work to build a stronger, more compassionate community where everyone has the opportunity to thrive.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-mint rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h3 className="text-serif text-xl font-normal text-navy-dark mb-2">Transparency</h3>
                <p className="text-gray-600 text-sm">Open communication and accountability in all our operations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-mint rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <h3 className="text-serif text-xl font-normal text-navy-dark mb-2">Impact</h3>
                <p className="text-gray-600 text-sm">Measurable outcomes that strengthen our community</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-mint rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <h3 className="text-serif text-xl font-normal text-navy-dark mb-2">Community</h3>
                <p className="text-gray-600 text-sm">Centering the voices and needs of those we serve</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}