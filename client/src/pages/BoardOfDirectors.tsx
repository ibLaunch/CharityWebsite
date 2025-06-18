import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import hemantBundelePhoto from "@assets/Hemant_Bundele_1750101113518.jpg";
import sunitaShirguppiPhoto from "@assets/Screen Shot 2025-06-18 at 4.19.57 PM_1750278002298.png";

export default function BoardOfDirectorsPage() {
  const boardMembers = [
    {
      name: "Hemant Bundele",
      title: "Founder and Visionary",
      bio: "Hemant Bundele is a passionate advocate for social impact, driven by a profound commitment to leveraging innovation, education, and community engagement for the greater good. As the visionary Founder of the Bundele Foundation, he has channeled his dedication to youth learning initiatives, compassionate senior care, and robust intergenerational community programs into a powerful force for meaningful change. His leadership is instrumental in strengthening community bonds and fostering a brighter, more connected future. With a distinguished career spanning senior management and technical leadership roles at industry giants such as Fannie Mae, Freddie Mac, Raytheon, and AT&T, Hemant brings a unique blend of strategic acumen, entrepreneurial spirit, and deep technological expertise to the philanthropic sector. This rich professional background, coupled with his unwavering commitment to social responsibility, serves as the bedrock upon which the Foundation's impactful initiatives are built and propelled forward.",
      image: hemantBundelePhoto,
      hasImage: true
    },
    {
      name: "Sunita Shirguppi",
      title: "Board Member",
      bio: "Sunita Shirguppi is a passionate yoga instructor and dedicated Rotarian who firmly believes in selfless service to society. As the former principal of Dr. Kalmadi Shamrao High School in Pune, Maharashtra, she has spent her career nurturing young minds and advocating for quality education. Deeply aligned with the Bundele Foundation's mission, Sunita is highly motivated to make a lasting impact in the areas of children's education and senior care. She believes that empowering the next generation and honoring the wisdom of the elderly are both essential to building compassionate, resilient communities. She views the human body as a divine gift and a sacred responsibility. A strong advocate for Yogabhyas (the practice of yoga), she promotes holistic well-being—physically, mentally, and spiritually. In 2015, Sunita pledged to donate her entire body. Her vital organs, including corneas and skin, will be donated to those in need, and the rest will support medical education and research. Her life and choices reflect the values of service, compassion, and lifelong learning that the Bundele Foundation proudly upholds.",
      image: sunitaShirguppiPhoto,
      hasImage: true
    },
    {
      name: "Mahesh Patel",
      title: "Board Member",
      bio: "Information coming soon.",
      image: "/api/placeholder/200/200",
      hasImage: false
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
          {/* Hemant Bundele - Featured First */}
          <div className="mb-32">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-serif text-4xl font-normal text-navy-dark mb-4">
                    {boardMembers[0].name}
                  </h3>
                  <p className="text-brand-mint font-medium mb-6 uppercase tracking-wider text-lg">
                    {boardMembers[0].title}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {boardMembers[0].bio}
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="w-full rounded-2xl shadow-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                      <img 
                        src={boardMembers[0].image}
                        alt={`${boardMembers[0].name}, ${boardMembers[0].title}`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sunita Shirguppi - Featured Second */}
          <div className="mb-32">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-2">
                  <h3 className="text-serif text-4xl font-normal text-navy-dark mb-4">
                    {boardMembers[1].name}
                  </h3>
                  <p className="text-brand-mint font-medium mb-6 uppercase tracking-wider text-lg">
                    {boardMembers[1].title}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {boardMembers[1].bio}
                  </p>
                </div>
                <div className="order-1 lg:order-1">
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="w-full rounded-2xl shadow-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                      <img 
                        src={boardMembers[1].image}
                        alt={`${boardMembers[1].name}, ${boardMembers[1].title}`}
                        className="w-full h-full object-cover scale-110"
                        style={{ objectPosition: '50% 40%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mahesh Patel - Featured Third */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-serif text-4xl font-normal text-navy-dark mb-4">
                    {boardMembers[2].name}
                  </h3>
                  <p className="text-brand-mint font-medium mb-6 uppercase tracking-wider text-lg">
                    {boardMembers[2].title}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {boardMembers[2].bio}
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative w-full max-w-md mx-auto">
                    {boardMembers[2].hasImage ? (
                      <img 
                        src={boardMembers[2].image}
                        alt={`${boardMembers[2].name}, ${boardMembers[2].title}`}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    ) : (
                      <div className="w-full bg-gray-200 rounded-2xl shadow-2xl flex items-center justify-center" style={{ aspectRatio: '3/4' }}>
                        <span className="text-gray-500 text-lg">Photo Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
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