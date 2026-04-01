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
      className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-charcoal border-r border-slate-800 flex flex-col items-center md:items-start py-8 z-50 transition-all duration-300 shadow-2xl"
    >
      <motion.div variants={itemVariants} className="mb-12 px-0 md:px-8 w-full flex justify-center md:justify-start">
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

      <nav className="flex-1 w-full space-y-4 px-3 md:px-6">
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            href={item.href}
            className="flex items-center gap-4 text-slate-400 hover:text-white p-3 md:p-4 rounded-xl hover:bg-slate-800/50 transition-colors group relative"
          >
            <item.icon className="w-6 h-6 group-hover:text-bento-accent transition-colors shrink-0" />
            <span className="hidden md:block font-medium">{item.label}</span>
            {/* Tooltip for mobile */}
            <div className="md:hidden absolute left-full ml-4 px-2 py-1 bg-white text-charcoal text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-md">
              {item.label}
            </div>
          </motion.a>
        ))}
      </nav>

      <motion.div variants={itemVariants} className="px-3 md:px-6 w-full mt-auto">
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(204, 255, 0, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="w-full flex justify-center md:justify-start items-center gap-4 bg-bento-accent text-charcoal p-3 md:p-4 rounded-xl font-bold shadow-lg transition-transform"
        >
          <Mail className="w-6 h-6 shrink-0" />
          <span className="hidden md:block">Contact</span>
        </motion.a>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
