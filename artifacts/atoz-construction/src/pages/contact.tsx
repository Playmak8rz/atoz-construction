import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your project"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Request Received",
      description: "Thank you for contacting A to Z Construction. Our estimating team will be in touch shortly.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <Layout>
      <SEO 
        title="Contact Us" 
        description="Get a free estimate from A to Z Construction. Contact our NYC office today." 
      />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Let's <span className="text-primary">Build.</span>
            </h1>
            <p className="text-xl text-gray-600">
              Request a consultation, submit blueprints for an estimate, or reach out with general inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8 bg-gray-900 text-white p-8 md:p-12 rounded-sm shadow-xl"
            >
              <div>
                <h3 className="text-2xl font-black uppercase mb-8">Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-300 uppercase text-sm mb-1">Address</h4>
                      <p className="font-medium">123 Construction Ave<br />Suite 400<br />New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-300 uppercase text-sm mb-1">Phone</h4>
                      <p className="font-medium">(212) 555-0199</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-300 uppercase text-sm mb-1">Email</h4>
                      <p className="font-medium">build@atozconstruction.nyc</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-300 uppercase text-sm mb-1">Hours</h4>
                      <p className="font-medium">Mon - Fri: 7:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3 bg-white p-8 md:p-12 border border-gray-200 rounded-sm shadow-sm"
            >
              <h2 className="text-3xl font-black uppercase text-gray-900 mb-8">Request an Estimate</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase text-xs text-gray-600">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="h-12 border-gray-300 focus:border-primary rounded-sm" data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase text-xs text-gray-600">Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="(212) 555-0000" {...field} className="h-12 border-gray-300 focus:border-primary rounded-sm" data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase text-xs text-gray-600">Email Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" {...field} className="h-12 border-gray-300 focus:border-primary rounded-sm" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase text-xs text-gray-600">Project Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 border-gray-300 focus:border-primary rounded-sm" data-testid="select-service">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Contracting</SelectItem>
                              <SelectItem value="renovation">Gut Renovation</SelectItem>
                              <SelectItem value="masonry">Masonry & Concrete</SelectItem>
                              <SelectItem value="interior">Interior Finishes</SelectItem>
                              <SelectItem value="roofing">Roofing</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold uppercase text-xs text-gray-600">Project Details *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about your project scope, location, and timeline..." 
                            className="min-h-[150px] border-gray-300 focus:border-primary rounded-sm resize-y"
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg rounded-sm uppercase tracking-wide" data-testid="btn-submit-contact">
                    Submit Request
                  </Button>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/basic-v2/256/0/0/0.png')] bg-repeat opacity-50 grayscale mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gray-900 text-white p-6 rounded-sm shadow-2xl flex items-center gap-4 animate-bounce">
            <MapPin className="w-8 h-8 text-primary" />
            <div>
              <div className="font-black uppercase tracking-widest text-sm">NYC Operations</div>
              <div className="text-gray-400 text-sm">Serving all 5 Boroughs</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}