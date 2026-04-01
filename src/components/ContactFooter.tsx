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

  return (
    <footer id="contact" className="relative z-10 bg-[#0a0f1a] border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-24">
        
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6">
            Get In <span className="text-[#38bdf8]">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#38bdf8] mx-auto rounded-full shadow-[0_0_15px_#38bdf8]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Info with Slide-in Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/40 p-10 rounded-[2rem] border border-slate-800 backdrop-blur-xl space-y-12 shadow-2xl"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 underline decoration-[#38bdf8] decoration-4 underline-offset-8">Contact Information</h3>
              <p className="text-slate-400 text-xl leading-relaxed italic">
                "Ready to collaborate? Let's turn your material engineering challenges into reality."
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, label: "Phone", value: "+94 714 609 913", href: "tel:+94714609913" },
                { icon: Mail, label: "Email", value: "aseemhd36@gmail.com", href: "mailto:aseemhd36@gmail.com" },
                { icon: MapPin, label: "Location", value: "Polonnaruwa, Sri Lanka", href: null }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-[#38bdf8] group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <item.icon className="w-7 h-7 text-[#38bdf8] group-hover:text-[#0a0f1a]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xl text-slate-200 group-hover:text-[#38bdf8] transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-xl text-slate-200">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form with Scale-in Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-900/60 border-2 border-slate-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-4 focus:ring-[#38bdf8]/10 transition-all placeholder:text-slate-600"
                    placeholder="Ahamad Aasik"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-900/60 border-2 border-slate-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-4 focus:ring-[#38bdf8]/10 transition-all placeholder:text-slate-600"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={6}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900/60 border-2 border-slate-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-4 focus:ring-[#38bdf8]/10 transition-all resize-none placeholder:text-slate-600"
                  placeholder="Tell me about your materials project..."
                />
              </div>

              {status && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-5 rounded-2xl text-sm font-black text-center tracking-wide ${status.includes('successfully') ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}
                >
                  {status}
                </motion.div>
              )}

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(56, 189, 248, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a0f1a] font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-4 shadow-xl disabled:opacity-50 text-lg uppercase tracking-widest"
              >
                {loading ? (
                  <>Sending... <Loader2 className="animate-spin w-6 h-6" /></>
                ) : (
                  <>Send Message <Send className="w-6 h-6" /></>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Footer Bottom with High Contrast */}
      <div className="border-t border-slate-800/80 py-12 text-center bg-[#050810]">
        <motion.h2 
          whileHover={{ letterSpacing: "0.2em" }}
          className="text-3xl font-black text-white tracking-tighter mb-4 italic uppercase transition-all"
        >
          ASEEM <span className="text-[#38bdf8]">PORTFOLIO</span>
        </motion.h2>
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} A.M. Aseem. Materials Technology | Engineering Honors.
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;