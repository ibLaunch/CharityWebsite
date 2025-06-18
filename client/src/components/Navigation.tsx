import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
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
    { id: "yoga", label: "Wellness", isSection: false, href: "/yoga" },
    { id: "faq", label: "FAQ", isSection: false, href: "/faq" },
    { id: "contact", label: "Contact", isSection: false, href: "/contact" },
  ];

  const aboutUsItems = [
    { label: "Founder", href: "/founders-message" },
    { label: "Board of Directors", href: "/board-of-directors" },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-white z-50 transition-all duration-500 ${
      isScrolled ? "border-b border-gray-200" : ""
    }`}>
      <div className="container-minimal">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="elegant-small text-navy-dark cursor-pointer hover:text-navy-medium transition-colors text-lg">
                Bundele Foundation
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-16">
              {navItems.map((item) => (
                <Link key={item.id} href={item.href || "#"}>
                  <button className="elegant-small text-navy-medium hover:text-navy-dark transition-colors">
                    {item.label}
                  </button>
                </Link>
              ))}
              
              {/* About Us Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="elegant-small text-navy-medium hover:text-navy-dark transition-colors flex items-center gap-1">
                    About Us
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                  {aboutUsItems.map((item) => (
                    <DropdownMenuItem key={item.label} className="p-0">
                      <Link href={item.href} className="w-full">
                        <button className="w-full text-left px-4 py-2 elegant-small text-navy-medium hover:text-navy-dark hover:bg-gray-50 transition-colors">
                          {item.label}
                        </button>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="border-none">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white">
                <div className="flex flex-col space-y-12 mt-24">
                  {navItems.map((item) => (
                    <Link key={item.id} href={item.href || "#"}>
                      <button className="text-left elegant-small text-navy-medium hover:text-navy-dark transition-colors">
                        {item.label}
                      </button>
                    </Link>
                  ))}
                  
                  {/* About Us Section in Mobile */}
                  <div className="flex flex-col space-y-6">
                    <div className="elegant-small text-navy-dark font-medium">About Us</div>
                    {aboutUsItems.map((item) => (
                      <Link key={item.label} href={item.href}>
                        <button className="text-left elegant-small text-navy-medium hover:text-navy-dark transition-colors pl-4">
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
