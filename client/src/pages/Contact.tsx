import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react";
import type { InsertContactMessage } from "@shared/schema";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ContactPage() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "Impact@BundeleFoundation.org",
      link: "mailto:Impact@BundeleFoundation.org"
    },
    {
      icon: Phone,
      title: "Phone", 
      info: "703-862-0517",
      link: "tel:703-862-0517"
    },
    {
      icon: MapPin,
      title: "Address",
      info: "43756 Welty CT\nAshburn, VA 20147",
      link: "https://maps.google.com/?q=43756+Welty+CT+Ashburn+VA+20147"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-brand-beige">
        <div className="container-luxury">
          <div className="text-center">
            <Link href="/">
              <button className="luxury-button-outline mb-12">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </button>
            </Link>
            <h1 className="text-serif text-5xl md:text-7xl font-normal text-black mb-8 tracking-tight">Contact Us</h1>
            <p className="text-sans text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Get in touch with us for any questions about our programs, volunteering opportunities, or how you can make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="text-serif text-3xl font-medium text-black mb-8 tracking-tight">Get in Touch</h2>
              <p className="text-sans text-gray-700 mb-16 leading-relaxed">
                Whether you're interested in joining our Impact Circle, attending yoga classes, or learning more about our community programs, we're here to help. Reach out to us using any of the methods below.
              </p>
              
              <div className="space-y-10">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sans font-medium mb-2 tracking-wide uppercase text-sm text-gray-600">{item.title}</h3>
                        <a 
                          href={item.link}
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sans text-gray-800 hover:text-black transition-colors whitespace-pre-line text-lg"
                        >
                          {item.info}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-16">
                <h3 className="text-serif text-2xl font-medium text-black mb-8 tracking-tight">Quick Actions</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => window.open("https://chat.whatsapp.com/HTv3KIMTlJlCtBGruoYDTg", "_blank")}
                    className="luxury-button-outline w-full"
                  >
                    Join Our WhatsApp Group
                  </button>
                  
                  <button
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform?usp=header", "_blank")}
                    className="luxury-button w-full"
                  >
                    Set Up Impact Circle Donations
                  </button>
                  
                  <button
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdAyE2hC6OAAEKo2Abu477TbnFHcLJCTEAuSuNBChwhJAt14A/viewform?usp=header", "_blank")}
                    className="luxury-button-outline w-full"
                  >
                    Sign Up for Yoga Classes
                  </button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="luxury-card order-1 lg:order-2">
              <div className="p-12">
                <h3 className="text-serif text-2xl font-medium text-black mb-8 tracking-tight">Send us a Message</h3>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sans text-sm font-medium text-gray-700 mb-3 block tracking-wide uppercase">Name *</Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      placeholder="Your full name"
                      className="w-full border-gray-300 rounded-none focus:border-black focus:ring-0"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-2">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sans text-sm font-medium text-gray-700 mb-3 block tracking-wide uppercase">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="your.email@example.com"
                      className="w-full border-gray-300 rounded-none focus:border-black focus:ring-0"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-2">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sans text-sm font-medium text-gray-700 mb-3 block tracking-wide uppercase">Subject *</Label>
                    <Select onValueChange={(value) => form.setValue("subject", value)}>
                      <SelectTrigger className="w-full border-gray-300 rounded-none focus:border-black focus:ring-0">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Yoga Classes">Yoga Classes</SelectItem>
                        <SelectItem value="Impact Circle">Impact Circle</SelectItem>
                        <SelectItem value="Donations">Donations</SelectItem>
                        <SelectItem value="Volunteer Opportunities">Volunteer Opportunities</SelectItem>
                        <SelectItem value="Partnerships">Partnerships</SelectItem>
                        <SelectItem value="Media Inquiry">Media Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.subject && (
                      <p className="text-red-500 text-sm mt-2">{form.formState.errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sans text-sm font-medium text-gray-700 mb-3 block tracking-wide uppercase">Message *</Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full border-gray-300 rounded-none focus:border-black focus:ring-0"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-2">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="luxury-button w-full mt-8"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle background circles */}
        <div className="absolute top-10 right-8 w-32 h-32 bg-gray-100 rounded-full opacity-[0.04]"></div>
        <div className="absolute bottom-16 left-8 w-36 h-36 bg-gray-200 rounded-full opacity-[0.03]"></div>
        <div className="absolute top-1/2 right-4 w-24 h-24 bg-gray-100 rounded-full opacity-[0.05]"></div>
        <div className="absolute top-1/3 left-4 w-28 h-28 bg-gray-200 rounded-full opacity-[0.04]"></div>
      </section>

      <Footer />
    </div>
  );
}