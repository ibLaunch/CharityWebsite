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
    <footer className="bg-brand-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-light mb-6 tracking-wide">Bundele Foundation</h3>
            <p className="text-white/70 leading-relaxed font-light">
              Creating positive change through education support, senior care, and community building. Together, we're making a difference.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <button className="hover:text-white transition-colors text-left font-light">
                      {link.label}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-6 tracking-wide">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 rounded-sm bg-brand-accent/20 hover:bg-brand-accent/30 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-accent/20 mt-12 pt-8 text-center text-white/70">
          <p className="font-light">&copy; 2024 Bundele Foundation. All rights reserved. | Creating positive change together.</p>
        </div>
      </div>
    </footer>
  );
}
