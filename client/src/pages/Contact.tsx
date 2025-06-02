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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with us for any questions about our programs, volunteering opportunities, or how you can make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Whether you're interested in joining our Impact Circle, attending yoga classes, or learning more about our community programs, we're here to help. Reach out to us using any of the methods below.
              </p>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-brand-mint rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <a 
                              href={item.link}
                              target={item.link.startsWith("http") ? "_blank" : undefined}
                              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-gray-600 hover:text-brand-navy transition-colors whitespace-pre-line text-lg"
                            >
                              {item.info}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Button
                    onClick={() => window.open("https://chat.whatsapp.com/HTv3KIMTlJlCtBGruoYDTg", "_blank")}
                    className="w-full bg-green-500 text-white py-4 px-6 h-auto hover:bg-green-600 transition-colors"
                  >
                    Join Our WhatsApp Group
                  </Button>
                  
                  <Button
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf8taKXNdCtSBjq5iOiAJC6-FmG26razCM1qoG6BoCV75r7Mw/viewform?usp=header", "_blank")}
                    className="w-full bg-brand-navy text-white py-4 px-6 h-auto hover:bg-blue-800 transition-colors"
                  >
                    Set Up Impact Circle Donations
                  </Button>
                  
                  <Button
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdAyE2hC6OAAEKo2Abu477TbnFHcLJCTEAuSuNBChwhJAt14A/viewform?usp=header", "_blank")}
                    className="w-full bg-brand-mint text-white py-4 px-6 h-auto hover:bg-emerald-600 transition-colors"
                  >
                    Sign Up for Yoga Classes
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold brand-navy mb-6">Send us a Message</h3>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">Name *</Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      placeholder="Your full name"
                      className="w-full"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">Subject *</Label>
                    <Select onValueChange={(value) => form.setValue("subject", value)}>
                      <SelectTrigger className="w-full">
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
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">Message *</Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-brand-navy text-white py-3 px-6 h-auto hover:bg-blue-800 transition-colors"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}