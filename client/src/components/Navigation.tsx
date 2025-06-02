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
    { id: "home", label: "Home", isSection: true },
    { id: "impact-circle", label: "Impact Circle", isSection: true },
    { id: "yoga", label: "Yoga Sessions", isSection: true },
    { id: "contact", label: "Contact", isSection: false, href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${
      isScrolled ? "shadow-lg" : "shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-bold brand-navy cursor-pointer hover:opacity-80 transition-opacity">
                Bundele Foundation
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.isSection ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link key={item.id} href={item.href || "#"}>
                    <button className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                      {item.label}
                    </button>
                  </Link>
                )
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    item.isSection ? (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-lg font-medium"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link key={item.id} href={item.href || "#"}>
                        <button className="text-left text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-lg font-medium">
                          {item.label}
                        </button>
                      </Link>
                    )
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
