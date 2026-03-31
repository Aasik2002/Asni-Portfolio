import { useState } from 'react';
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
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus('Please enter a valid email.');
      return;
    }

    setLoading(true);
    setStatus('Sending message...');

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'service_ert698w',
      'template_vte7bgc',
      templateParams,
      'cHxepVbq-8rENojYR'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
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
    <footer id="contact" className="relative z-10 bg-charcoal border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Let's <span className="text-metallicBlue">Connect</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Whether you have a question, a project proposition, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-6">
              <a href="tel:+94714609913" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-metallicBlue transition-colors shadow-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Phone</p>
                  <p className="text-lg">+94 714 609 913</p>
                </div>
              </a>
              
              <a href="mailto:aseemhd36@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-metallicBlue transition-colors shadow-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-lg">aseemhd36@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-lg">Polonnaruwa, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-300 pl-1">Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-metallicBlue focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-300 pl-1">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-metallicBlue focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-300 pl-1">Message</label>
                <textarea 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-metallicBlue focus:border-transparent transition-all min-h-[150px] resize-y"
                  placeholder="Your message here..."
                />
              </div>

              {status && (
                <p className={`text-sm ${status.includes('success') ? 'text-green-500' : 'text-red-500'} font-medium`}>
                  {status}
                </p>
              )}

              <button 
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-metallicBlue hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg shadow-metallicBlue/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    Sending...
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-slate-800/80 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} A.M. Aseem. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Built with <span className="text-metallicBlue mx-1">React & Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
