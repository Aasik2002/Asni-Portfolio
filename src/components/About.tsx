import { Anvil, Hexagon } from 'lucide-react'; // Using Hexagon for polymers/ceramics fallback

const specializations = [
  {
    title: 'Metallurgy',
    icon: Anvil,
    skills: ['Metal Casting', 'Heat Treatment'],
    color: 'from-orange-500/20 to-metallicBlue/20',
  },
  {
    title: 'Polymers',
    icon: Hexagon,
    skills: ['Polymer Processing', 'Injection Molding'],
    color: 'from-blue-500/20 to-teal-500/20',
  },
  {
    title: 'Ceramics',
    icon: Hexagon, // Ceramic molecular structure abstract
    skills: ['Refractory Materials', 'Glass Technology'],
    color: 'from-rose-500/20 to-purple-500/20',
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-charcoal/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About & <span className="text-metallicBlue">Specialization</span>
          </h2>
          <div className="w-20 h-1 bg-metallicBlue mb-8" />
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            I am a passionate Materials Technology Undergraduate at the Rajarata University of Sri Lanka, pursuing my Bachelor of Engineering Technology (Honours). With a rigorous grounding in structural mechanics, thermodynamic processes, and material characterization, I am dedicated to bridging the gap between theoretical material science and practical industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializations.map((spec) => (
            <div
              key={spec.title}
              className={`glass-card-hover p-8 rounded-2xl relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-slate-700 text-metallicBlue group-hover:scale-110 transition-transform duration-300">
                  <spec.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{spec.title}</h3>
                
                <ul className="space-y-3">
                  {spec.skills.map(skill => (
                    <li key={skill} className="flex items-center text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-metallicBlue mr-3" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
