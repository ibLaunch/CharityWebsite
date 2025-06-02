import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Mail, Sparkles } from "lucide-react";

export default function ImpactCircle() {
  return (
    <section id="impact-circle" className="py-20 bg-brand-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Impact Circle</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">About the Impact Circle</h3>
            <p className="text-xl leading-relaxed mb-8">
              Join our mission to amplify social impact by contributing a minimum of $5 on your birthday, your loved ones' birthdays, anniversaries, or any day that holds special meaning to you.
            </p>
            
            <Card className="bg-white bg-opacity-20 border-0 rounded-xl mb-8">
              <CardContent className="p-6">
                <h4 className="text-2xl font-bold mb-4 flex items-center">
                  <Sparkles className="mr-2 h-6 w-6" />
                  Donation Matching
                </h4>
                <p className="text-lg leading-relaxed">
                  For every dollar you donate, Bundele Foundation pledges to match it, doubling the power of your generosity. 100% of your donation is directly channeled to support the most pressing projects in the world.
                </p>
              </CardContent>
            </Card>
            
            <p className="text-xl font-semibold">Together, we're turning celebrations into acts of kindness!</p>
          </div>
          
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold brand-navy mb-6 text-center">Get Started Today</h3>
              
              <div className="space-y-4">
                <Button
                  onClick={() => window.open("https://chat.whatsapp.com/HTv3KIMTlJlCtBGruoYDTg", "_blank")}
                  className="w-full bg-green-500 text-white py-4 px-6 h-auto hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Join WhatsApp Group
                </Button>
                
                <Button
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform?usp=header", "_blank")}
                  className="w-full bg-brand-navy text-white py-4 px-6 h-auto hover:bg-blue-800 transition-colors"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Set Donation Dates
                </Button>
                
                <Button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      const offsetTop = element.offsetTop - 80;
                      window.scrollTo({ top: offsetTop, behavior: "smooth" });
                    }
                  }}
                  variant="outline"
                  className="w-full py-4 px-6 h-auto hover:bg-gray-50 transition-colors"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
