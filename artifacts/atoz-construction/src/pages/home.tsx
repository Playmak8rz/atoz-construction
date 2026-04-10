import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, HardHat, Building2, MapPin, Hammer, Wrench, FileCheck, PhoneCall, ChevronRight, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
  message: z.string().min(10, "Please provide details"),
});

export default function Home() {
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
      description: "Thank you. Our estimating team will be in touch shortly.",
      variant: "default",
    });
    form.reset();
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Layout>
      <SEO 
        title="Home" 
        description="A to Z Construction - Premier full-service construction company in NYC. From ground-up builds to fine interior finishes." 
      />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="/images/hero.png" 
            alt="Steel frame Manhattan skyline construction" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
            style={{ animationName: 'kenburns' }}
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10 relative text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/50 text-primary font-bold text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Building New York City
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Precision. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Power.</span> <br />
              Performance.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed border-l-4 border-primary pl-6">
              Premier full-service construction for residential and commercial clients across all five boroughs. We don't just build structures; we build the skyline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg rounded-sm uppercase tracking-wide w-full sm:w-auto group">
                <Link href="/contact" data-testid="btn-hero-quote">
                  Request a Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold h-14 px-8 text-lg rounded-sm uppercase tracking-wide w-full sm:w-auto backdrop-blur-sm group">
                <Link href="/projects" data-testid="btn-hero-projects">
                  View Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/50 text-xs font-bold tracking-widest uppercase"
        >
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent mt-2"></div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-6 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-sm md:text-base font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Fully Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" /> 20+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Serving All 5 Boroughs
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
            >
              <motion.div variants={item} className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-primary"></div>
                <h3 className="text-primary font-bold uppercase tracking-widest">The A to Z Standard</h3>
              </motion.div>
              <motion.h2 variants={item} className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 mb-6 leading-none">
                The Contractor Other Contractors Respect
              </motion.h2>
              <motion.p variants={item} className="text-lg text-gray-600 mb-6 leading-relaxed">
                From luxury Manhattan penthouses to Brooklyn brownstone restorations to commercial builds in Queens. We bring unyielding grit, meticulous planning, and architectural precision to every jobsite.
              </motion.p>
              <motion.p variants={item} className="text-lg text-gray-600 mb-8 leading-relaxed">
                When you hire A to Z Construction, you're not just getting builders. You're getting a dedicated partner who understands the complexities of NYC building codes, logistics, and high-end execution.
              </motion.p>
              
              <motion.div variants={item} className="grid grid-cols-2 gap-6 mb-10">
                <div className="border-l-4 border-gray-200 pl-4">
                  <div className="text-4xl font-black text-gray-900 mb-1">500+</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Projects Completed</div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-4xl font-black text-gray-900 mb-1">100%</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Client Satisfaction</div>
                </div>
              </motion.div>

              <motion.div variants={item}>
                <Button asChild variant="outline" className="h-12 px-8 font-bold uppercase tracking-wide rounded-sm border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all">
                  <Link href="/about">Discover Our Story</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 -z-10 rounded-sm"></div>
              <img src="/images/about-team.png" alt="A to Z Construction Team" className="w-full h-auto object-cover rounded-sm shadow-2xl" />
              
              <div className="absolute -bottom-8 -left-8 bg-gray-900 text-white p-8 rounded-sm shadow-xl max-w-xs hidden md:block">
                <FileCheck className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-xl mb-2">Permits & Planning</h4>
                <p className="text-sm text-gray-400">We handle all NYC DOB filings, permits, and architectural expediting.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-1 bg-primary"></div>
              <h3 className="text-primary font-bold uppercase tracking-widest">Our Expertise</h3>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Comprehensive Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              One company. Every trade. We self-perform the critical path elements to control quality, schedule, and cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "General Contracting",
                desc: "End-to-end management for residential and commercial builds. We orchestrate every detail.",
                icon: Building2
              },
              {
                title: "Gut Renovations",
                desc: "Complete interior transformations, structural changes, and modernization of historic properties.",
                icon: Hammer
              },
              {
                title: "Concrete & Masonry",
                desc: "Foundations, structural walls, brickwork, and custom concrete pouring with architectural precision.",
                icon: HardHat
              },
              {
                title: "Fine Interior Finishes",
                desc: "Premium millwork, custom cabinetry, flooring, and luxury bathroom/kitchen remodeling.",
                icon: Wrench
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold uppercase text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <Link href="/services" className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-wider group-hover:text-gray-900 transition-colors">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-gray-900 p-8 rounded-sm shadow-sm md:col-span-2 lg:col-span-2 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              <h4 className="text-2xl font-black uppercase text-white mb-2 relative z-10">Need a specialized service?</h4>
              <p className="text-gray-400 mb-8 max-w-md relative z-10">
                From demolition to framing, painting to roofing. View our full list of trades and capabilities.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold h-12 w-max px-8 rounded-sm uppercase tracking-wide relative z-10">
                <Link href="/services">View All Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-primary"></div>
                <h3 className="text-primary font-bold uppercase tracking-widest">Our Portfolio</h3>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 leading-none">
                Built to Last
              </h2>
            </div>
            <Button asChild variant="outline" className="font-bold uppercase tracking-wide border-2 border-gray-200 hover:border-gray-900 rounded-sm">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
            >
              <img src="/images/project-penthouse.png" alt="Luxury Penthouse" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Manhattan</div>
                <h3 className="text-2xl font-black text-white uppercase">Luxury Penthouse Gut Renovation</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer md:mt-12"
            >
              <img src="/images/project-brownstone.png" alt="Brooklyn Brownstone" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Brooklyn</div>
                <h3 className="text-2xl font-black text-white uppercase">Historic Brownstone Restoration</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
            >
              <img src="/images/project-commercial.png" alt="Commercial Lobby" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Queens</div>
                <h3 className="text-2xl font-black text-white uppercase">Commercial Tower Build-out</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-1 bg-primary"></div>
              <h3 className="text-primary font-bold uppercase tracking-widest">Client Testimonials</h3>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Words From Our Clients
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "A to Z Construction handled our Tribeca gut renovation with absolute precision. Their team navigated the co-op board approvals seamlessly, and the finishing work is flawless. They are the only contractor I will ever use in NYC.",
                author: "Sarah J.",
                title: "Property Owner, Manhattan"
              },
              {
                quote: "We hired A to Z for a commercial build-out in Queens under a very tight deadline. They not only delivered on time but also provided value-engineering options that saved us 15% without compromising the aesthetic.",
                author: "Michael T.",
                title: "Developer, Queens"
              },
              {
                quote: "Restoring a historic brownstone requires a delicate touch and deep structural knowledge. The masonry team at A to Z brought our facade back to its original glory. True craftsmen.",
                author: "David R.",
                title: "Homeowner, Brooklyn"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-gray-600 mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-black uppercase text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-black/80" />
          <img src="/images/hero.png" alt="Background" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
            Ready to break ground?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Schedule a consultation with our estimating team. We provide comprehensive project analysis, realistic timelines, and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-16 px-10 text-lg rounded-sm uppercase tracking-wide">
              <Link href="/contact" data-testid="btn-cta-estimate">Get a Free Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 font-bold h-16 px-10 text-lg rounded-sm uppercase tracking-wide">
              <a href="tel:+12125550199" className="flex items-center gap-2">
                <PhoneCall className="w-5 h-5" /> (212) 555-0199
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-primary"></div>
                <h3 className="text-primary font-bold uppercase tracking-widest">Get Started</h3>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 mb-6">
                Request an Estimate
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form with details about your project, and our estimating team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-gray-900 mb-1">Office Location</h4>
                    <p className="text-gray-600">123 Construction Ave, Suite 400<br/>New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm">
                    <PhoneCall className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-gray-900 mb-1">Phone Number</h4>
                    <p className="text-gray-600">(212) 555-0199</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 md:p-10 rounded-sm border border-gray-200">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-home-contact">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase text-xs text-gray-600">Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-white" data-testid="input-home-name" />
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
                          <FormLabel className="font-bold uppercase text-xs text-gray-600">Phone *</FormLabel>
                          <FormControl>
                            <Input placeholder="(212) 555-0000" {...field} className="bg-white" data-testid="input-home-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase text-xs text-gray-600">Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} className="bg-white" data-testid="input-home-email" />
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
                          <FormLabel className="font-bold uppercase text-xs text-gray-600">Service *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white" data-testid="select-home-service">
                                <SelectValue placeholder="Select service" />
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
                        <FormLabel className="font-bold uppercase text-xs text-gray-600">Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Project details..." 
                            className="bg-white min-h-[120px] resize-y"
                            {...field} 
                            data-testid="input-home-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg rounded-sm uppercase tracking-wide" data-testid="btn-home-submit">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}