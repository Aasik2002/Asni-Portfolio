import { motion } from 'framer-motion';
import { Anvil, Hexagon } from 'lucide-react';

// Specializations தரவுகளை Component-க்கு உள்ளேயே வைப்பது பிழைகளைத் தவிர்க்கும்
const specializations = [
  {
    title: 'Metallurgy',
    icon: Anvil,
    skills: ['Metal Casting', 'Heat Treatment'],
    color: 'from-orange-500/20 to-blue-600/20',
  },
  {
    title: 'Polymers',
    icon: Hexagon,
    skills: ['Polymer Processing', 'Injection Molding'],
    color: 'from-blue-500/20 to-teal-500/20',
  },
  {
    title: 'Ceramics',
    icon: Hexagon, 
    skills: ['Refractory Materials', 'Glass Technology'],
    color: 'from-rose-500/20 to-purple-500/20',
  }
];

const About = () => {
  // அனிமேஷன் செட்டிங்ஸ்
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 relative z-10 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About & <span className="text-[#38bdf8]">Specialization</span>
          </h2>
          <div className="w-20 h-1 bg-[#38bdf8] mb-8" />
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            I am a passionate Materials Technology Undergraduate at the Rajarata University of Sri Lanka, pursuing my Bachelor of Engineering Technology (Honours). With a rigorous grounding in structural mechanics, thermodynamic processes, and material characterization, I am dedicated to bridging the gap between theoretical material science and practical industrial applications.
          </p>
        </motion.div>

        {/* Specialization Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {specializations.map((spec) => (
            <motion.div
              key={spec.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-[#38bdf8]/50 transition-all group relative overflow-hidden backdrop-blur-sm"
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-white transition-all duration-300 shadow-xl">
                  <spec.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{spec.title}</h3>
                
                <ul className="space-y-3">
                  {spec.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-slate-400 group-hover:text-slate-200 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mr-3 shadow-[0_0_8px_#38bdf8]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;