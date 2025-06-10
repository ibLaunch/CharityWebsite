import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "home", label: "Home", isSection: false, href: "/" },
    { id: "impact-circle", label: "Impact Circle", isSection: false, href: "/impact-circle" },
    { id: "yoga", label: "Yoga Sessions", isSection: false, href: "/yoga" },
    { id: "contact", label: "Contact", isSection: false, href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-brand-warm-white/95 backdrop-blur-sm z-50 transition-all duration-300 ${
      isScrolled ? "shadow-sm border-b border-brand-beige/30" : "border-b border-brand-beige/20"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-light text-brand-charcoal cursor-pointer hover:opacity-80 transition-opacity tracking-wide">
                Bundele Foundation
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navItems.map((item) => (
                <Link key={item.id} href={item.href || "#"}>
                  <button className="text-brand-charcoal/70 hover:text-brand-charcoal transition-colors px-3 py-2 text-sm font-light tracking-wide">
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-brand-charcoal">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-brand-warm-white">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.id} href={item.href || "#"}>
                      <button className="text-left text-brand-charcoal/70 hover:text-brand-charcoal transition-colors px-3 py-2 text-lg font-light tracking-wide">
                        {item.label}
                      </button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
