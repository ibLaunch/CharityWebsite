import { MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/impact-circle", label: "Impact Circle" },
    { href: "/yoga", label: "Yoga Sessions" },
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
    <footer className="bg-black text-white py-20">
      <div className="container-luxury">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-serif text-2xl font-normal mb-6 tracking-tight">Bundele Foundation</h3>
            <p className="text-sans text-gray-400 leading-relaxed">
              Creating positive change through education support, senior care, and community building. Together, we're making a difference.
            </p>
          </div>
          
          <div>
            <h4 className="text-sans text-sm font-medium mb-6 tracking-wide uppercase text-gray-300">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <button className="text-sans hover:text-white transition-colors text-left tracking-wide">
                      {link.label}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sans text-sm font-medium mb-6 tracking-wide uppercase text-gray-300">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center transition-all hover:border-white hover:bg-white hover:text-black"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sans text-gray-500 text-sm tracking-wide">&copy; 2024 Bundele Foundation. All rights reserved. | Creating positive change together.</p>
        </div>
      </div>
    </footer>
  );
}
