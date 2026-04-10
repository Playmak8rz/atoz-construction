import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BrowserMockupProps {
  src: string;
  alt: string;
  className?: string;
  isMobile?: boolean;
}

export function BrowserMockup({ src, alt, className = "", isMobile = false }: BrowserMockupProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-xl overflow-hidden border border-border shadow-2xl bg-card ${className} ${isMobile ? "max-w-[320px] mx-auto aspect-[9/19]" : "w-full aspect-[16/10]"}`}
    >
      {!isMobile && (
        <div className="h-10 border-b border-border bg-muted flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="mx-auto w-1/2 h-5 rounded-md bg-background border border-border flex items-center justify-center text-[10px] text-muted-foreground">
            atozconstructionnyc.com
          </div>
        </div>
      )}
      {isMobile && (
        <div className="h-7 bg-muted border-b border-border flex items-center justify-center rounded-t-xl px-4 relative">
          <div className="w-1/3 h-4 bg-background rounded-full absolute top-0" />
        </div>
      )}
      <div className="w-full h-full relative overflow-hidden bg-muted">
        <img 
          src={src} 
          alt={alt} 
          className="w-full object-cover object-top absolute inset-0"
        />
      </div>
    </motion.div>
  );
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className={`min-h-screen py-24 flex items-center ${className}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {children}
      </div>
    </motion.section>
  );
}

export function SectionTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-16">
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-primary font-semibold tracking-wider uppercase text-sm mb-3"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground font-bold leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}

export function ValueCallout({ text }: { text: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-8 border-l-2 border-primary pl-6 py-2"
    >
      <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}