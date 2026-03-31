import { MonitorPlay, LineChart, TestTube } from 'lucide-react';

const skillCategories = [
  {
    title: "Design & Software",
    description: "CAD modeling and virtual instrumentation",
    icon: MonitorPlay,
    skills: ["SolidWorks (CAD)", "LabVIEW"]
  },
  {
    title: "Analytical & Optimization",
    description: "Data-driven process improvement",
    icon: LineChart,
    skills: ["Material Characterization", "Error Analysis", "Process Optimization"]
  },
  {
    title: "Material Testing",
    description: "Quality assurance & structural integrity",
    icon: TestTube,
    skills: ["Destructive Testing", "Non-Destructive Testing (NDT)"]
  }
];

const SkillsHub = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-metallicBlue">Lab</span>
          </h2>
          <div className="w-20 h-1 bg-metallicBlue mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card-hover p-8 rounded-2xl flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-slate-800/50 text-metallicBlue border border-metallicBlue/20">
                  <category.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">{category.title}</h3>
                  <p className="text-sm text-slate-400 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsHub;
