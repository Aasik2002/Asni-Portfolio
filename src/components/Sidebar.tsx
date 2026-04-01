import { motion } from 'framer-motion';
import { Home, User, Briefcase, Award, Users, Mail } from 'lucide-react';
import Logo from './Logo';

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Overview', href: '#hero' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Briefcase, label: 'Skills', href: '#skills' },
    { icon: Award, label: 'Experience', href: '#experience' },
    { icon: Users, label: 'References', href: '#references' },
  ];

  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 200, damping: 20, staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 300 } }
  };

  return (
    <motion.aside 
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="fixed bottom-0 left-0 md:top-0 w-full md:h-screen md:w-64 bg-charcoal border-t md:border-t-0 md:border-r border-slate-800 flex flex-row md:flex-col items-center md:items-start py-2 md:py-8 z-50 transition-all duration-300 shadow-2xl"
    >
      <motion.div variants={itemVariants} className="hidden md:flex mb-12 px-8 w-full justify-start">
        <motion.div 
          whileHover={{ rotate: 180, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="cursor-pointer"
        >
          <Logo className="w-10 h-10 drop-shadow-[0_0_15px_rgba(204,255,0,0.3)] filter" />
        </motion.div>
        <span className="hidden md:block ml-4 text-white font-bold text-xl self-center tracking-wider">
          ASEEM.
        </span>
      </motion.div>

      <nav className="flex-1 w-full flex flex-row md:flex-col justify-around md:justify-start items-center md:space-y-4 px-2 md:px-6">
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: window.innerWidth > 768 ? 5 : 0, y: window.innerWidth <= 768 ? -5 : 0 }}
            whileTap={{ scale: 0.95 }}
            href={item.href}
            className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-slate-400 hover:text-white p-2 md:p-4 rounded-xl hover:bg-slate-800/50 transition-colors group relative"
          >
            <item.icon className="w-6 h-6 md:w-6 md:h-6 group-hover:text-bento-accent transition-colors shrink-0" />
            <span className="text-[10px] md:text-base block md:hidden lg:block font-medium md:min-w-0 min-w-max text-center">{item.label}</span>
            {/* Tooltip for desktop only if collapsed - assuming desktop is full width here, but left it for reference */}
            <div className="hidden md:block absolute left-full ml-4 px-2 py-1 bg-white text-charcoal text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-md">
              {item.label}
            </div>
          </motion.a>
        ))}

        {/* Contact Icon for mobile navigation */}
        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="md:hidden flex flex-col items-center gap-1 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800/50 transition-colors group relative"
        >
          <Mail className="w-6 h-6 group-hover:text-bento-accent transition-colors shrink-0" />
          <span className="text-[10px] block font-medium min-w-max text-center">Contact</span>
        </motion.a>
      </nav>

      <motion.div variants={itemVariants} className="hidden md:block px-6 w-full mt-auto">
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(204, 255, 0, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="w-full flex justify-start items-center gap-4 bg-bento-accent text-charcoal p-4 rounded-xl font-bold shadow-lg transition-transform"
        >
          <Mail className="w-6 h-6 shrink-0" />
          <span>Contact</span>
        </motion.a>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
