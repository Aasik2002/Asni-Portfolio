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
    <section id="leadership" className="py-24 relative z-10 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Achievements & <span className="text-metallicBlue">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-metallicBlue mx-auto" />
        </div>

        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-1/2 space-y-8 md:space-y-12 before:absolute before:inset-0 before:ml-[50%] before:-translate-x-px md:before:border-l-2 before:border-slate-700 before:hidden md:before:block md:border-l-0">
          {achievements.map((item, idx) => (
            <div 
              key={item.organization}
              className={`relative flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-metallicBlue shadow-[0_0_10px_rgba(37,99,235,0.8)] z-10" />
              
              <div className="w-full md:w-5/12 ml-6 md:ml-0 glass-card-hover p-6 rounded-2xl md:text-center flex flex-col items-start md:items-center">
                <div className="p-3 bg-slate-800 rounded-lg text-metallicBlue mb-4 inline-block">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-left md:text-center">{item.role}</h3>
                <p className="text-slate-400 text-sm font-medium text-left md:text-center">{item.organization}</p>
                <div className="mt-4 px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs tracking-wider uppercase inline-block">
                  {item.year}
                </div>
              </div>
              <div className="hidden md:block w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
