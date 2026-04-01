import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactFooter = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setStatus('Sending message...');

    const templateParams = {
      from_name: formData.name,
      user_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      year: new Date().getFullYear()
    };

    emailjs.send(
      'service_ert698w',
      'template_y8f1w85',
      templateParams,
      'cHxepVbq-8rENojYR'
    )
    .then(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setStatus('Failed to send message. Please try again.');
    })
    .finally(() => {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 200, damping: 20 } }
  };

  return (
    <footer id="contact" className="py-12 px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto pb-24">
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
          Get In Touch
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
        className="grid grid-cols-1 lg:grid-cols-5 gap-6"
      >
        
        {/* Contact Info Bento Box */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)" }}
          className="bento-card-dark lg:col-span-2 p-8 relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
        >
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-bento-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-bento-accent/20 transition-colors duration-500" />

          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white mb-4 group-hover:text-bento-accent transition-colors">Let's Connect</h3>
            <p className="text-slate-400 font-medium mb-10 leading-relaxed text-sm">
              Ready to collaborate? Let's turn your material engineering challenges into reality.
            </p>

            <div className="space-y-6 flex-1">
              {[
                { icon: Phone, label: "Phone", value: "+94 714 609 913", href: "tel:+94714609913" },
                { icon: Mail, label: "Email", value: "aseemhd36@gmail.com", href: "mailto:aseemhd36@gmail.com" },
                { icon: MapPin, label: "Location", value: "Polonnaruwa, Sri Lanka", href: null }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group/item"
                >
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-bento-accent group-hover/item:text-charcoal transition-all shadow-sm"
                  >
                    <item.icon className="w-5 h-5 text-bento-accent group-hover/item:text-charcoal" />
                  </motion.div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-white hover:text-bento-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10 text-xs font-bold text-slate-600 uppercase tracking-widest relative z-10">
            © {new Date().getFullYear()} A.M. Aseem
          </div>
        </motion.div>

        {/* Contact Form Bento Box */}
        <motion.div
          variants={itemVariants}
          className="bento-card lg:col-span-3 p-8 md:p-10 relative overflow-hidden group"
        >
          <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between relative z-10">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-xs font-bold text-charcoal uppercase tracking-wider pl-1">Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-bento-accent focus:ring-4 focus:ring-bento-accent/20 transition-all font-medium text-sm hover:border-slate-300"
                    placeholder="Enter your name"
                  />
                </motion.div>
                
                {/* Email Input */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-xs font-bold text-charcoal uppercase tracking-wider pl-1">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-bento-accent focus:ring-4 focus:ring-bento-accent/20 transition-all font-medium text-sm hover:border-slate-300"
                    placeholder="example@email.com"
                  />
                </motion.div>
              </div>

              {/* Message Input */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-xs font-bold text-charcoal uppercase tracking-wider pl-1">Message</label>
                <textarea 
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-bento-accent focus:ring-4 focus:ring-bento-accent/20 transition-all resize-none font-medium text-sm hover:border-slate-300"
                  placeholder="How can I assist you with your project?"
                />
              </motion.div>
            </div>

            {/* Form Footer */}
            <motion.div variants={itemVariants} className="mt-8">
              {status && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-3 rounded-xl text-xs font-bold text-center tracking-wide
                  ${status.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
                `}>
                  {status}
                </motion.div>
              )}

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 bg-charcoal hover:bg-slate-800 text-white font-black text-sm rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 mx-auto lg:mx-0 shadow-lg shadow-charcoal/20 group/btn"
              >
                {loading ? (
                  <>Sending <Loader2 className="animate-spin w-4 h-4 text-bento-accent" /></>
                ) : (
                  <>Send Message <Send className="w-4 h-4 text-bento-accent group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /></>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default ContactFooter;;