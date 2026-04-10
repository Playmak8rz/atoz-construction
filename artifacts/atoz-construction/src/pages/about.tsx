import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { HardHat, Shield, Target, Trophy, Clock, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Uncompromising Quality",
      desc: "We don't cut corners. Every joint, every seam, every structural element is executed to perfection.",
      icon: Trophy
    },
    {
      title: "Safety First",
      desc: "A clean site is a safe site. We enforce rigorous safety protocols that exceed OSHA standards.",
      icon: Shield
    },
    {
      title: "Timeline Precision",
      desc: "In NYC, time is money. Our project management methodology ensures we hit our milestones.",
      icon: Clock
    },
    {
      title: "Transparent Communication",
      desc: "No surprises. We provide weekly detailed reports, photo updates, and clear budget tracking.",
      icon: Target
    }
  ];

  return (
    <Layout>
      <SEO 
        title="About Us" 
        description="Learn about A to Z Construction's history, mission, and the expert team building NYC's future." 
      />

      {/* Header */}
      <section className="pt-32 pb-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/about-team.png" alt="Background" className="w-full h-full object-cover object-top grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-primary"></div>
              <h3 className="text-primary font-bold uppercase tracking-widest">Our Story</h3>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
              Built on <br /><span className="text-primary">Reputation.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over two decades, A to Z Construction has been the quiet force behind some of New York City's most demanding residential and commercial projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-black uppercase text-gray-900">Forged in the Five Boroughs</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Building in New York City is not for the faint of heart. It requires an intimate understanding of complex logistics, stringent building codes, and demanding timelines. We started as a small framing crew in Queens and grew into a premier full-service general contracting firm through sheer will and exceptional craftsmanship.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that a construction company is only as good as its last job. That's why we approach every project—whether it's a $50K bathroom remodel or a $5M commercial build-out—with the exact same level of scrutiny and dedication.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-gray-100">
                <div>
                  <div className="text-5xl font-black text-primary mb-2">2003</div>
                  <div className="font-bold text-gray-900 uppercase">Year Established</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-primary mb-2">35+</div>
                  <div className="font-bold text-gray-900 uppercase">Full-time Experts</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src="/images/about-team.png" alt="Our Team" className="w-full h-auto rounded-sm shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-sm shadow-xl hidden md:block">
                <Users className="w-12 h-12 mb-4" />
                <div className="text-2xl font-black uppercase mb-1">In-House Talent</div>
                <p className="text-primary-foreground/80 font-medium">We don't just broker subs.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black uppercase text-gray-900 mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-sm shadow-sm flex gap-6"
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-gray-900 flex items-center justify-center rounded-sm">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <HardHat className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-black uppercase mb-8">Licenses & Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["NYC DOB General Contractor", "OSHA 30 Certified", "EPA Lead-Safe", "Fully Bonded", "$5M Liability Insurance"].map((cert, i) => (
              <div key={i} className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-sm font-bold tracking-wide">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}