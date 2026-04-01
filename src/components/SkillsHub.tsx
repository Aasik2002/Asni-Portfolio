import { motion } from 'framer-motion';
import { Settings, LineChart, TestTube } from 'lucide-react';

const skillCategories = [
  {
    title: "Materials Processing",
    description: "Advanced manufacturing & synthesis",
    icon: Settings,
    skills: ["Extrusion", "Injection Molding", "Metal Casting", "Heat Treatment", "Sintering"],
    style: 'bento-card-accent'
  },
  {
    title: "Analytical & Optimization",
    description: "Data-driven process improvement",
    icon: LineChart,
    skills: ["Material Characterization", "Error Analysis", "Process Optimization"],
    style: 'bento-card-dark'
  },
  {
    title: "Material Testing",
    description: "Quality assurance & structural integrity",
    icon: TestTube,
    skills: ["Destructive Testing", "Non-Destructive Testing (NDT)"],
    style: 'bento-card'
  }
];

const SkillsHub = () => {
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
    <section id="skills" className="py-12 px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
          Technical Lab
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
            className={`${category.style} p-8 flex flex-col h-full group transition-all duration-300 relative overflow-hidden`}
          >
            {/* Background Glow Effect on Hover */}
            {category.style === 'bento-card-dark' && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-bento-accent/5 rounded-full blur-2xl group-hover:bg-bento-accent/10 transition-all duration-500 pointer-events-none" />
            )}

            <div className="flex items-center gap-4 mb-6 z-10">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`p-4 rounded-2xl shadow-sm ${category.style === 'bento-card-dark' ? 'bg-bento-accent text-charcoal' : 'bg-charcoal/5 text-charcoal'}`}
              >
                <category.icon className="w-6 h-6" />
              </motion.div>
              <div>
                <h3 className={`text-xl font-bold leading-tight ${category.style === 'bento-card-dark' ? 'text-white' : 'text-charcoal'}`}>
                  {category.title}
                </h3>
                <p className={`text-sm mt-1 ${category.style === 'bento-card-dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {category.description}
                </p>
              </div>
            </div>

            <div className="space-y-3 mt-auto z-10">
              {category.skills.map((skill, sIdx) => (
                <motion.div 
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (sIdx * 0.1) }}
                  viewport={{ once: true }}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center shadow-sm 
                    ${category.style === 'bento-card-dark' ? 'bg-white/5 text-slate-200 border border-white/10' : 'bg-white text-slate-700 border border-slate-100'}
                  `}
                >
                  <div className={`w-1.5 h-1.5 rounded-full mr-3 shrink-0
                    ${category.style === 'bento-card-dark' ? 'bg-bento-accent' : 'bg-charcoal/20'}
                  `} />
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsHub;
