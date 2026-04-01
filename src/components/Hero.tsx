import { motion, type Variants } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import profileImage from '../assets/myimage.jpeg';

const particleVariants: Variants = {
  animate: {
    x: ["0%", "100%", "0%"],
    y: ["0%", "100%", "0%"],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear" as const,
    }
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      
      {/* --- Movable Particles Background --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(34,211,238,0.1),_transparent_70%)]" />
        
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#22d3ee]/20 blur-[1px] shadow-[0_0_10px_#22d3ee]"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            variants={particleVariants}
            animate="animate"
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          {/* 1. Profile Image - Centered & Professional Size */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-[#22d3ee]/10 blur-3xl animate-pulse" />
            <img 
              src={profileImage} 
              alt="A.M. Aseem" 
              className="relative w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-2 border-[#22d3ee]/30 p-1 bg-slate-900 shadow-2xl z-10" 
            />
          </motion.div>

          {/* 2. Compact Badge */}
          <motion.div 
            className="px-4 py-1.5 rounded-full border border-[#22d3ee]/20 bg-[#22d3ee]/5 text-[#22d3ee] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-6 backdrop-blur-sm shadow-lg"
          >
            Materials Technology | Engineering Honors
          </motion.div>
          
          {/* 3. Name - Not too big, Just Perfect */}
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-none mb-6">
            A.M. <span className="text-[#22d3ee] drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">ASEEM</span>
          </h1>
          
          {/* 4. Small & Clear Subtitle */}
          <p className="text-sm md:text-lg text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            Specializing in <span className="text-white">Metallurgy</span>, <span className="text-white">Polymers</span>, and <span className="text-white">Ceramics</span>. 
            Bridging theoretical material science with industrial innovation.
          </p>

          {/* 5. Glass & Neon Buttons (As requested, similar to your image) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* Primary Button (Neon Cyan Glow) */}
            <motion.a 
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(34, 211, 238, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="/Aseem_Resume.pdf" 
              download="Aseem_Resume.pdf"
              className="group relative flex items-center gap-3 px-10 py-4 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/30 backdrop-blur-md text-white font-black text-xs md:text-sm tracking-widest uppercase transition-all duration-300"
            >
              <Download className="w-5 h-5 text-[#22d3ee]" /> 
              Download CV
            </motion.a>
            
            {/* Secondary Button (Minimalist Glass) */}
            <motion.a 
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="flex items-center gap-3 px-10 py-4 rounded-full bg-white/0 border border-white/10 backdrop-blur-md text-slate-300 font-black text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:text-white"
            >
              <Mail className="w-5 h-5" /> 
              Contact Me
            </motion.a>

          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;