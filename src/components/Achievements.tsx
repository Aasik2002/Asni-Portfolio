import { motion } from 'framer-motion';
import { Award, Users, Crosshair } from 'lucide-react';

const achievements = [
  {
    role: "Area Coordinator",
    organization: "Polonnaruwa Undergraduate Association (PLUGA)",
    icon: Crosshair,
    year: "Present"
  },
  {
    role: "Active Member",
    organization: "Association of Material Technology (AMT)",
    icon: Users,
    year: "Present"
  },
  {
    role: "Active Member",
    organization: "Robotic Society of Technology (ROST)",
    icon: Award,
    year: "Present"
  }
];

const Achievements = () => {
  return (
    <section id="leadership" className="py-24 relative z-10 bg-[#0a0f1a]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-6xl font-black text-white mb-6">
            Achievements & <span className="text-[#38bdf8]">Leadership</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#38bdf8] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:before:absolute md:before:inset-0 md:before:left-1/2 md:before:-translate-x-px md:before:border-l-2 md:before:border-slate-800">
          
          {achievements.map((item, idx) => (
            <div key={item.organization} className="relative mb-12 md:mb-24">
              
              {/* Animated Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-10 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_20px_#38bdf8] z-20 border-4 border-[#0a0f1a]" 
              />
              
              <div className={`flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Achievement Card with Slide-in Animation */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  whileHover={{ y: -10 }}
                  className="w-full md:w-[45%] ml-8 md:ml-0 group"
                >
                  <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-md hover:border-[#38bdf8]/50 transition-all duration-300 relative overflow-hidden">
                    
                    {/* Background Decorative Icon */}
                    <item.icon className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:text-[#38bdf8]/10 transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="p-4 bg-slate-800/80 rounded-2xl text-[#38bdf8] mb-6 inline-block group-hover:bg-[#38bdf8] group-hover:text-white transition-all duration-300 shadow-lg">
                        <item.icon className="w-8 h-8" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{item.role}</h3>
                      <p className="text-slate-400 font-medium text-lg mb-4">{item.organization}</p>
                      
                      <div className="inline-block px-4 py-1.5 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] text-xs font-black tracking-widest uppercase border border-[#38bdf8]/20">
                        {item.year}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Empty space for the other side of the timeline */}
                <div className="hidden md:block w-[45%]" />
                
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Achievements;