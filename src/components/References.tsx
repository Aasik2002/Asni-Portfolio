import { motion } from 'framer-motion';
import { User, Phone, Mail, GraduationCap } from 'lucide-react';

const referenceData = [
  {
    name: "Dr. H.A. Naveen Dharmagunawardhane",
    degree: "", 
    title: "Senior Lecturer (Gr.II)",
    role: "HOD/Department of Materials Technology",
    organization: "Rajarata University of Sri Lanka",
    phones: ["+94 25 226 6379", "+94 71 224 8082"],
    email: "ndharmag@tec.rjt.ac.lk",
    style: "bento-card"
  },
  {
    name: "Mr. Damith Weerasinghe",
    degree: "B.sc.Eng",
    title: "",
    role: "Lecturer",
    organization: "Rajarata University of Sri Lanka",
    phones: ["+94 71 074 3041"],
    email: "dcweeras@tec.rjt.ac.lk",
    style: "bento-card-dark"
  }
];

const References = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 150, damping: 20 } }
  };

  return (
    <section id="references" className="py-12 px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
          Professional References
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1.5 bg-bento-accent rounded-full mb-6" 
        />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {referenceData.map((ref) => (
          <motion.div 
            key={ref.name}
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)" }}
            className={`${ref.style} p-8 relative flex flex-col transition-all duration-300 overflow-hidden group`}
          >
            {/* Dark Card Subtle Glow */}
            {ref.style === 'bento-card-dark' && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-bento-accent/10 transition-colors duration-500" />
            )}

            <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
              
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${ref.style === 'bento-card-dark' ? 'bg-bento-accent/10 border border-bento-accent/20' : 'bg-charcoal/5 border border-slate-200'}`}
              >
                <User className={`w-8 h-8 ${ref.style === 'bento-card-dark' ? 'text-bento-accent' : 'text-charcoal'}`} />
              </motion.div>
              
              <div className="flex-1 flex flex-col space-y-2 w-full">
                <h3 className={`text-xl md:text-2xl font-black ${ref.style === 'bento-card-dark' ? 'text-white' : 'text-charcoal'}`}>
                  {ref.name}
                </h3>
                
                {ref.degree && (
                  <p className={`flex items-center gap-2 text-sm font-bold ${ref.style === 'bento-card-dark' ? 'text-bento-accent' : 'text-metallicBlue'}`}>
                    <GraduationCap className="w-4 h-4" /> {ref.degree}
                  </p>
                )}
                
                {ref.title && <p className={`text-sm italic font-medium ${ref.style === 'bento-card-dark' ? 'text-slate-400' : 'text-slate-500'}`}>{ref.title}</p>}
                
                <p className={`font-black text-sm md:text-base leading-tight pt-1 ${ref.style === 'bento-card-dark' ? 'text-white' : 'text-charcoal'}`}>{ref.role}</p>
                <p className={`text-xs font-bold uppercase tracking-wider ${ref.style === 'bento-card-dark' ? 'text-slate-500' : 'text-slate-400'}`}>{ref.organization}</p>
                
                <div className={`mt-6 pt-6 border-t space-y-3 w-full ${ref.style === 'bento-card-dark' ? 'border-white/10' : 'border-slate-100'}`}>
                  {ref.phones.map((phone, phoneIdx) => (
                    <motion.a 
                      key={phoneIdx} 
                      whileHover={{ x: 5 }}
                      href={`tel:${phone.replace(/\s+/g, '')}`} 
                      className={`flex items-center gap-3 font-medium transition-colors group
                        ${ref.style === 'bento-card-dark' ? 'text-slate-300 hover:text-bento-accent' : 'text-slate-600 hover:text-metallicBlue'}
                      `}
                    >
                      <div className={`p-2 rounded-lg transition-colors ${ref.style === 'bento-card-dark' ? 'bg-white/5 group-hover:bg-bento-accent group-hover:text-charcoal' : 'bg-slate-100 group-hover:bg-metallicBlue group-hover:text-white'}`}>
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{phone}</span>
                    </motion.a>
                  ))}
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href={`mailto:${ref.email}`} 
                    className={`flex items-center gap-3 font-medium transition-colors group
                      ${ref.style === 'bento-card-dark' ? 'text-slate-300 hover:text-bento-accent' : 'text-slate-600 hover:text-metallicBlue'}
                    `}
                  >
                    <div className={`p-2 rounded-lg transition-colors ${ref.style === 'bento-card-dark' ? 'bg-white/5 group-hover:bg-bento-accent group-hover:text-charcoal' : 'bg-slate-100 group-hover:bg-metallicBlue group-hover:text-white'}`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{ref.email}</span>
                  </motion.a>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default References;