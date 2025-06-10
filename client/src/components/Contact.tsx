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
import { Mail, Phone, MapPin, Send } from "lucide-react";
import type { InsertContactMessage } from "@shared/schema";

export default function Contact() {
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
    <section id="contact" className="section-padding bg-white">
      <div className="container-luxury">
        <div className="text-center mb-20">
          <h2 className="text-serif text-4xl md:text-5xl font-normal text-black mb-8 tracking-tight">Contact Us</h2>
          <div className="w-16 h-px bg-black mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-serif text-2xl font-medium text-black mb-12 tracking-tight">Get in Touch</h3>
            
            <div className="space-y-8">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sans font-medium mb-2 tracking-wide uppercase text-sm text-gray-600">{item.title}</h4>
                      <a 
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sans text-gray-800 hover:text-black transition-colors whitespace-pre-line"
                      >
                        {item.info}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="luxury-card order-1 lg:order-2">
            <div className="p-12">
              <h3 className="text-serif text-2xl font-medium text-black mb-8 tracking-tight">Send us a Message</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sans text-sm font-medium text-gray-700 mb-3 block tracking-wide uppercase">Name</Label>
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
                  <Label htmlFor="email" className="text-sans text-sm font-medium text-gray-700 mb-3 block tracking-wide uppercase">Email</Label>
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
                  <Label htmlFor="subject" className="text-sans text-sm font-medium text-gray-700 mb-3 block tracking-wide uppercase">Subject</Label>
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
                    </SelectContent>
                  </Select>
                  {form.formState.errors.subject && (
                    <p className="text-red-500 text-sm mt-2">{form.formState.errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sans text-sm font-medium text-gray-700 mb-3 block tracking-wide uppercase">Message</Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    rows={4}
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
    </section>
  );
}
