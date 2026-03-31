import { Download, Mail } from 'lucide-react';
import profileImage from '../assets/myimage.jpeg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Animated Background - Industrial Gradients / Molecular Lattice concept */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(37,99,235,0.15),_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_rgba(71,85,105,0.2),_transparent_50%)]" />
        
        {/* Animated Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-metallicBlue/20"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <div className="flex justify-center mb-6">
            <img 
              src={profileImage} 
              alt="A.M. Aseem" 
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-metallicBlue/50 shadow-[0_0_30px_rgba(37,99,235,0.2)]" 
            />
          </div>

          <div className="inline-block px-4 py-1.5 rounded-full border border-metallicBlue/30 bg-metallicBlue/10 text-metallicBlue text-sm font-medium mb-4">
            Engineering Technology (Honours)
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            A.M. ASEEM
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-300 font-light max-w-3xl mx-auto">
            Specializing in <span className="text-white font-medium">Metallurgy</span>, <span className="text-white font-medium">Polymers</span>, and <span className="text-white font-medium">Ceramics</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href="/Aseem_Resume.pdf" 
              download="Aseem_Resume.pdf"
              className="flex items-center gap-2 px-8 py-4 rounded-lg bg-metallicBlue text-white font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-metallicBlue/20 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-8 py-4 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors border border-slate-600 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 gap-2">
        <span className="text-sm font-light uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-metallicBlue to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
