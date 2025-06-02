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
      label: "WhatsApp",
      bgColor: "bg-green-500 hover:bg-green-600"
    },
    {
      href: "mailto:Impact@BundeleFoundation.org",
      icon: Mail,
      label: "Email",
      bgColor: "bg-brand-mint hover:bg-emerald-600"
    },
    {
      href: "tel:703-862-0517",
      icon: Phone,
      label: "Phone",
      bgColor: "bg-brand-navy hover:bg-blue-800"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bundele Foundation</h3>
            <p className="text-gray-400 leading-relaxed">
              Creating positive change through education support, senior care, and community building. Together, we're making a difference.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${social.bgColor}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bundele Foundation. All rights reserved. | Creating positive change together.</p>
        </div>
      </div>
    </footer>
  );
}
