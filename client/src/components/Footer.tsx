import { MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/impact-circle", label: "Impact Circle" },
    { href: "/yoga", label: "Wellness" },
    { href: "/founders-message", label: "Founder's Message" },
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
    <footer className="bg-navy-dark text-white minimal-section">
      <div className="container-minimal">
        <div className="grid md:grid-cols-3 gap-24">
          <div>
            <h3 className="text-serif text-3xl font-light mb-8 tracking-tight text-navy-light">Bundele Foundation</h3>
            <p className="text-navy-light leading-relaxed font-light">
              Creating positive change through education support, senior care, and community building. Together, we're making a difference.
            </p>
          </div>
          
          <div>
            <div className="elegant-small text-navy-light mb-8">Navigation</div>
            <ul className="space-y-4 text-navy-light">
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
            <div className="elegant-small text-navy-light mb-8">Connect</div>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 border border-navy-light flex items-center justify-center transition-all hover:border-white hover:bg-white hover:text-navy-dark"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-medium mt-24 pt-12 text-center">
          <p className="elegant-small text-navy-light">&copy; 2024 Bundele Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
