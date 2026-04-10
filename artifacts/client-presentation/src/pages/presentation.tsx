import { motion, useScroll, useTransform } from "framer-motion";
import { BrowserMockup, AnimatedSection, SectionTitle, ValueCallout } from "@/components/PresentationComponents";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

function Presentation() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="bg-background min-h-screen text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      <section className="min-h-screen relative flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card via-background to-background z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.apply/noise.svg')] opacity-20 mix-blend-overlay z-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <div className="inline-block px-4 py-1.5 border border-primary/30 rounded-full mb-8 bg-primary/10">
              <span className="text-primary text-sm font-medium tracking-wide uppercase">Website Presentation</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-8 leading-[1.1]">
              A to Z<br />
              <span className="text-muted-foreground italic">Construction</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Previewing your new digital presence. A premium, high-conversion website designed for New York City's premier contractor.
            </p>
          </motion.div>
        </div>
        <motion.div style={{ opacity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>
      <AnimatedSection className="bg-card/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <SectionTitle subtitle="01 — The First Impression" title="Commanding Authority" />
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              The hero section is your digital storefront. We designed it to instantly communicate scale, professionalism, and reliability. The dark, cinematic background paired with clear typography ensures your message lands immediately.
            </p>
            <ValueCallout text="Creates a commanding first impression and drives immediate action with 3 strategic CTAs." />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <BrowserMockup src={`${BASE_URL}/screenshots/home-desktop.jpg`} alt="Home Desktop Mockup" />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <BrowserMockup src={`${BASE_URL}/screenshots/services-desktop.jpg`} alt="Services Page Mockup" />
          </div>
          <div className="lg:col-span-5">
            <SectionTitle subtitle="02 — Capabilities" title="Comprehensive Offerings" />
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Clients need to know you can handle their entire project. The services architecture breaks down complex offerings into an easily navigable structure, demonstrating both breadth and depth of expertise.
            </p>
            <ValueCallout text="Positions A to Z as a comprehensive, full-service contractor covering 16+ specialized trades." />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-card/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <SectionTitle subtitle="03 — Portfolio" title="Proof of Excellence" />
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              In construction, seeing is believing. The project gallery is designed to put your best work front and center, using high-resolution imagery and clean grid layouts to let the craftsmanship speak for itself.
            </p>
            <ValueCallout text="Visual proof of quality workmanship builds trust faster than any copy." />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <BrowserMockup src={`${BASE_URL}/screenshots/projects-desktop.jpg`} alt="Projects Page Mockup" />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionTitle subtitle="04 — Responsive Design" title="Flawless on Every Device" />
          <ValueCallout text="60%+ of users browse on mobile — this site delivers the same premium experience on every device." />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <div className="w-full md:w-[60%]">
            <BrowserMockup src={`${BASE_URL}/screenshots/home-desktop.jpg`} alt="Desktop Mockup" />
          </div>
          <div className="w-full md:w-[25%]">
            <BrowserMockup src={`${BASE_URL}/screenshots/home-mobile.jpg`} alt="Mobile Mockup" isMobile />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-card/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <BrowserMockup src={`${BASE_URL}/screenshots/about-desktop.jpg`} alt="About Page Mockup" />
          </div>
          <div className="lg:col-span-5">
            <SectionTitle subtitle="05 — The Story" title="Building Legacy" />
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              People hire people they trust. The About page humanizes the brand, highlighting your history, safety record, and local NYC roots. It transforms a vendor into a partner.
            </p>
            <ValueCallout text="Company story and credentials build the trust needed to win high-value contracts." />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <SectionTitle subtitle="06 — Lead Capture" title="Frictionless Conversion" />
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Traffic is meaningless without conversion. The contact flow is streamlined, professional, and intuitive. Smart service pre-selection helps qualify leads before they even hit your inbox.
            </p>
            <ValueCallout text="Streamlined lead capture with smart service pre-selection reduces friction." />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <BrowserMockup src={`${BASE_URL}/screenshots/contact-mobile.jpg`} alt="Contact Page Mockup" isMobile />
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">The Competitive Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {["Professional first impression", "Strong lead generation", "Mobile-friendly architecture", "NYC local branding", "Trust-building layout", "Premium contractor positioning"].map((point, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-primary-foreground/80 shrink-0" />
                <span className="text-xl font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <section className="min-h-screen py-32 flex items-center justify-center bg-card border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">Ready to Build?</h2>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed mb-16 max-w-3xl mx-auto">
              This website concept is designed to help A to Z Construction attract more leads, build trust faster, and present a stronger brand in New York City.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="h-16 px-10 text-lg rounded-none w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">Approve This Direction</Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-none w-full sm:w-auto group">
                Review Details <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Presentation;