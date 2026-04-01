import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactFooter = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // அடிப்படை சரிபார்ப்பு (Validation)
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setStatus('Sending message...');

    // EmailJS டேஷ்போர்டில் உள்ள மாறிகளுடன் (Variables) இவை பொருந்த வேண்டும்
    const templateParams = {
      from_name: formData.name,    // மின்னஞ்சலில் Sender Name ஆகத் தெரியும்
      user_email: formData.email,   // அனுப்பியவரின் மின்னஞ்சல்
      message: formData.message,    // செய்தி
      reply_to: formData.email,     // நீங்கள் அவருக்கு பதில் அனுப்ப உதவும்
      year: new Date().getFullYear()
    };

    // உங்களது புதிய Template ID இங்கே பயன்படுத்தப்பட்டுள்ளது
    emailjs.send(
      'service_ert698w',     // Service ID
      'template_y8f1w85',    // புதிய Template ID
      templateParams,
      'cHxepVbq-8rENojYR'    // Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // படிவத்தை காலியாக்க
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
    <footer id="contact" className="relative z-10 bg-[#0f172a] border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* தலைப்பு பகுதி */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Get In <span className="text-[#38bdf8]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#38bdf8] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* இடது பக்கம்: தொடர்பு விவரங்கள் */}
          <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you have a question, a project proposition, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:+94714609913" className="flex items-center gap-5 group transition-all">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-[#38bdf8] transition-all">
                  <Phone className="w-6 h-6 text-[#38bdf8] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Phone</p>
                  <p className="text-lg text-slate-200">+94 714 609 913</p>
                </div>
              </a>

              <a href="mailto:aseemhd36@gmail.com" className="flex items-center gap-5 group transition-all">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-[#38bdf8] transition-all">
                  <Mail className="w-6 h-6 text-[#38bdf8] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email</p>
                  <p className="text-lg text-slate-200">aseemhd36@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#38bdf8]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Location</p>
                  <p className="text-lg text-slate-200">Polonnaruwa, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* வலது பக்கம்: படிவம் (Contact Form) */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50 focus:border-[#38bdf8] transition-all"
                    placeholder="Ahamad Aasik"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50 focus:border-[#38bdf8] transition-all"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
                <textarea 
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50 focus:border-[#38bdf8] transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              {status && (
                <div className={`p-4 rounded-xl text-sm font-bold text-center ${status.includes('successfully') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                  {status}
                </div>
              )}

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0f172a] font-black py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#38bdf8]/20 disabled:opacity-50"
              >
                {loading ? (
                  <>Sending... <Loader2 className="animate-spin w-6 h-6" /></>
                ) : (
                  <>SEND MESSAGE <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* கீழே உள்ள பகுதி */}
      <div className="border-t border-slate-800/50 py-10 text-center">
        <h2 className="text-2xl font-black text-white tracking-tighter mb-4 italic uppercase">ASEEM <span className="text-[#38bdf8]">PORTFOLIO</span></h2>
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} A.M. Aseem. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default ContactFooter;