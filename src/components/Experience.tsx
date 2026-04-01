import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Undergraduate Engineer",
    company: "Laugfs Lubricants Ltd",
    duration: "Aug 2024 - Feb 2025",
    description: "Conducted ISO testing on petroleum products, executed Six Sigma (DMAIC) methodology to cut packaging rework, implemented condition monitoring with oil analysis, and streamlined grease plant procurement through proactive supply chain tracking.",
    skills: ["Petroleum Testing", "DMAIC", "Condition Monitoring"],
    style: "bento-card-dark"
  },
  {
    role: "Industrial Trainee",
    company: "Nippon Paint Lanka (Pvt)Ltd",
    duration: "Nov 2023 - May 2024",
    description: "Monitored emulsion/enamel processes, enhanced supply chain reliability via supplier auditing, developed premium floor coating formulas through localized R&D, and optimized waste management to align with ISO 14001 cost-saving standards.",
    skills: ["Polymer Testing", "R&D", "ISO 14001"],
    style: "bento-card"
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 200, damping: 20 } }
  };

  return (
    <section id="experience" className="py-12 px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
          Professional Experience
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1.5 bg-bento-accent rounded-full mb-6" 
        />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        
        {experiences.map((exp) => (
          <motion.div 
            key={exp.company}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className={`${exp.style} p-8 relative flex flex-col group transition-all duration-300 overflow-hidden`}
          >
            {/* Dark Card Subtle Glow */}
            {exp.style === 'bento-card-dark' && (
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-bento-accent/10 transition-colors duration-500" />
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 z-10">
              <div className="flex items-center gap-4">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`p-4 rounded-xl shadow-sm ${exp.style === 'bento-card-dark' ? 'bg-bento-accent text-charcoal' : 'bg-charcoal/5 text-charcoal'}`}
                >
                  <Briefcase className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className={`text-xl font-black leading-tight ${exp.style === 'bento-card-dark' ? 'text-white' : 'text-charcoal'}`}>
                    {exp.role}
                  </h3>
                  <p className={`font-bold text-sm ${exp.style === 'bento-card-dark' ? 'text-bento-accent' : 'text-metallicBlue'}`}>
                    {exp.company}
                  </p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap self-start sm:self-auto
                ${exp.style === 'bento-card-dark' ? 'bg-white/10 text-white' : 'bg-slate-100 text-charcoal'}`}>
                {exp.duration}
              </div>
            </div>

            <p className={`text-sm mb-6 leading-relaxed flex-1 z-10 ${exp.style === 'bento-card-dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto z-10">
              {exp.skills.map((skill, sIdx) => (
                <motion.span 
                  key={skill} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (sIdx * 0.1) }}
                  viewport={{ once: true }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold 
                    ${exp.style === 'bento-card-dark' ? 'bg-white/10 text-slate-200 border border-white/5' : 'bg-white text-slate-700 border border-slate-100'}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
};

export default Experience;