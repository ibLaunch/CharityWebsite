import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, CreditCard, Calendar, CheckCircle, MessageCircle, Heart, Users, Globe, Receipt, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      icon: CreditCard,
      question: "How do I set up recurring donations?",
      answer: "After joining the Impact Circle, you'll receive a link to a form where you can select your meaningful dates. We'll send reminders through WhatsApp, and you can donate via PayPal each time. We make it easy to stay consistent—even without automatic payments."
    },
    {
      icon: Calendar,
      question: "Can I change my meaningful giving dates later?",
      answer: "Yes! You can update your dates anytime. Just fill out the form again or send us a message through the WhatsApp group, and we'll adjust it for you."
    },
    {
      icon: CheckCircle,
      question: "How will I know my donation has been matched?",
      answer: "You'll receive a confirmation directly through WhatsApp or email once your donation has been received and matched. We'll also periodically update the group with project highlights funded through your contributions."
    },
    {
      icon: MessageCircle,
      question: "How do I join the WhatsApp group?",
      answer: "Click the \"Join WhatsApp Group\" button on our website or on the Impact Circle section. It's where we share updates, reminders, and exclusive stories from the communities you're helping."
    },
    {
      icon: Heart,
      question: "Do I need to participate in Impact Circle or Bundele Wellness to donate?",
      answer: "Not at all. Donations are open to everyone. While Bundele Wellness and Impact Circle are unique ways to get involved, you can support the foundation directly through one-time or occasional contributions—no memberships or programs required."
    },
    {
      icon: Users,
      question: "How does Bundele Foundation choose which schools or communities to support?",
      answer: "We prioritize underserved areas where basic educational or senior care infrastructure is lacking. Local partnerships and community assessments guide every project to ensure real, sustainable impact. If you know of a community in need or have an idea for a future initiative, we'd love to hear from you—please reach out through our contact page or send us a message in the WhatsApp group."
    },
    {
      icon: Globe,
      question: "I want to help seniors, but I'm not based in India. How can I get involved?",
      answer: "There are many ways! You can donate to help fund technology workshops and wellness sessions, or volunteer virtually through digital literacy mentorships. Just contact us through the website and we'll help you find the best fit."
    },
    {
      icon: CheckCircle,
      question: "Is Bundele Foundation a registered nonprofit?",
      answer: "Yes. We are officially registered and operate transparently with all funds going directly to community programs. Our 100% direct impact promise ensures your donations are used for real, visible change."
    },
    {
      icon: Receipt,
      question: "Can I get a receipt or proof of donation for tax purposes?",
      answer: "Yes. We provide official donation receipts at the end of each calendar year for all donors. If you need one sooner, just let us know by contacting us through the website or in the WhatsApp group."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-very-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/">
              <button className="mb-8 inline-flex items-center px-6 py-3 border-2 border-navy-medium text-navy-medium hover:bg-navy-medium hover:text-white transition-colors rounded-md">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </button>
            </Link>
            
            <div className="space-y-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-navy-medium rounded-full flex items-center justify-center mr-4">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-navy-dark">
                  Frequently Asked Questions
                </h1>
              </div>
              
              <p className="text-xl text-navy-medium max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about donations, programs, and how you can make a difference with Bundele Foundation.
              </p>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-8 w-32 h-32 bg-navy-very-light rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-12 w-24 h-24 bg-navy-light rounded-full opacity-25"></div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <Card key={index} className="bg-white border border-navy-light shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-navy-very-light rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-navy-medium stroke-2" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy-dark mb-4 leading-tight">
                          {faq.question}
                        </h3>
                        <p className="text-navy-dark leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Contact CTA */}
          <div className="mt-16 text-center bg-navy-very-light p-8 rounded-lg border border-navy-light">
            <h3 className="text-2xl font-bold text-navy-dark mb-4">Still have questions?</h3>
            <p className="text-navy-medium mb-6">
              We're here to help! Reach out to us through any of our contact methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-navy-dark hover:bg-navy-hover text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
                  Contact Us
                </button>
              </Link>
              <button
                onClick={() => window.open("https://chat.whatsapp.com/HTv3KIMTlJlCtBGruoYDTg", "_blank")}
                className="border-2 border-navy-medium text-navy-medium hover:bg-navy-medium hover:text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
              >
                Join WhatsApp Group
              </button>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 right-8 w-28 h-28 bg-gray-100 rounded-full opacity-25"></div>
        <div className="absolute bottom-20 left-12 w-32 h-32 bg-gray-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-4 w-24 h-24 bg-gray-100 rounded-full opacity-30"></div>
      </section>

      <Footer />
    </div>
  );
}