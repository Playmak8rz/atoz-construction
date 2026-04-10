import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "general",
      title: "General Contracting",
      desc: "Full-scale project management from pre-construction to final walkthrough. We coordinate scheduling, materials, permits, and trades to ensure flawless execution.",
      image: "/images/hero.png",
      features: ["Site Logistics", "Budget Management", "Subcontractor Coordination", "DOB Compliance"]
    },
    {
      id: "renovations",
      title: "Gut Renovations",
      desc: "Transforming outdated spaces into modern masterpieces. We handle structural modifications, complete teardowns, and full interior rebuilds for both residential and commercial properties.",
      image: "/images/project-penthouse.png",
      features: ["Structural Changes", "MEP Updates", "Floor Plan Redesign", "Historic Restoration"]
    },
    {
      id: "masonry",
      title: "Masonry & Concrete",
      desc: "Expert block, brick, and stone work. From structural foundations to decorative facades, our masonry team delivers precision that stands the test of time.",
      image: "/images/service-masonry.png",
      features: ["Brick Pointing", "Foundation Pouring", "Retaining Walls", "Stucco Work"]
    },
    {
      id: "interior",
      title: "Fine Interior Finishes",
      desc: "The details that define luxury. Our finishing carpenters and tradesmen install premium materials with zero-tolerance for imperfection.",
      image: "/images/service-interior.png",
      features: ["Custom Millwork", "Hardwood Flooring", "Luxury Tile", "High-end Painting"]
    },
    {
      id: "exterior",
      title: "Roofing & Exterior",
      desc: "Protecting your investment from the harsh NYC elements. We install and repair all types of roofing systems and exterior cladding.",
      image: "/images/project-brownstone.png",
      features: ["Flat Roofing", "Waterproofing", "Siding Installation", "Window Replacement"]
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Our Services" 
        description="Comprehensive construction services in NYC. General contracting, renovations, masonry, and interior finishes." 
      />

      {/* Header */}
      <section className="pt-32 pb-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-primary"></div>
              <h3 className="text-primary font-bold uppercase tracking-widest">Capabilities</h3>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-primary pl-6">
              A to Z Construction operates as a self-performing general contractor. By keeping critical trades in-house, we maintain absolute control over the quality, schedule, and cost of every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 border-8 border-white/10 m-4 rounded-sm pointer-events-none"></div>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="text-primary font-black text-6xl opacity-20 mb-4 tracking-tighter">0{index + 1}</div>
                  <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-800 font-bold">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="bg-gray-900 hover:bg-primary text-white font-bold uppercase tracking-wide rounded-sm group">
                    <Link href={`/contact?service=${service.id}`}>
                      Discuss Your Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Don't see your specific need?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our capabilities are extensive. Contact our team to discuss your specialized requirements.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-bold text-lg rounded-sm uppercase tracking-wide px-10">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}