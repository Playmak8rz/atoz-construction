import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Building2, Hammer, HardHat, Wrench, PaintBucket, Layers, Home, Bath, UtensilsCrossed, Fence, Ruler, Trash2, LayoutGrid, BrickWall, ClipboardCheck } from "lucide-react";

export default function Services() {
  const majorServices = [
    {
      id: "general",
      title: "General Contracting",
      desc: "Full-scale project management from pre-construction to final walkthrough. We coordinate scheduling, materials, permits, and trades to ensure flawless execution.",
      image: "/images/hero.png",
      features: ["Site Logistics", "Budget Management", "Subcontractor Coordination", "DOB Compliance"]
    },
    {
      id: "renovations",
      title: "Renovations & Remodeling",
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
      id: "roofing",
      title: "Roofing",
      desc: "Complete roofing solutions for flat, pitched, and specialty roof systems. We install, repair, and maintain commercial and residential roofs across NYC.",
      image: "/images/project-brownstone.png",
      features: ["Flat Roofing", "Shingle Installation", "Roof Repairs", "Waterproofing"]
    },
    {
      id: "kitchen",
      title: "Kitchen Remodeling",
      desc: "Custom kitchen renovations from layout design to final installation. Premium cabinetry, countertops, appliance integration, and luxury finishes.",
      image: "/images/service-interior.png",
      features: ["Custom Cabinetry", "Countertop Installation", "Appliance Integration", "Lighting Design"]
    },
    {
      id: "bathroom",
      title: "Bathroom Remodeling",
      desc: "Luxurious bathroom transformations featuring custom tile work, premium fixtures, heated flooring, and spa-inspired design.",
      image: "/images/project-penthouse.png",
      features: ["Custom Tile", "Premium Fixtures", "Heated Floors", "Walk-in Showers"]
    },
  ];

  const additionalServices = [
    { id: "demolition", title: "Demolition", desc: "Safe, efficient interior and exterior demolition for residential and commercial projects. Full debris removal and site cleanup.", icon: Trash2 },
    { id: "painting", title: "Painting", desc: "Professional interior and exterior painting services. Premium prep work, coatings, and finishes for lasting results.", icon: PaintBucket },
    { id: "drywall", title: "Drywall", desc: "Expert drywall installation, taping, and finishing. Seamless walls and ceilings with flawless Level 5 finishes.", icon: Layers },
    { id: "flooring", title: "Flooring", desc: "Hardwood, tile, marble, epoxy, and engineered flooring installation. Precision subfloor preparation and expert craftsmanship.", icon: LayoutGrid },
    { id: "framing", title: "Framing", desc: "Structural and non-structural framing for new construction and renovations. Metal and wood stud framing to spec.", icon: Ruler },
    { id: "exterior", title: "Exterior Work", desc: "Siding, facades, window installation, waterproofing, and exterior restoration. Protecting NYC buildings from the elements.", icon: Fence },
    { id: "concrete", title: "Concrete Work", desc: "Foundations, slabs, sidewalks, retaining walls, and decorative concrete. Expert forming, pouring, and finishing.", icon: BrickWall },
    { id: "project-management", title: "Project Management", desc: "End-to-end construction management including scheduling, budgeting, permitting, inspections, and quality control.", icon: ClipboardCheck },
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

      {/* Major Services List */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24 md:space-y-32">
            {majorServices.map((service, index) => (
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
                    <Link href={`/contact?service=${service.id}`} data-testid={`btn-service-${service.id}`}>
                      Discuss Your Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-1 bg-primary"></div>
              <h3 className="text-primary font-bold uppercase tracking-widest">Additional Trades</h3>
              <div className="w-12 h-1 bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 mb-6">
              Complete Trade Coverage
            </h2>
            <p className="text-lg text-gray-600">
              Every trade you need under one roof. Our in-house teams and trusted partners cover every aspect of your build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-white p-6 rounded-sm border border-gray-200 hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold uppercase text-gray-900 mb-2" data-testid={`text-service-${service.id}`}>{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                <Link href={`/contact?service=${service.id}`} className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-wider hover:text-gray-900 transition-colors" data-testid={`btn-service-${service.id}`}>
                  Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            From demolition to final finishes, we handle every phase. Contact us for a free estimate.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-bold text-lg rounded-sm uppercase tracking-wide px-10">
            <Link href="/contact" data-testid="btn-services-cta">Get a Free Estimate</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}