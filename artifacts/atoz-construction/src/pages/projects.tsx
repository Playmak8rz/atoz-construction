import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Maximize2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Tribeca Luxury Penthouse",
      category: "Gut Renovation",
      location: "Manhattan, NY",
      image: "/images/project-penthouse.png",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      title: "Park Slope Brownstone",
      category: "Restoration",
      location: "Brooklyn, NY",
      image: "/images/project-brownstone.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      title: "LIC Commercial Tower",
      category: "Commercial Build-out",
      location: "Queens, NY",
      image: "/images/project-commercial.png",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 4,
      title: "Astoria Modern Condos",
      category: "Ground-up Build",
      location: "Queens, NY",
      image: "/images/hero.png",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 5,
      title: "UES Chef's Kitchen",
      category: "Interior Finish",
      location: "Manhattan, NY",
      image: "/images/service-interior.png",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      id: 6,
      title: "Williamsburg Retail Space",
      category: "Commercial Renovation",
      location: "Brooklyn, NY",
      image: "/images/service-concrete.png",
      span: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Portfolio & Projects" 
        description="View A to Z Construction's portfolio of luxury residential and commercial builds across New York City." 
      />

      <section className="pt-32 pb-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
              Our <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-gray-400">
              A curated selection of our finest builds, renovations, and restorations across the five boroughs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-2 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            {projects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative group overflow-hidden rounded-sm cursor-pointer ${project.span}`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="absolute top-6 right-6 w-12 h-12 bg-primary flex items-center justify-center rounded-sm transform translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-primary font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                      {project.category} <span className="w-1 h-1 bg-white/50 rounded-full"></span> {project.location}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black uppercase text-gray-900 mb-6">Impressed? Let's talk.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Bring us your blueprints, your ideas, and your timeline. We'll bring the expertise to make it happen.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 text-lg rounded-sm uppercase tracking-wide group">
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}