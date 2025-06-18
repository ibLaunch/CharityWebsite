import hemantImage from "@assets/Hemant_Bundele_1750101113518.jpg";
import sunitaImage from "@assets/PHOTO-2025-06-18-09-23-25_1750275955128.jpg";

export default function BoardOfDirectorsPage() {
  const boardMembers = [
    {
      name: "Hemant Bundele",
      title: "Founder and Visionary of the Bundele Foundation",
      image: hemantImage,
      description: "Hemant Bundele is a passionate advocate for social impact, driven by a profound commitment to leveraging innovation, education, and community engagement for the greater good. As the visionary Founder of the Bundele Foundation, he has channeled his dedication to youth learning initiatives, compassionate senior care, and robust intergenerational community programs into a powerful force for meaningful change. His leadership is instrumental in strengthening community bonds and fostering a brighter, more connected future.\n\nWith a distinguished career spanning senior management and technical leadership roles at industry giants such as Fannie Mae, Freddie Mac, Raytheon, and AT&T, Hemant brings a unique blend of strategic acumen, entrepreneurial spirit, and deep technological expertise to the philanthropic sector. This rich professional background, coupled with his unwavering commitment to social responsibility, serves as the bedrock upon which the Foundation's impactful initiatives are built and propelled forward."
    },
    {
      name: "Sunita Shirguppi",
      title: "Board Member",
      image: sunitaImage,
      description: "Sunita Shirguppi is a passionate yoga instructor and dedicated Rotarian who firmly believes in selfless service to society. As the former principal of Dr. Kalmadi Shamrao High School in Pune, Maharashtra, she has spent her career nurturing young minds and advocating for quality education.\n\nDeeply aligned with the Bundele Foundation's mission, Sunita is highly motivated to make a lasting impact in the areas of children's education and senior care. She believes that empowering the next generation and honoring the wisdom of the elderly are both essential to building compassionate, resilient communities.\n\nShe views the human body as a divine gift and a sacred responsibility. A strong advocate for Yogabhyas (the practice of yoga), she promotes holistic well-being—physically, mentally, and spiritually.\n\nIn 2015, Sunita pledged to donate her entire body. Her vital organs, including corneas and skin, will be donated to those in need, and the rest will support medical education and research. Her life and choices reflect the values of service, compassion, and lifelong learning that the Bundele Foundation proudly upholds."
    },
    {
      name: "Mahesh Patel",
      title: "Board Member",
      image: null,
      description: "Coming soon"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy-dark text-white py-32">
        <div className="container-minimal text-center">
          <h1 className="text-serif text-6xl font-light mb-8 tracking-tight">
            Board of Directors
          </h1>
          <p className="text-xl text-navy-light font-light max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated leaders who guide the Bundele Foundation's mission to create positive change through education, senior care, and community building.
          </p>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="minimal-section">
        <div className="container-minimal">
          <div className="space-y-24">
            {boardMembers.map((member, index) => (
              <div key={member.name} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {member.image ? (
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square rounded-lg bg-navy-light flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-navy-medium rounded-full mx-auto mb-4"></div>
                        <p className="text-navy-dark font-medium">Photo Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h2 className="text-serif text-4xl font-light text-navy-dark mb-4 tracking-tight">
                    {member.name}
                  </h2>
                  <p className="text-lg text-navy-medium mb-8 font-medium">
                    {member.title}
                  </p>
                  <div className="prose prose-lg max-w-none">
                    {member.description.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed mb-6 font-light">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy-light py-24">
        <div className="container-minimal text-center">
          <h2 className="text-serif text-4xl font-light text-navy-dark mb-8 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-navy-medium mb-12 font-light max-w-2xl mx-auto">
            Have questions about our board or want to learn more about our leadership? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact"
              className="bg-navy-dark text-white px-8 py-4 hover:bg-navy-medium transition-colors font-light tracking-wide"
            >
              Contact Us
            </a>
            <a 
              href="https://chat.whatsapp.com/HTv3KIMTlJlCtBGruoYDTg"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-navy-dark text-navy-dark px-8 py-4 hover:bg-navy-dark hover:text-white transition-colors font-light tracking-wide"
            >
              Join WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}