import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
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
    { id: "yoga", label: "Wellness", isSection: false, href: "/yoga" },
  ];

  const navItemsAfterAbout = [
    { id: "faq", label: "FAQ", isSection: false, href: "/faq" },
    { id: "contact", label: "Contact", isSection: false, href: "/contact" },
  ];

  const aboutUsItems = [
    { id: "founders-message", label: "Founder", href: "/founders-message" },
    { id: "board-of-directors", label: "Board of Directors", href: "/board-of-directors" },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-white z-50 transition-all duration-500 ${
      isScrolled ? "border-b border-gray-200" : ""
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-base sm:text-lg lg:text-xl font-bold text-navy-dark cursor-pointer hover:text-navy-medium transition-colors">
                Bundele Foundation
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link key={item.id} href={item.href || "#"}>
                  <button className="text-sm xl:text-base text-navy-medium hover:text-navy-dark transition-colors font-medium">
                    {item.label}
                  </button>
                </Link>
              ))}
              
              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button className="text-sm xl:text-base text-navy-medium hover:text-navy-dark transition-colors flex items-center font-medium">
                  About Us
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                    isAboutDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* Dropdown Menu */}
                {isAboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {aboutUsItems.map((item) => (
                        <Link key={item.id} href={item.href}>
                          <button className="block w-full text-left px-4 py-2 elegant-small text-navy-medium hover:text-navy-dark hover:bg-gray-50 transition-colors">
                            {item.label}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navItemsAfterAbout.map((item) => (
                <Link key={item.id} href={item.href || "#"}>
                  <button className="text-sm xl:text-base text-navy-medium hover:text-navy-dark transition-colors font-medium">
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="border-none p-2">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white w-[280px] sm:w-[320px] p-0">
                <div className="p-6">
                  <div className="text-lg font-bold text-navy-dark mb-8">Menu</div>
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <Link key={item.id} href={item.href || "#"}>
                        <button className="w-full text-left p-3 text-base text-navy-medium hover:text-navy-dark hover:bg-navy-very-light rounded-md transition-colors">
                          {item.label}
                        </button>
                      </Link>
                    ))}
                    
                    {/* About Us Section for Mobile */}
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="text-sm font-medium text-navy-medium mb-3 px-3">About Us</div>
                      <div className="flex flex-col space-y-1">
                        {aboutUsItems.map((item) => (
                          <Link key={item.id} href={item.href}>
                            <button className="w-full text-left pl-6 pr-3 py-3 text-base text-navy-medium hover:text-navy-dark hover:bg-navy-very-light rounded-md transition-colors">
                              {item.label}
                            </button>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {navItemsAfterAbout.map((item) => (
                      <Link key={item.id} href={item.href || "#"}>
                        <button className="w-full text-left p-3 text-base text-navy-medium hover:text-navy-dark hover:bg-navy-very-light rounded-md transition-colors">
                          {item.label}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
