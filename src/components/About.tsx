import { motion } from 'framer-motion';
import { Anvil, Hexagon, Component } from 'lucide-react';

const specializations = [
  {
    title: 'Metallurgy',
    icon: Anvil,
    skills: ['Metal Casting', 'Heat Treatment', 'Alloying'],
    style: 'bento-card-dark',
  },
  {
    title: 'Polymers',
    icon: Component,
    skills: ['Polymer Processing', 'Injection Molding', 'Extrusion'],
    style: 'bento-card-accent',
  },
  {
    title: 'Ceramics',
    icon: Hexagon, 
    skills: ['Refractory Materials', 'Glass Tech', 'Sintering'],
    style: 'bento-card',
  }
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 200, damping: 20 } }
  };

  return (
    <section id="about" className="py-12 px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
      
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
          Specializations
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1.5 bg-bento-accent rounded-full mb-6" 
        />
      </motion.div>

      {/* Specialization Cards Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {specializations.map((spec) => (
          <motion.div
            key={spec.title}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            className={`${spec.style} p-8 group relative transition-all duration-300 flex flex-col`}
          >
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shrink-0 shadow-sm
              ${spec.style === 'bento-card' ? 'bg-bento-bg text-charcoal' : ''}
              ${spec.style === 'bento-card-dark' ? 'bg-white/10 text-white' : ''}
              ${spec.style === 'bento-card-accent' ? 'bg-charcoal/10 text-charcoal' : ''}
            `}>
              <spec.icon className="w-7 h-7" />
            </motion.div>
            
            <h3 className={`text-2xl font-black mb-6 ${spec.style === 'bento-card-dark' ? 'text-white' : 'text-charcoal'}`}>
              {spec.title}
            </h3>
            
            <ul className="space-y-4 mt-auto">
              {spec.skills.map((skill, index) => (
                <motion.li 
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className={`flex items-center text-sm font-semibold 
                  ${spec.style === 'bento-card-dark' ? 'text-slate-300' : 'text-slate-600'}
                  ${spec.style === 'bento-card-accent' && 'text-charcoal/80'}
                `}>
                  <div className={`w-2 h-2 rounded-full mr-3 shrink-0
                    ${spec.style === 'bento-card-dark' ? 'bg-bento-accent' : 'bg-charcoal'}
                  `} />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;