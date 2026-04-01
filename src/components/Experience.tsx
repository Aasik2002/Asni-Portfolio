import { motion } from 'framer-motion';
import { Cpu, PenTool } from 'lucide-react';

const projects = [
  {
    title: "Beehive Monitoring System (IoT)",
    icon: Cpu,
    description: "Developed an automated system using DHT22, BMP280, and MQ-135 sensors for real-time hive health and honey production optimization. This involved hardware integration, sensor calibration, and establishing data pipelines to a central dashboard for proactive beekeeping.",
  },
  {
    title: "Mini Foldable Table Design",
    icon: PenTool,
    description: "Engineered a space-saving furniture solution using CAD modeling and structural wood analysis. Created accurate 3D prototypes in SolidWorks to ensure structural integrity and seamless folding mechanisms under static weight loads.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-[#0a0f1a]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-6xl font-black text-white mb-6">
            Technical <span className="text-[#38bdf8]">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#38bdf8] mx-auto md:mx-0 rounded-full shadow-[0_0_15px_#38bdf8]" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-12 space-y-16">
          
          {/* Timeline Growth Animation (Line Drawing) */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[-2px] md:left-[-2px] top-0 w-[2px] bg-[#38bdf8] origin-top z-0"
          />

          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Pulsing Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute -left-[53px] md:-left-[61px] top-6 w-6 h-6 rounded-full bg-[#0a0f1a] border-4 border-[#38bdf8] z-10 shadow-[0_0_15px_#38bdf8]" 
              />
              
              {/* Project Card */}
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] md:ml-4 backdrop-blur-xl hover:border-[#38bdf8]/40 transition-all duration-300 shadow-2xl group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <div className="p-4 bg-slate-800 rounded-2xl text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#0a0f1a] transition-all duration-300 shadow-lg w-fit">
                    <project.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 leading-relaxed text-lg md:text-xl font-medium">
                  {project.description}
                </p>

                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 bg-[#38bdf8]/5 opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;