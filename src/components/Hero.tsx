import { motion } from 'framer-motion';
import { Download, Mail, Zap } from 'lucide-react';
import profileImage from '../assets/myimage.jpeg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 200, damping: 20 } }
  };

  return (
    <section id="hero" className="pt-12 md:pt-20 px-4 md:px-8 pb-8 relative z-10 w-full max-w-7xl mx-auto">
      
      {/* Header text for Dashboard */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-5xl font-black text-charcoal tracking-tight">
          Overview
        </h1>
        <p className="text-slate-500 font-medium mt-2">Welcome to my professional engineering portfolio.</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        
        {/* Main Hero Bento Card (Spans 2 columns on desktop) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          className="bento-card-dark md:col-span-2 p-8 md:p-12 relative flex flex-col justify-between overflow-hidden group"
        >
          {/* Decorative Background Element */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" 
          />
          
          <div className="relative z-10">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-[0.1em] uppercase mb-6 backdrop-blur-sm border border-white/10 cursor-default"
            >
              Materials Technology
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
              A.M. <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.5 }}
                className="text-bento-accent inline-block"
              >ASEEM</motion.span>
            </h2>
            
            <p className="text-slate-300 font-medium max-w-md leading-relaxed mb-8 text-sm md:text-base">
              Specializing in Metallurgy, Polymers, and Ceramics. Bridging theoretical material science with industrial innovation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05, filter: "brightness(1.1)", boxShadow: "0 10px 20px rgba(204, 255, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="/Aseem_Resume.pdf" 
                download="Aseem_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-bento-accent text-charcoal font-black text-xs md:text-sm tracking-widest uppercase transition-all duration-300"
              >
                <Download className="w-4 h-4" /> 
                Download CV
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300"
              >
                <Mail className="w-4 h-4" /> 
                Contact
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Profile Info / Quick Stats Bento Card */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.05)" }}
          className="bento-card p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-bento-accent/10 rounded-full blur-2xl group-hover:bg-bento-accent/20 transition-all duration-500 pointer-events-none" />
          
          <motion.img 
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            src={profileImage} 
            alt="A.M. Aseem" 
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-[2rem] border-4 border-white shadow-xl rotate-3 z-10 mb-6 cursor-pointer" 
          />
          
          <div className="flex items-center gap-2 text-charcoal font-black text-xl mb-1 group-hover:text-bento-accent transition-colors">
            Status <motion.div 
              animate={{ rotate: [0, 15, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
            ><Zap className="w-5 h-5 text-bento-accent fill-current" /></motion.div>
          </div>
          <p className="text-slate-500 font-medium text-sm transition-colors group-hover:text-slate-700">Undergraduate Engineer at Rajarata University</p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;