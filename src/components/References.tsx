import { motion } from 'framer-motion';
import { User, Phone, Mail, GraduationCap } from 'lucide-react';

const referenceData = [
  {
    name: "Dr. H.A. Naveen Dharmagunawardhane",
    degree: "", 
    title: "Senior Lecturer (Gr.II)",
    role: "HOD/Department of Materials Technology, Faculty of Technology",
    organization: "Rajarata University of Sri Lanka",
    phones: ["+94 25 226 6379", "+94 71 224 8082"],
    email: "ndharmag@tec.rjt.ac.lk"
  },
  {
    name: "Mr. Damith Weerasinghe",
    degree: "B.sc.Eng",
    title: "",
    role: "Lecturer",
    organization: "Rajarata University of Sri Lanka",
    phones: ["+94 71 074 3041"],
    email: "dcweeras@tec.rjt.ac.lk"
  }
];

const References = () => {
  return (
    <section id="references" className="py-24 relative z-10 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-black text-white mb-6">
            Professional <span className="text-[#38bdf8]">References</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#38bdf8] mx-auto rounded-full shadow-[0_0_15px_#38bdf8]" />
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center lg:items-stretch">
          {referenceData.map((ref, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2rem] max-w-lg w-full relative overflow-hidden group flex flex-col backdrop-blur-xl hover:border-[#38bdf8]/40 transition-all duration-300 shadow-2xl"
            >
              {/* Decorative Animated Glow */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#38bdf8]/10 rounded-full blur-3xl group-hover:bg-[#38bdf8]/20 transition-all duration-500" />
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left h-full">
                {/* Profile Icon Animation */}
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-24 h-24 bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-slate-700 shrink-0 shadow-xl group-hover:border-[#38bdf8] transition-all"
                >
                  <User className="w-10 h-10 text-slate-400 group-hover:text-[#38bdf8]" />
                </motion.div>
                
                <div className="flex-1 flex flex-col h-full space-y-5">
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#38bdf8] transition-colors">{ref.name}</h3>
                    {ref.degree && (
                      <p className="text-slate-400 flex items-center justify-center sm:justify-start gap-2 mt-2 font-medium">
                        <GraduationCap className="w-5 h-5 text-[#38bdf8]" /> {ref.degree}
                      </p>
                    )}
                    <p className="text-slate-300 mt-2 font-semibold italic">{ref.title}</p>
                    <p className="text-[#38bdf8] font-black mt-3 leading-tight">{ref.role}</p>
                    <p className="text-slate-500 text-sm font-bold mt-1 uppercase tracking-wider">{ref.organization}</p>
                  </div>
                  
                  {/* Contact Links with Hover Effects */}
                  <div className="space-y-3 pt-6 border-t border-slate-800 mt-auto">
                    {ref.phones.map((phone, phoneIdx) => (
                      <motion.a 
                        key={phoneIdx} 
                        whileHover={{ x: 5 }}
                        href={`tel:${phone.replace(/\s+/g, '')}`} 
                        className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group/link w-fit mx-auto sm:mx-0"
                      >
                        <div className="p-2.5 rounded-xl bg-slate-800 group-hover/link:bg-[#38bdf8] group-hover/link:text-[#0a0f1a] transition-all">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span className="font-medium">{phone}</span>
                      </motion.a>
                    ))}
                    <motion.a 
                      whileHover={{ x: 5 }}
                      href={`mailto:${ref.email}`} 
                      className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group/link w-fit mx-auto sm:mx-0"
                    >
                      <div className="p-2.5 rounded-xl bg-slate-800 group-hover/link:bg-[#38bdf8] group-hover/link:text-[#0a0f1a] transition-all">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{ref.email}</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;