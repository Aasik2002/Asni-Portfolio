import { motion } from 'framer-motion';
import { Award, Users, Crosshair } from 'lucide-react';

const achievements = [
  {
    role: "Area Coordinator",
    organization: "Polonnaruwa Undergraduate Association",
    icon: Crosshair,
    year: "Present",
    style: "bento-card-dark"
  },
  {
    role: "Active Member",
    organization: "Association of Material Technology (AMT)",
    icon: Users,
    year: "Present",
    style: "bento-card"
  },
  {
    role: "Active Member",
    organization: "Robotic Society of Technology (ROST)",
    icon: Award,
    year: "Present",
    style: "bento-card-accent"
  }
];

const Achievements = () => {
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
    <section id="leadership" className="py-12 px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="mb-8 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
            Leadership & Achievements
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-bento-accent rounded-full" 
          />
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        
        {achievements.map((item) => (
          <motion.div 
            key={item.organization}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
            className={`${item.style} p-8 relative flex flex-col group transition-all duration-300 overflow-hidden`}
          >
            {/* Top Stat Badge */}
            <div className={`self-end px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 z-10
              ${item.style === 'bento-card-dark' ? 'bg-white/10 text-white border border-white/5' : ''}
              ${item.style === 'bento-card' ? 'bg-slate-100 text-charcoal' : ''}
              ${item.style === 'bento-card-accent' ? 'bg-charcoal/10 text-charcoal' : ''}
            `}>
              {item.year}
            </div>

            <div className={`mt-auto pt-16 z-10`}>
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`p-4 rounded-2xl inline-flex w-fit shadow-sm mb-6
                ${item.style === 'bento-card-dark' ? 'bg-bento-accent text-charcoal' : ''}
                ${item.style === 'bento-card' ? 'bg-charcoal/5 text-charcoal' : ''}
                ${item.style === 'bento-card-accent' ? 'bg-white text-charcoal' : ''}
              `}>
                <item.icon className="w-8 h-8" />
              </motion.div>
              
              <h3 className={`text-xl md:text-2xl font-black mb-2
                ${item.style === 'bento-card-dark' ? 'text-white' : 'text-charcoal'}
              `}>{item.role}</h3>
              
              <p className={`font-medium text-sm md:text-base leading-snug
                ${item.style === 'bento-card-dark' ? 'text-slate-400' : 'text-slate-600'}
                ${item.style === 'bento-card-accent' && 'text-charcoal/80'}
              `}>{item.organization}</p>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
};

export default Achievements;