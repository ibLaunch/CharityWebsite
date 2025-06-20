import { MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import bundeleFoundationLogo from "@assets/bfoundation-logo-5_1750429672590.png";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/impact-circle", label: "Impact Circle" },
    { href: "/yoga", label: "Wellness" },
    { href: "/founders-message", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    {
      href: "https://chat.whatsapp.com/HTv3KIMTlJlCtBGruoYDTg",
      icon: MessageCircle,
      label: "WhatsApp"
    },
    {
      href: "mailto:Impact@BundeleFoundation.org",
      icon: Mail,
      label: "Email"
    },
    {
      href: "tel:703-862-0517",
      icon: Phone,
      label: "Phone"
    }
  ];

  return (
    <footer className="bg-navy-dark text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-24">
          <div>
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <img 
                src={bundeleFoundationLogo}
                alt="Bundele Foundation"
                className="h-12 sm:h-16 lg:h-20 w-auto bg-white rounded-lg p-2"
              />
            </div>
            <p className="text-navy-light leading-relaxed font-light text-sm sm:text-base">
              A 501(c)(3) Nonprofit Organization creating positive change through education support, senior care, and community building. Together, we're making a difference.
            </p>
          </div>
          
          <div>
            <div className="text-xs sm:text-sm font-medium uppercase tracking-wider text-navy-light mb-4 sm:mb-6 lg:mb-8">Navigation</div>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-navy-light">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <button className="hover:text-white transition-colors text-left font-light text-sm sm:text-base">
                      {link.label}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="text-xs sm:text-sm font-medium uppercase tracking-wider text-navy-light mb-4 sm:mb-6 lg:mb-8">Connect</div>
            <div className="flex space-x-4 sm:space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-8 h-8 sm:w-10 sm:h-10 border border-navy-light flex items-center justify-center transition-all hover:border-white hover:bg-white hover:text-navy-dark"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-medium mt-12 sm:mt-16 lg:mt-24 pt-8 sm:pt-12 text-center">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-navy-light">&copy; 2024 Bundele Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
