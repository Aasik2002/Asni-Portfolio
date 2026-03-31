import Hero from './components/Hero';
import About from './components/About';
import SkillsHub from './components/SkillsHub';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import References from './components/References';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="bg-charcoal min-h-screen text-slate-200 selection:bg-metallicBlue/30 selection:text-white">
      {/* Navigation (Optional fixed minimal header could go here, but omitted as per specs for cleaner look) */}
      
      <main>
        <Hero />
        <About />
        <SkillsHub />
        <Experience />
        <Achievements />
        <References />
      </main>
      
      <ContactFooter />
    </div>
  );
}

export default App;
