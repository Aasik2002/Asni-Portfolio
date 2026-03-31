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
    <section id="experience" className="py-24 relative z-10 bg-charcoal/95">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-metallicBlue">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-metallicBlue mx-auto md:mx-0" />
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-10 space-y-12">
          {projects.map((project) => (
            <div key={project.title} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[45px] md:-left-[51px] top-6 w-5 h-5 rounded-full bg-charcoal border-4 border-metallicBlue shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
              
              <div className="glass-card-hover p-8 rounded-2xl md:ml-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-metallicBlue">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
